<template>
  <v-card>
    <v-alert
      :value="hasAlert"
      :type="alertType"
      dismissible
      class="ma-2"
    >
      {{ alertMessage }}
    </v-alert>
    <v-card-title>
      <v-icon
        large
        class="mx-2"
      >
        mdi-cart
      </v-icon>
      {{ field.label }}
    </v-card-title>
    <v-card-text>
      <v-simple-table v-if="!field.singleCartMode">
        <template #default>
          <thead>
            <tr>
              <th>عنوان محصول</th>
              <th>استاد</th>
              <th>قیمت</th>
              <th>خرید اقساط</th>
              <th>حذف از سبد</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in targetCartItems"
              :key="`${id}-app-bar-cart-items-${index}`"
            >
              <td>{{ title(item) }}</td>
              <td>{{ teacher(item) }}</td>
              <td v-if="!periodic[item.id]">
                {{ getProductPriceString(item) }}
              </td>
              <td v-else>
                <strong>قسط اول:</strong>
                ‌ {{ getProductFirstPeriodPrice(item) }}
                <br>
                {{ getProductPeriodicPriceListString(item) }}
              </td>
              <td>
                <v-switch
                  v-if="hasPeriodicPrice(item)"
                  v-model="periodic[item.id]"
                  inset
                />
                <v-chip
                  v-else
                  dense
                  color="warning"
                >
                  ندارد
                </v-chip>
              </td>
              <td>
                <v-btn
                  icon
                  small
                  color="red"
                  :loading="loading[item.id]"
                  @click="toggleItemInCart(item)"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row v-if="field.singleCartMode && !isCustomPeriodic">
        <v-col cols="12">
          <strong>{{ targetCart.data.periodic_pay.product.title }}</strong> - &nbsp;&nbsp;
          پرداخت قسط {{ targetCart.data.periodic_pay.index }} از {{ targetCart.data.periodic_pay.total }} قسط به مبلغ {{ priceTagString }}
        </v-col>
      </v-row>
      <v-row v-if="field.singleCartMode && isCustomPeriodic">
        <v-col cols="12">
          پرداخت قسط {{ targetCart.data.periodic_pay.index + 1 }} از {{ targetCart.data.periodic_pay.total }} قسط به مبلغ {{ priceTagString }}
        </v-col>
      </v-row>
      <v-row v-if="targetCartItems.length > 0 || field.singleCartMode">
        <v-col
          cols="12"
          md="6"
        >
          <v-row
            v-if="user.balance.amount > 0"
            align="start"
            justify="start"
            class="pa-0 mx-0 my-2"
          >
            <strong class="my-auto">موجودی شما</strong>
            <span class="mx-2 my-auto">{{ balance }}</span>
            <v-checkbox
              v-model="useBalance"
              hide-details
              dense
              class="my-auto"
              label="استفاده از موجودی"
            />
          </v-row>
          <strong>مبلغ قابل پرداخت</strong>
          {{ totalPrice }}
          <v-chip
            v-if="giftCode"
            color="green text-white"
            dark
          >
            با تخفیف {{ giftPrice }}
          </v-chip>
        </v-col>
      </v-row>
      <div
        v-if="targetCartItems.length == 0 && !field.singleCartMode"
        class="text-center ma-3"
      >
        سبد خرید شما خالی است
      </div>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col
          v-if="!field.hideTakhfif"
          cols="12"
          md="2"
          sm="3"
          xs="3"
          class="my-auto"
        >
          <strong>کد تخفیف دارم</strong>
        </v-col>
        <v-col
          v-if="!field.hideTakhfif"
          cols="12"
          md="4"
          sm="9"
          xs="9"
          class="my-auto"
        >
          <v-text-field
            v-model="offCode"
            hide-details
            class="my-auto"
            solo
            rounded
          >
            <template #append>
              <v-btn
                :loading="checkingCode"
                text
                rounded
                outlined
                dense
                color="primary"
                class="no-letter-spacing"
                @click="checkCode()"
              >
                اعمال کد
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="2"
          sm="3"
          xs="3"
          class="my-auto"
        >
          <strong>درگاه بانک</strong>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="9"
          xs="9"
          class="my-auto"
        >
          <v-chip-group
            v-model="gatewayIndex"
            mandatory
            class="my-auto"
            column
            active-class="primary--text"
          >
            <v-chip
              v-for="(gateway) in gateways"
              :key="gateway.id"
            >
              {{ gateway.title }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="ma-auto my-5 pa-3 no-letter-spacing"
        color="success"
        rounded
        large
        outlined
        :disabled="targetCartItems.length == 0 && !field.singleCartMode"
        :loading="loadingBtn"
        @click="goToBank()"
      >
        تایید سبد و انتقال به صفحه بانک
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { UserCartEditor } from "./mixins";

export default {
    name: "VfCurrentCartInput",
    mixins: [UserCartEditor],
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data: vm => ({
        periodic: {},
        loading: {},
        gatewayIndex: 0,
        offCode: "",
        loadingBtn: false,
        checkingCode: false,
        useBalance: false,
        giftCode: null
    }),
    computed: {
        isCustomPeriodic () {
            return this.targetCart.data.periodic_pay?.custom;
        },
        hasAlert () {
            return window.SessionData.answer != null;
        },
        alertMessage () {
            return window.SessionData.answer?.message;
        },
        alertType () {
            return window.SessionData.answer?.type ?? 'error';
        },
        targetCart () {
            return this.field.cart ? this.field.cart : this.user.current_cart;
        },
        targetCartItems () {
            return this.targetCart.items ?? [];
        },
        gateways: function() {
            const gateways = [];
            if (this.field.gateways) {
                this.field.gateways.forEach(i => {
                    switch (i.type) {
                    case "zarinpal":
                        gateways.push({
                            id: i.id,
                            title: "زرین پال"
                        });
                        break;
                    case "mellat":
                        gateways.push({
                            id: i.id,
                            title: "درگاه بانک ملت"
                        });
                        break;
                    }
                });
            }

            return gateways;
        },
        totalPrice: function() {
            let price = this.totalPriceVal;
            return (
                price.toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        this.$store.state.currencies[1]
            );
        },
        totalPriceVal: function() {
            let price = this.priceTag;

            if (this.giftCode?.amount) {
                price -= parseInt(this.giftCode.amount);
                price = Math.max(price, 0);
            }

            if (this.useBalance) {
                price -= parseFloat(this.user.balance.amount);
                price = Math.max(price, 0);
            }

            return price;
        },
        priceTag: function () {
            let price = 0;
            if (this.field.singleCartMode) {
                price = parseInt(this.targetCart.amount);
            } else {
                this.targetCartItems.forEach(it => {
                    if (this.periodic[it.id]) {
                        price += parseInt(
                            it.data.price_periodic.sort((a, b) => a.priority > b.priority)[0]
                                .amount
                        );
                    } else {
                        const v = this.getProductPriceValue(it);
                        if (v) {
                            price += parseInt(v.amount);
                        }
                    }
                });
            }

            return price;
        },
        priceTagString () {
            return (
                this.priceTag.toLocaleString('fa-IR').replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        this.$store.state.currencies[1]
            );
        },
        giftPrice() {
            if (this.giftCode?.amount) {
                return (
                    this.giftCode?.amount
                        .toLocaleString('fa-IR')
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          " " +
          this.$store.state.currencies[1]
                );
            }
            return null;
        },
        balance() {
            return (
                parseInt(this.user.balance.amount)
                    .toLocaleString('fa-IR')
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        this.user.balance.currency.title
            );
        }
    },
    watch: {
        periodic: {
            deep: true,
            handler() {
                this.giftCode = null;
            }
        }
    },
    methods: {
        goToBank() {
            const host = this.$store.state.host;
            this.loadingBtn = true;
            this.axios({
                url: "/api/me/" + this.targetCart.id + "/update",
                method: "POST",
                headers: host.getWebAuthHeaders({ Accept: "application/json" }),
                data: {
                    currency: 1,
                    periods: this.periodic,
                    gateway: this.gateways[this.gatewayIndex].id,
                    gift_code: this.offCode,
                    use_balance: this.useBalance
                }
            })
                .then(response => {
                    this.loadingBtn = false;
                    if (
                        parseFloat(response.data?.cart?.amount) ===
            parseFloat(this.totalPriceVal)
                    ) {
                        window.location =
              "/bank-gateways/" +
              this.gateways[this.gatewayIndex].id +
              "/redirect/" +
              this.targetCart.id + "?return_to=" + window.location.pathname;
                    }
                })
                .catch(error => {
                    this.loadingBtn = false;
                    if (error.response && error.response.message) {
                        host.snacks.push({
                            visible: true,
                            message: error.response.message
                        });
                    } else {
                        host.snacks.push({
                            visible: true,
                            message: "An error happened, this will be reported"
                        });
                    }
                });
        },
        checkCode() {
            const host = this.$store.state.host;
            this.checkingCode = true;
            this.axios({
                url: "/api/me/current-cart/apply/gift-code",
                method: "POST",
                headers: host.getWebAuthHeaders({ Accept: "application/json" }),
                data: {
                    currency: 1,
                    gift_code: this.offCode,
                    periods: this.periodic
                }
            })
                .then(response => {
                    this.checkingCode = false;
                    this.giftCode = response.data;
                })
                .catch(error => {
                    this.checkingCode = false;
                    this.giftCode = null;
                    if (error.response?.data?.message) {
                        host.showSnack(error.response.data.message);
                    } else {
                        host.showSnack(error.message);
                    }
                });
        },
        title(item) {
            return item.data?.title;
        },
        teacher(item) {
            return item.data?.types?.course?.teacher;
        }
    }
};
</script>
