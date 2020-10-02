<template>
  <v-text-field
    v-model="devalue"
    :class="`vf-input ${field.class ? field.class:''}`"
    :label="field.label"
    hide-details="auto"
    mask="####"
    v-bind="fieldProps"
    :hint="hintString"
    @keyup.native="updateInput($event)"
    v-on="eventHandlers"
  >
    <template #prepend>
      <v-icon
        v-show="devalue && devalue.length > 1"
        :color="isValid ? dirty ? 'orange':'green':'red'"
      >
        {{ isValid ? dirty ? 'mdi-alert' : 'mdi-check' : 'mdi-alert' }}
      </v-icon>
    </template>
    <!-- <template v-slot:prepend-inner>
      <v-menu
        top
        fixed
        nudge-top="-30"
        v-model="menu"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
            <v-btn icon small v-on="on"><v-icon small>mdi-calendar-blank-multiple</v-icon></v-btn>
        </template>
        <v-card class="d-flex flex-column">
            <v-card-title class="pa-1">
                <v-autocomplete class="me-1" style="width: 60%" v-model="tz" dark background-color="primary" :hide-details="true" dense solo :items="timezones" placeholder="Timezone" v-bind="field.timezoneProps" v-on="field.timezoneProps && field.timezoneProps['v-on'] ? field.timezoneProps['v-on']: {}"></v-autocomplete>
                <v-select style="width: 30%" v-model="calendar" dark background-color="primary" :hide-details="true" dense solo :items="calendars" placeholder="Calendar" v-bind="calendarProps" v-on="field.calendarProps && field.calendarProps['v-on'] ? field.calendarProps['v-on']: {}"></v-select>
            </v-card-title>
            <v-card-text class="pa-1 d-flex flex-row">
                <v-date-picker class="me-1" tiled landscape v-model="date" v-bind="dateProps" v-on="field.dateProps && field.dateProps['v-on'] ? field.dateProps['v-on']: {}">
                </v-date-picker>
                <v-time-picker tiled v-show="!field.hideTime" width="200" v-model="time" v-bind="timeProps" v-on="field.timeProps && field.timeProps['v-on'] ? field.timeProps['v-on']: {}"></v-time-picker>
            </v-card-text>
        </v-card>
      </v-menu>
    </template>-->
  </v-text-field>
</template>

<script>
import BaseComponent from "./mixins";
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

import {
    VTextField,
    VCard,
    VCardText,
    VMenu,
    VTimePicker,
    VDatePicker,
    VCardTitle
} from "vuetify/lib";

export default {
    name: "VfDatetimeInput",
    components: {
        VTextField,
        // VCard,
        // VCardText,
        // VMenu,
        // VTimePicker,
        // VDatePicker,
        // VCardTitle
    },
    mixins: [BaseComponent],
    props: {
        id: String,
        value: String,
        field: Object
    },
    emits: ['input'],
    data() {
        const inTime = moment(this.value, 'YYYY/MM/DDTHH:mm:ssZ');
        return {
            menu: false,
            date: null,
            time: null,
            calendar: "Gregorian",
            tz: momentTz.tz.guess(),
            valid: false,
            dirty: false,
            devalue: this.value && inTime.isValid() ? inTime.format('jYYYY/jMM/jDDTHH:mm'):'',
        };
    },
    computed: {
        timezones() {
            return momentTz.tz.names();
        },
        calendars() {
            return ["Gregorian", "Shamsi", "Ghamari"];
        },
        calendarProps() {
            return {};
        },
        timeProps() {
            return {};
        },
        dateProps() {
            return {};
        },
        hintString() {
            return `با فرمت ` + moment().format("jYYYY/jMM/jDDTHH:mm") + ` وارد کنید`;
        },
        isValid() {
            return this.getValueDateTime().isValid()
        }
    },
    watch: {
        date() {
            this.updateDateTime();
        },
        time() {
            this.updateDateTime();
        },
        tz() {
            this.updateDateTime();
        },
        value () {
            const inTime = moment(this.value, 'YYYY/MM/DDTHH:mm:ssZ');
            this.devalue = this.value && inTime.isValid() ? inTime.format('jYYYY/jMM/jDDTHH:mm'):'';
        }
    },
    methods: {
        updateDateTime() {
            console.log(this.date, this.time, this.tz);
        },
        updateInput: function(ev) {
            if ([13].includes(ev.keyCode)) {
                if (this.isValid) {
                    this.dirty = false;
                    this.devalue = this.getValueDateTime().format('jYYYY/jMM/jDDTHH:mm');
                    console.log(this.devalue);
                    this.$emit("input", this.getValueDateTime().format('YYYY/MM/DDTHH:mm:ssZ'))
                } else if (this.devalue === '') {
                    this.$emit("input", this.devalue);
                }
            } else {
                this.dirty = this.devalue && this.devalue.length > 1;
            }
        },
        getValueDateTime() {
            if (this.devalue) {
                if (this.devalue.includes("T")) {
                    return moment(this.devalue, "jYYYY/jMM/jDDTHH:mm", true);
                }
                return moment(this.devalue, "jYYYY/jMM/jDD", true);
            }
            return {
                isValid () { return false; }
            }
        }
    }
};
</script>
