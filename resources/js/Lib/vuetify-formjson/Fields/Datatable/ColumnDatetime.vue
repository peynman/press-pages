<template>
  <div class="d-flex flex-column">
    <v-chip dense small color="secondary lighten-2" dark>{{ dateString }}</v-chip>
    <v-chip dense small color="secondary lighten-4" dark>{{ timeString }}</v-chip>
  </div>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
  name: "vf-datatable-column-datetime",
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
      return this.mom ? this.mom.format("jYYYY-jMM-jDD") : "";
    },
    timeString() {
      return this.mom
        ? this.mom.format("dddd") + " " + this.mom.format("HH:mm")
        : "";
    }
  },
  mounted() {
    if (this.item[this.column.id]) {
      this.mom = moment(
        momentTz.utc(this.item[this.column.id]).tz(momentTz.tz.guess())
      );
      this.mom.locale("fa");
    }
  },
  watch: {
    item: {
      deep: true,
      handler() {
        if (this.item[this.column.id]) {
          this.mom = moment(
            momentTz.utc(this.item[this.column.id]).tz(momentTz.tz.guess())
          );
          this.mom.locale("fa");
        }
      }
    }
  }
};
</script>
