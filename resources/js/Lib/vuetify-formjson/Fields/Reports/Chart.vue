<template>
    <v-col
        cols="12"
        :class="`vf-input ${this.field.class ? this.field.class:''}`"
        :md="field.md ? field.md : 6"
        :lg="field.lg ? field.lg : 6"
        :sm="field.sm ? field.sm : 6"
        :xs="field.xs ? field.xs : 6"
    >
        <v-card style="border: solid 1px lightgray;">
            <v-card-actions
            dark
            class="text-subtitle-1 pt-0"
            >
            <v-list
                dense
                class="px-0 mx-auto"
            >
                <v-list-item class="px-0">
                <v-list-item-content>
                    <v-list-item-title>{{ field.label }}</v-list-item-title>
                    <v-list-item-subtitle v-if="field.subtitle">
                    {{ field.subtitle }}
                    <v-chip
                        dense
                        small
                    >
                        {{ this.duration }}
                    </v-chip>
                    <v-chip
                        v-if="field.is_windowed"
                        dense
                        small
                    >
                        {{ this.window }}
                    </v-chip>
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action class="my-auto d-flex flex-row">
                    <v-btn
                    :loading="loading"
                    icon
                    small
                    @click="updateReport()"
                    >
                    <v-icon small>
                        mdi-refresh
                    </v-icon>
                    </v-btn>
                    <v-btn
                    icon
                    small
                    :color="autoupdate ? 'success': 'secondary'"
                    @click="autoupdate = !autoupdate"
                    >
                    <v-icon small>
                        mdi-refresh-circle
                    </v-icon>
                    </v-btn>
                    <v-btn
                    icon
                    small
                    @click="show = !show"
                    >
                    <v-icon small>
                        {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                    </v-icon>
                    </v-btn>
                </v-list-item-action>
                </v-list-item>
            </v-list>
            <div class="d-flex flex-column" />
            </v-card-actions>
            <v-expand-transition>
            <div v-show="show">
                <v-divider />
                <v-card-text class="d-flex flex-column">
                <v-select
                    v-model="duration"
                    :items="durations"
                    label="بازه زمانی گزارش"
                    flat
                    outlined
                    rounded
                    hide-details
                    dense
                    class="mx-4 my-1"
                    item-text="id"
                    item-value="id"
                />
                <v-select
                    v-if="field.is_windowed"
                    v-model="window"
                    :items="windows"
                    label="پنجره تجمیع"
                    flat
                    outlined
                    rounded
                    hide-details
                    dense
                    class="mx-4 my-1"
                    item-text="id"
                    item-value="id"
                />
                <vf-fields-renderer
                    v-if="field.filters"
                    v-model="extraFilters"
                    :fields="field.filters"
                    :options="{ type: 'col', }"
                />
                </v-card-text>
            </div>
            </v-expand-transition>
            <v-card-text class="pb-0">
            <canvas
                ref="chart"
                style="height: 80%;"
            />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
import BaseComponent, {
    DecoratableComponent
} from "./../mixins";
import Chart from "chart.js";
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfReportChartInput",
    components: {},
    mixins: [BaseComponent, DecoratableComponent],
    props: {
        id: String,
        field: Object,
        value: [Object, String, Array, Number]
    },
    data: vm => ({
        data: vm.field.data,
        duration: vm.field.default_duration ? vm.field.default_duration : "1h",
        window: vm.field.default_window ? vm.field.default_window : "1m",
        show: false,
        loading: false,
        autoupdate: false,
        durations: [
            {
                id: "1m"
            },
            {
                id: "5m"
            },
            {
                id: "10m"
            },
            {
                id: "30m"
            },
            {
                id: "1h"
            },
            {
                id: "3h"
            },
            {
                id: "6h"
            },
            {
                id: "12h"
            },
            {
                id: "1d"
            },
            {
                id: "2d"
            },
            {
                id: "7d"
            },
            {
                id: "15d"
            },
            {
                id: "30d"
            },
            {
                id: "90d"
            },
            {
                id: "180d"
            },
            {
                id: "1y"
            },
            {
                id: "2y"
            }
        ],
        windows: [
            {
                id: "1s"
            },
            {
                id: "10s"
            },
            {
                id: "30s"
            },
            {
                id: "1m"
            },
            {
                id: "5m"
            },
            {
                id: "10m"
            },
            {
                id: "15m"
            },
            {
                id: "30m"
            },
            {
                id: "1h"
            },
            {
                id: "3h"
            },
            {
                id: "6h"
            },
            {
                id: "12h"
            },
            {
                id: "1d"
            },
            {
                id: "7d"
            },
            {
                id: "30d"
            }
        ],
        chart: null,
        extraFilters: {},
    }),
    computed: {
        datasets() {
            if (!this.data) {
                return [];
            }
            function adjust(color, amount) {
                return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
            }
            const getRandomColor = () => ('#'+Math.floor(Math.random()*16777215).toString(16)+'55');
            if (this.field.report_groups && this.field.report_groups.length > 0) {
                const groupKeys = this.field.report_groups.split(",");
                const sets = [];
                groupKeys.forEach(key => {
                    const groups = {};
                    this.data.map(i => {
                        groups[i[key]] ? (groups[i[key]] += 1) : (groups[i[key]] = 1);
                    });
                    let indexer = 0;
                    for (const keyVals in groups) {
                        let xLabel = "";
                        if (this.field.labels) {
                            const label = this.field.labels.filter(l => {
                                return l[this.field.report_label_key] == keyVals;
                            });
                            if (label && label[0]) {
                                const flabel = { key: keyVals, ...label[0] };
                                xLabel = this.getDecorableLabel(flabel);
                            }
                        }
                        const color = getRandomColor();
                        sets.push({
                            label: xLabel,
                            backgroundColor: color,
                            borderColor: adjust(color, 20),
                            data: this.data
                                .filter(i => i[key] == keyVals)
                                .map(i => ({ y: i._value ? i._value : 0, x: moment(i._time) }))
                        });
                        indexer++;
                    }
                });
                return sets;
            } else {
                const backgroundColor = [];
                const borderColor = [];
                this.data.forEach((i) => {
                    const color = getRandomColor();
                    backgroundColor.push(adjust(color, 20))
                    borderColor.push(color);
                })
                return [
                    {
                        data: this.data.map(i => i._value),
                        backgroundColor,
                        borderColor,
                        borderWidth: 1
                    }
                ];
            }
        },
        labels() {
            if (this.field.is_x_time) {
                return this.data.map(i => i._time);
            }

            return this.data.map(i => {
                if (this.field.labels) {
                    const label = this.field.labels.filter(l => {
                        return (
                            l[this.field.report_label_key] == i[this.field.report_item_key]
                        );
                    });
                    if (label && label[0]) {
                        const flabel = { ...i, ...label[0] };
                        return this.getDecorableLabel(flabel);
                    }
                }
                return i[this.field.report_item_key];
            });
        }
    },
    watch: {
        data() {
            if (this.data) {
                if (this.chart) {
                    this.chart.destroy();
                }
                this.chart = new Chart(this.$refs.chart, {
                    type: this.field.report_type,
                    data: {
                        labels: this.labels,
                        datasets: this.datasets
                    },
                    options: {
                        scales:
              this.field.report_type === "bar" ||
              this.field.report_type === "line"
                  ? {
                      xAxes: [
                          {
                              type: "time",
                              time: {
                                  unit: this.window.endsWith("d")
                                      ? "day"
                                      : this.window.endsWith("h")
                                          ? "hour"
                                          : this.window.endsWith("s")
                                              ? "second"
                                              : "minute",
                                  tooltipFormat: "jYYYY/jMM/jDD, h:mm:ss a",
                                  displayFormats: {
                                      millisecond: "h:mm:ss.SSS a",
                                      second: "h:mm:ss a",
                                      minute: "h:mm a",
                                      hour: "hA",
                                      day: "jMM/jDD",
                                      week: "ll",
                                      month: "jYYYY/jMM",
                                      quarter: "[Q]Q - jYYYY",
                                      year: "jYYYY"
                                  }
                              }
                          }
                      ]
                  }
                  : {},
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                });
            }
        }
    },
    mounted() {
        Chart._adapters._date.override({
            format: function(time, fmt) {
                return moment(time)
                    .locale("fa")
                    .format(fmt);
            }
        });

        this.updateReport();
    },
    methods: {
        updateReport() {
            this.loading = true;
            const host = this.$store.state.host;

            const start = moment();
            const stop = moment();
            const am = parseInt(this.duration.substr(0, this.duration.length - 1));
            if (this.duration.endsWith("m")) {
                start.add(-1 * am, "minute");
            } else if (this.duration.endsWith("h")) {
                start.add(-1 * am, "hour");
            } else if (this.duration.endsWith("d")) {
                start.add(-1 * am, "day");
            } else if (this.duration.endsWith("s")) {
                start.add(-1 * am, "secoonds");
            } else if (this.duration.endsWith("y")) {
                start.add(-1 * am, "year");
            }

            const filters = this.field.filters ? this.extraFilters : {}
            if (this.field.query_filters) {
                this.field.query_filters.forEach((f) => {
                    filters[f.filter] = f.value;
                })
            }

            if (this.field.report_url) {
                host
                    .axios({
                        url: this.field.report_url,
                        method: "POST",
                        headers: host.getWebAuthHeaders({}),
                        data: {
                            name: this.field.report_name,
                            from: start.format("Y-MM-DDTH:mm:ssZ"),
                            to: stop.format("Y-MM-DDTH:mm:ssZ"),
                            window: this.window,
                            group: this.field.group?.split(','),
                            filters,
                            func: this.field.func
                        }
                    })
                    .then(response => {
                        this.loading = false;
                        this.data = response.data;
                    })
                    .catch(error => {
                        this.loading = false;
                        host.showSnack(error.message);
                    });
            }
        }
    }
};
</script>
