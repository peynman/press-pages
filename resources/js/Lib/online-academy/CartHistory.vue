<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-alert
      :value="hasAlert"
      :type="alertType"
      dismissible
      class="ma-2"
    >
      {{ alertMessage }}
    </v-alert>

    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-card-title>محصولات خریداری شده</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th>شناسه سبد</th>
                <th>عنوان محصول</th>
                <th>نوع محصول</th>
                <th>تاریخ خرید</th>
                <th>
                    خرید اقساط
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in purchasedCarts"
                :key="`${id}-app-bar-cart-items-${index}`"
              >
                <td>{{ item.cart_id }}</td>
                <td v-if="item.data && item.data.title"><a :href="`/products/${item.parent_id ? item.parent_id : item.id}/details`">{{ item.data.title }}</a></td>
                <td v-if="item.titles">
                    <a class="d-block" v-for="ttl in item.titles" :key="`items-${ttl.id}`" :href="`/products/${ttl.parent_id ? ttl.parent_id : ttl.id}/details`">{{ ttl.data.title }}</a>
                </td>
                <td>{{ getTypeString(item) }}</td>
                <td>{{ getDateString(item) }}</td>
                <td>
                  <div class="d-flex flex-column justify-start">
                    {{ item.isPeriodic ? 'خرید اقساطی':'ندارد' }}
                    <v-chip
                      v-if="item.isPeriodicCompleted"
                      color="success"
                    >
                      اقساط پرداخت شد
                    </v-chip>
                    <span v-if="item.isPeriodic && !item.isPeriodicCompleted">
                      سررسید قسط بعدی در تاریخ:
                      {{ item.nextPeriodDue }}
                    </span>
                    <span v-if="item.isPeriodic && !item.isPeriodicCompleted">
                      مبلغ قابل پرداخت این قسط:
                      {{ getPeriodPriceString(item) }}

                      <v-btn
                        class="no-letter-spacing ma-2"
                        outlined
                        rounded
                        small
                        :loading="item.loading"
                        color="primary"
                        @click="onCheckInstallments(item)"
                      >
                        پرداخت قسط
                      </v-btn>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div
          v-if="purchasedCarts.length == 0"
          class="text-center ma-3"
        >
          محصول خریداری شده ای در لیست وجود ندارد
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfCartHistoryInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
        hasAlert () {
            return window.SessionData.answer != null;
        },
        alertMessage () {
            return window.SessionData.answer?.message;
        },
        alertType () {
            return window.SessionData.answer?.type ?? 'error';
        },
        user() {
            return this.$store.state.user;
        },
        purchasedCarts () {
            const items = [];
            this.field.carts?.forEach((c) => {
                const periodics = c.data.periodic_product_ids ? c.data.periodic_product_ids : [];
                if (c.data.periodic_custom && c.data.periodic_custom.length > 0) {
                    let alldone = true;
                    const ttls = [];
                    c.products.forEach((p) => {
                        const isPeriodic = periodics.includes(p.id);
                        if (isPeriodic) {
                            ttls.push({...p});
                        }
                    });

                    let foundPeriod = false;
                    c.data.periodic_custom.reverse().forEach((cc) => {
                        if (cc.status == 2 && !foundPeriod) {
                            alldone = false;
                            foundPeriod = true;
                            const payat = this.getValueDateTime(cc.payment_at);
                            console.log(payat);
                            const diff = moment().diff(payat, 'day');
                            payat.locale("fa");
                            const diffString = diff < 0 ? `${Math.abs(diff).toLocaleString('fa-IR')} روز مانده` :
                                `${Math.abs(diff).toLocaleString('fa-IR')} روز گذشته`;
                            const extras = {};
                            extras.nextPeriodDue = payat.format("dddd") + ' ' + payat.format("jYYYY/jMM/jDD") + ` (${diffString})`
                            items.push({
                                custom: {
                                    ...cc,
                                },
                                payment_date: c.data.period_start,
                                titles: ttls,
                                isPeriodic: true,
                                cart_id: c.id,
                                loading: false,
                                ...extras,
                            })
                        }
                    })

                    if (alldone) {
                        items.push({
                            payment_date: c.data.period_start,
                            titles: ttls,
                            isPeriodic: false,
                            cart_id: c.id,
                            loading: false,
                        })
                    }
                } else {
                    c.products.forEach((p) => {
                        const isPeriodic = periodics.includes(p.id);
                        const extras = {}
                        if (isPeriodic) {
                            const paidPeriods = c.data.periodic_payments ? c.data.periodic_payments : {};
                            const duration = parseInt(p.data.calucalte_periodic?.period_duration ?? 30);
                            const count = parseInt(p.data.calucalte_periodic?.period_count ?? 0);
                            const paidPeriodsCount = paidPeriods[p.id] ? paidPeriods[p.id].length : 0;
                            if (paidPeriodsCount >= count) {
                                extras.isPeriodicCompleted = true;
                            } else {
                                const start_pay = moment(
                                    momentTz.utc(c.data.period_start).tz(momentTz.tz.guess())
                                );
                                start_pay.add(duration * (paidPeriodsCount + 1), 'day');

                                const diff = moment().diff(start_pay, 'day');
                                start_pay.locale("fa");

                                const diffString = diff < 0 ? `${Math.abs(diff).toLocaleString('fa-IR')} روز مانده` :
                                    `${Math.abs(diff).toLocaleString('fa-IR')} روز گذشته`;

                                extras.nextPeriodDue = start_pay.format("dddd") + ' ' + start_pay.format("jYYYY/jMM/jDD") + ` (${diffString})`
                            }
                        }
                        items.push({
                            ...p,
                            payment_date: c.data.period_start,
                            isPeriodic,
                            cart_id: c.id,
                            loading: false,
                            ...extras,
                        });
                    })
                }
            });
            return items;
        },
        hasMorePeriods () {
            const periods = [];
            this.field.carts?.forEach((c) => {
                const periodics = c.data.periodic_product_ids ? c.data.periodic_product_ids : [];
                if ((c.flags & 128) === 0) {
                    c.products.forEach((p) => {
                        const isPeriodic = periodics.includes(p.id);
                        periods.push(p.id);
                    })
                }
            });
            return periods.length > 0;
        }
    },
    methods: {
        getValueDateTime(dt) {
            if (dt) {
               if (dt.includes('+')) {
                    const mom = moment(dt, "YYYY/MM/DDTHH:mm:ssZ");
                    mom.locale("fa");
                    return mom;
                } else {
                    const mom = moment(momentTz.utc(dt).tz(momentTz.tz.guess()));
                    mom.locale("fa");
                    return mom;
                }
            }
        },
        getTypeString (item) {
            const avTypes = [
                'course',
                'session',
            ];
            let found = null;
            avTypes.forEach((a) => {
                if (!found) {
                    if (item.types) {
                        const type = item.types.filter((t) => t.name === a);
                        if (type.length > 0) {
                            found = type[0];
                        }
                    } else if (item.titles && item.titles[0] && item.titles[0].types) {
                        const type = item.titles[0].types.filter((t) => t.name === a);
                        if (type.length > 0) {
                            found = type[0];
                        }
                    }
                }
            });
            return found?.data.title;
        },
        getDateString (item) {
            const mom = moment(
                momentTz.utc(item.payment_date).tz(momentTz.tz.guess())
            );
            mom.locale("fa");
            return mom.format("jYYYY/jMM/jDD") + ' ' + mom.format("dddd") + " " + mom.format("HH:mm")
        },
        getPeriodPriceString (item) {
            let v = 0;
            if (item.custom) {
                v = parseInt(item.custom.amount ?? 0);
            } else {
                v = parseInt(item.data.calucalte_periodic?.period_amount ?? 0);
            }

            return v.toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' تومان'
        },
        onCheckInstallments(item) {
            let url = ''
            if (item.custom) {
                url = '/api/me/' + item.cart_id + '/custom-installment'
            } else {
                url = '/api/me/' + item.cart_id + '/installments/' + item.id
            }

            const host = this.$store.state.host;
                item.loading = true;
                host.axios({
                    url,
                    method: 'POST',
                    headers: host.getWebAuthHeaders({}),
                }).then((response) => {
                    item.loading = false;
                    window.location = '/me/carts/' + response.data.id;
                }).catch((err) => {
                    item.loading = false;
                    host.showSnack(err.message);
                })
        },
    }
};
</script>
