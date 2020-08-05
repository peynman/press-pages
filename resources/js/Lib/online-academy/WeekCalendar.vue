<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-card-title>{{ field.label }}</v-card-title>
      <v-card-text>
      <v-row justify="center" align="strech" style="text-align: center;" class="d-none d-sm-flex">
        <v-col class="pa-1" cols="12" sm="2" style="text-align: center;">
            <strong>روز/زنگ</strong>
        </v-col>
        <v-col class="pa-1" cols="12" sm="2" v-for="i in [1, 2, 3, 4, 5]" :key="`${id}-week-calendar-${i}`" style="border-right: solid 1px; text-align: center;" >
            <strong>زنگ {{ i.toLocaleString('fa-IR') }}</strong>
        </v-col>
      </v-row>
      <v-row justify="center" align="strech" v-for="(d, di) in weekDays" :key="`${id}-week-calendar-day-${di}`" style="border-top: solid 1px; text-align: center;">
        <v-col class="pa-1 d-flex flex-column align-center" style="text-align: center;" cols="12" sm="2">
            <strong>{{ d[1] }} </strong>
            <v-chip dense small>{{ d[0] }}</v-chip>
        </v-col>
        <v-col class="pa-1" style="border-right: solid 1px; text-align: center;" cols="12" sm="2" v-for="i in [1, 2, 3, 4, 5]" :key="`${id}-week-calendar-${i}-day-${di}`">
            <div v-if="getSessionForDayAndIndex(di, i)" class="d-flex flex-column align-center">
                <a :href="`/products/${getSessionForDayAndIndex(di, i).parent_id}/details`">{{ getSessionForDayAndIndex(di, i).parent.data.title }}</a>
                <v-chip style="font-size: 10px; text-align: center;" dense small>{{ getSessionForDayAndIndex(di, i).data.title }}</v-chip>
                <v-chip style="text-align: center;" dense x-small>ساعت {{ getSessionTimeForDayAndIndex(di, i) }}</v-chip>
            </div>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfWeekCalendarInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
        weekDays () {
            const week = moment().startOf('week').add(-1, 'day').locale('fa');
            const days = [];
            for (let i = 0; i < 7; i++) {
                days.push([week.format('jMM/jDD'), week.format('ddd')]);
                week.add(1, 'day');
            }
            return days;
        },

        weekCalendar () {
            const days = {};
            if (this.field.sessions) {
                this.field.sessions.forEach((session) => {
                    if (session.data?.types?.session?.start_at) {
                        const mom = moment(session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm');
                        const wd = (mom.day() + 1) % 7;
                        if (!days[wd]) {
                            days[wd] = [];
                        }
                        session.start_at = mom;
                        days[wd].push(session);
                    }
                })
            }

            console.log(days);
            return days;
        }
    },
    methods: {
        getSessionForDayAndIndex(day, index) {
            return this.weekCalendar[day] && this.weekCalendar[day][index-1] ? this.weekCalendar[day][index-1]:null;
        },
        getSessionTimeForDayAndIndex(day, index) {
            const ses = this.getSessionForDayAndIndex(day, index);
            if (ses) {
                return ses.start_at.locale('fa').format('HH:mm')
            }
            return ''
        }
    }
};
</script>
