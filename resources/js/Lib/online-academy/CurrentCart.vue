<template>
  <v-card>
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
      <v-simple-table>
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
              v-for="(item, index) in user.current_cart.items"
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
      <v-row v-if="user.current_cart.items.length > 0">
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
        v-if="user.current_cart.items.length == 0"
        class="text-center ma-3"
      >
        سبد خرید شما خالی است
      </div>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="2"
          sm="3"
          xs="3"
          class="my-auto"
        >
          <strong>کد تخفیف دارم</strong>
        </v-col>
        <v-col
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
        class="ma-auto my-5 pa-3"
        color="success"
        rounded
        large
        outlined
        :disabled="user.current_cart.items.length == 0"
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
                price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        this.$store.state.currencies[1]
            );
        },
        totalPriceVal: function() {
            let price = 0;
            this.user.current_cart.items.forEach(it => {
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
        giftPrice() {
            if (this.giftCode?.amount) {
                return (
          this.giftCode?.amount
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          " " +
          this.$store.state.currencies[1]
                );
            }
            return null;
        },
        balance() {
            return (
                this.user.balance.amount
                    .toString()
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
    mounted() {},
    methods: {
        goToBank() {
            const host = this.$store.state.host;
            this.loadingBtn = true;
            this.axios({
                url: "/api/me/current-cart/update",
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
              this.user.current_cart.id;
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
