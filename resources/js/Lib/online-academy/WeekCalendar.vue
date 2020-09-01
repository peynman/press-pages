<template>
<v-col cols="12" :md="field.md ? field.md : 6" :lg="field.lg ? field.lg : 6" :sm="field.sm ? field.sm : 6" :xs="field.xs ? field.xs : 6">
    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
        <v-card-title>
            <span>{{ field.label }}</span>
        </v-card-title>
        <v-card-text>
            <v-simple-table dense style="border-bottom: solid 1px black;">
                <template #default>
                    <thead>
                        <tr>
                            <td colspan="1" v-for="i in [0, 1, 2, 3, 4, 5, 6]" :key="`${id}-week-calendar-${i}`" style="border: solid 1px black; text-align: center; flex: 1;">
                                <strong v-if="i > 0">زنگ {{ i.toLocaleString('fa-IR') }}</strong>
                                <strong v-else>روز/زنگ</strong>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(d, di) in weekDays" :key="`${id}-week-calendar-day-content-${di}`">
                            <td v-for="i in [0, 1, 2, 3, 4, 5, 6]" :key="`${id}-week-calendar-${i}`" style="border-left: solid 1px black; border-right: solid 1px black; padding: 4px;">
                                <div v-if="i == 0" class="d-flex flex-column align-center">
                                    <strong>{{ d[1] }} </strong>
                                    <v-chip dense small color="primary">{{ d[0] }}</v-chip>
                                </div>
                                <div v-if="i > 0 && getSessionForDayAndIndex(di, i)" class="d-flex flex-column align-center" style="flex: 1;">
                                    <a style="text-decoration: none; font-size: 12px; font-weight: bold;" :href="`/products/${getSessionForDayAndIndex(di, i).parent_id}/details`">
                                        {{ getSessionForDayAndIndex(di, i).parent.data.title }}</a>
                                    <v-chip class="my-1" style="font-size: 10px; text-align: center;" dense small>{{ getSessionForDayAndIndex(di, i).data.title }}</v-chip>
                                    <v-chip style="text-align: center;" dense x-small>ساعت {{ getSessionTimeForDayAndIndex(di, i) }}</v-chip>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
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
        weekDays() {
            const week = moment().locale('fa').startOf('week');
            const days = [];
            const todayWeekDay = moment().locale('fa').format('e');
            if (todayWeekDay == '۶') {
                week.add(7, 'days');
            }
            for (let i = 0; i < 7; i++) {
                days.push([week.format('jMM/jDD'), week.format('ddd')]);
                week.add(1, 'day');
            }
            return days;
        },
        weekCalendar() {
            const days = {};
            if (this.field.sessions) {
                this.field.sessions.map((session) => {
                    if (session.data?.types?.session?.start_at) {
                        const mom = moment(session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm');
                        const wd = (mom.day() + 1) % 7;
                        if (!days[wd]) {
                            days[wd] = [];
                        }
                        session.start_at = mom;
                        session.day_number = wd;
                    } else {
                        const mom = moment();
                        const wd = (mom.day() + 1) % 7;
                        session.start_at = mom;
                        session.day_number = wd;
                    }
                    return session;
                }).sort((a, b) => a.start_at.diff(b.start_at)).forEach((session) => {
                    if (session.data?.types?.session?.start_at) {
                        days[session.day_number].push(session);
                    }
                })
            }

            return days;
        }
    },
    methods: {
        getSessionForDayAndIndex(day, index) {
            return this.weekCalendar[day] && this.weekCalendar[day][index - 1] ? this.weekCalendar[day][index - 1] : null;
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
