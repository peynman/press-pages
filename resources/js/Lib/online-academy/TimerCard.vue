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
        class=" grey lighten-4 fill-width"
      >
        <v-list-item class="fill-width">
          <v-list-item-avatar size="100">
            <v-img
              :src="profilePic"
              class="my-auto"
            />
          </v-list-item-avatar>
          <v-list-item-content
            class="ms-3"
          >
            <v-list-item-title style="font-size: 1.3rem; line-height: 1.7rem;">
              <span v-if="profileComplete">{{ titleMessage }}</span>
              <v-btn
                v-if="!profileComplete"
                text
                color="warning"
                class="no-letter-spacing my-auto pa-0"
                :href="profileUrl"
              >
                پروفایل خود را تکمیل کنید
              </v-btn>
            </v-list-item-title>
            <v-list-item-subtitle class="mt-1">
              {{ dateMessage }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action
            style="min-width: 130px;"
            class="d-none d-sm-flex"
          >
            <v-progress-circular
              :value="timeRemainingPercent"
              size="80"
              class="mx-auto mb-2"
            >
              <span>
                {{ timeRemainingDays }} روز</span>
              <v-list-item-subtitle style="flex: 1; position: absolute; margin-top: 105px;">
                {{ field.time_message }}
              </v-list-item-subtitle>
            </v-progress-circular>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import moment from "moment-jalaali";

Object.getPrototypeOf(moment.localeData())._jMonths= [
    'فروردین'
    , 'اردیبهشت'
    , 'خرداد'
    , 'تیر'
    , 'مرداد'
    , 'شهریور'
    , 'مهر'
    , 'آبان'
    , 'آذر'
    , 'دی'
    , 'بهمن'
    , 'اسفند'
]

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
                typeof this.profile.profile == 'string' &&
                (this.profile.profile.startsWith("data:") || this.profile.profile.startsWith("/storage/"))
            ) {
                return this.profile.profile;
            } else {
                return this.field.avatar ? this.field.avatar : "/images/avatar.png";
            }
        },

        dateMessage() {
            const now = moment();
            now.locale("fa");
            return "امروز " + now.format("dddd jDD jMMMM jYYYY");
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
        },
        profileUrl () {
            const profileFormIds = {
                support: 5,
            }
            const roles = this.user.roles.filter(i => Object.keys(profileFormIds).includes(i.name));
            const profileFormId = roles && roles.length > 0 ?
                        (profileFormIds[roles[0].name] ? profileFormIds[roles[0].name] : '1') : '1';
            return "/me/forms/" + profileFormId;

        }
    }
};
</script>
