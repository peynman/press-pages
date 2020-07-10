<template>
  <v-card class="d-flex flex-row col-sm-12 col-md-6 justify-space-around">
    <v-list dense class>
      <v-list-item>
        <v-list-item-avatar size="100">
          <v-img :src="profilePic"></v-img>
        </v-list-item-avatar>
        <v-list-item-content style="overflow: visible;">
          <v-list-item-title style="font-size: 1.5rem; line-height: 1.7rem;">
            {{ titleMessage }}
            <v-btn large text color="warning" v-if="!profileComplete">پروفایل خود را تکمیل کنید</v-btn>
          </v-list-item-title>
          <v-list-item-subtitle>{{ dateMessage }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list-item-action class="my-1 d-flex flex-column">
      <v-progress-circular
        :value="timeRemainingPercent"
        size="100"
        class="mx-auto mb-3"
      >{{ timeRemainingDays }} روز</v-progress-circular>
      <v-list-item-subtitle style="flex: 1">{{ field.time_message }}</v-list-item-subtitle>
    </v-list-item-action>
  </v-card>
</template>

<script>
import moment from "moment-jalaali";

export default {
  name: "vf-timer-card-input",
  props: {
    field: Object,
    value: Object,
    id: String
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    profile() {
      return this.user.profile.data.values;
    },
    profileComplete() {
      return this.user.profile?.data?.values?.firstname != null;
    },
    titleMessage() {
      if (this.profileComplete) {
        return "سلام " + this.profile.firstname;
      } else {
        return "سلام ";
      }
    },
    profilePic() {
      if (
        this.profileComplete &&
        this.profile.profile &&
        this.profile.profile.startsWith("data:")
      ) {
        return this.profile.profile;
      } else {
        return "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      }
    },
    dateMessage() {
      const now = moment();
      now.locale("fa");
      return "امروز " + now.format("dddd jYYYY/jMM/jDD");
    },
    timeRemainingPercent() {
      const from = this.field.startTime
        ? moment(this.field.startTime, "jYYYY/jMM/jDD")
        : moment();
      const then = this.field.endTime
        ? moment(this.field.endTime, "jYYYY/jMM/jDD")
        : moment().add(365, "days");
      const now = moment();
      const total = from.diff(then, "days");
      const rem = now.diff(then, "days");
      return Math.abs((rem / total) * 100);
    },
    timeRemainingDays() {
      const then = this.field.endTime
        ? moment(this.field.endTime, "jYYYY/jMM/jDD")
        : moment().add(365, "days");
      const now = moment();
      const rem = now.diff(then, "days");
      return Math.abs(rem);
    }
  }
};
</script>
