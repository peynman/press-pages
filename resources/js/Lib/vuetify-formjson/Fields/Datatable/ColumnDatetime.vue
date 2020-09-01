<template>
  <div class="d-flex flex-column my-1">
    <v-chip
      dense
      small
      color="secondary darken-2"
      dark
      outlined
      v-if="isDatetime"
    >
      {{ dateString }}
    </v-chip>
    <v-chip
      dense
      x-small
      color="secondary lighten-2"
      dark
      outlined
      v-if="isDatetime"
    >
      {{ timeString }}
    </v-chip>
  </div>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";


export default {
    name: "VfDatatableColumnDatetime",
    props: {
        item: Object,
        column: Object
    },
    data: () => ({
        mom: null,
        dayOfWeek: {
            1: "شنبه"
        },
        dateString: "",
        timeString: "",
    }),
    methods: {
        getNestedPathValue: function (item, path) {
            const parts = path.split('.')
            let val = item
            parts.forEach((p) => {
                if (p.length > 0) {
                    if (val) {
                        val = val[p]
                    }
                }
            })
            return val
        },
        updateDatetime() {
            const dt = this.getNestedPathValue(this.item, this.column.id);
            if (dt) {
                if (dt.includes('+')) {
                    this.mom = moment(dt, "YYYY/MM/DDTHH:mm:ssZ");
                    this.mom.locale("fa");
                } else {
                    this.mom = moment(momentTz.utc(dt).tz(momentTz.tz.guess()));
                    this.mom.locale("fa");
                }
            }
            if (this.mom) {
                this.dateString = this.mom.format("jYYYY/jMM/jDD");
                this.timeString = this.mom.format("dddd") + " " + this.mom.format("HH:mm");
            }
        }
    },
    computed: {
        isDatetime() {
            return this.getNestedPathValue(this.item, this.column.id)
        }
    },
    watch: {
        item: {
            deep: true,
            handler() {
                this.updateDatetime()
            }
        }
    },
    mounted() {
        this.updateDatetime()
    }
};
</script>
