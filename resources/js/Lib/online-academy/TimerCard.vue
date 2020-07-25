<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`d-flex flex-row rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-list
        dense
        class=" grey lighten-4"
      >
        <v-list-item>
          <v-list-item-action
            class="my-1 d-flex flex-column"
            style="min-width: 130px;"
          >
            <v-progress-circular
              :value="timeRemainingPercent"
              size="100"
              class="mx-auto"
            >
              <span>
                {{ timeRemainingDays }} روز</span>
              <v-list-item-subtitle style="flex: 1; position: absolute; margin-top: 115px;">
                {{ field.time_message }}
              </v-list-item-subtitle>
            </v-progress-circular>
          </v-list-item-action>
          <v-list-item-avatar size="100">
            <v-img
              :src="profilePic"
              class="my-auto"
            />
          </v-list-item-avatar>
          <v-list-item-content
            style="overflow: visible;"
            class="ms-2"
          >
            <v-list-item-title style="font-size: 1.5rem; line-height: 1.7rem;">
              {{ titleMessage }}
              <v-btn
                v-if="!profileComplete"
                large
                text
                color="warning"
                class="no-letter-spacing my-auto ms-2"
                :href="field.profileUrl ? field.profileUrl : '/me/forms/1'"
              >
                پروفایل خود را تکمیل کنید
              </v-btn>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ dateMessage }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import moment from "moment-jalaali";

export default {
    name: "VfTimerCardInput",
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
                return this.field.avatar ? this.field.avatar : "/images/avatar.png";
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
