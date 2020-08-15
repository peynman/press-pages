<template>
  <div class="d-flex flex-column my-1">
    <v-chip
      dense
      small
      color="secondary darken-2"
      dark
      outlined
    >
      {{ dateString }}
    </v-chip>
    <v-chip
      dense
      x-small
      color="secondary lighten-2"
      dark
      outlined
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
        }
    }),
    computed: {
        dateString() {
            return this.mom ? this.mom.format("jYYYY/jMM/jDD") : "";
        },
        timeString() {
            return this.mom
                ? this.mom.format("dddd") + " " + this.mom.format("HH:mm")
                : "";
        }
    },
    watch: {
        item: {
            deep: true,
            handler() {
                if (this.item[this.column.id]) {
                    this.mom = moment(momentTz.utc(this.item[this.column.id]).tz(momentTz.tz.guess()));
                    this.mom.locale("fa");
                }
            }
        }
    },
    mounted() {
        if (this.item[this.column.id]) {
            this.mom = moment(momentTz.utc(this.item[this.column.id]).tz(momentTz.tz.guess()));
            this.mom.locale("fa");
        }
    }
};
</script>
