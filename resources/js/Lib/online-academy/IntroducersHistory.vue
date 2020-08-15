<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-card-title>کاربران معرفی شده توسط شما</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th>کاربر معرفی شده توسط شما</th>
                <th>هدیه دریافتی شما</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in introduced"
                :key="`${id}-introduced-${index}`"
              >
                <td>{{ getTitleString(item) }}</td>
                <td>{{ getAmountString(item) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div
          v-if="introduced.length == 0"
          class="text-center ma-3"
        >
        کاربری هنوز با آدرس شما ثبت نام نکرده است
        </div>
      </v-card-text>
    </v-card>
    </v-col>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfIntroducersHistoryInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
        introduced() {
            return this.field.introducedPeople ?? [];
        }
    },
    methods: {
        getTitleString(item) {
            console.log(item);
            return `کاربر با شناسه ${item.user_id}`;
        },
        getAmountString(item) {
            if (item.data.gifted_at) {
                const at = moment(momentTz.utc(item.data.gifted_at).tz(momentTz.tz.guess()));
                at.locale("fa");
                const amount = item.data.gifted_amount?.toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return `مبلغ ${amount} تومان در تاریخ ${at.format('jYYYY/jMM/jDD')} افزوده شد`
            }
            return 'کاربر هنوز خریدی انجام نداده'
        }
    }
};
</script>
