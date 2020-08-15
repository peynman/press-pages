<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-card-title>تراکنش های کیف پول شما</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th>مبلغ تراکنش</th>
                <th>نوع تراکنش</th>
                <th>توضیحات</th>
                <th>تاریخ و ساعت</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in transactions"
                :key="`${id}-introduced-${index}`"
              >
                <td>{{ getAmountString(item) }}</td>
                <td>{{ getTypeString(item) }}</td>
                <td>{{ getDescString(item) }}</td>
                <td>{{ getDateString(item) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div
          v-if="transactions.length == 0"
          class="text-center ma-3"
        >
        تراکنشی در کیف پول شما ثبت نشده
        </div>
      </v-card-text>
    </v-card>
    </v-col>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfWalletTransactionsHistoryInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
        transactions() {
            return this.field.transactions ?? [];
        }
    },
    methods: {
        getDescString(item) {
            return item.data?.description ?? '';
        },
        getAmountString(item) {
            const amount = parseInt(item.amount).toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return amount + ' تومان';
        },
        getTypeString (item) {
            return parseInt(item.amount) > 0 ? 'افزایش موجودی':
            'خرید محصول'
        },
        getDateString (item) {
            const at = moment(momentTz.utc(item.updated_at).tz(momentTz.tz.guess()));
            at.locale("fa");
            return at.format('jYYYY/jMM/jDD HH:mm')
        }
    }
};
</script>
