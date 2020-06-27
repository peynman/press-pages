<template>
  <v-card>
    <v-card-title>
      <v-icon large class="mx-2">mdi-cart</v-icon>
      {{ field.label }}
    </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
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
              <td v-if="!periodic[item.id]">{{ getProductPriceString(item) }}</td>
              <td v-else>
                <strong>قسط اول:</strong>
                ‌ {{ getProductFirstPeriodPrice(item) }}
                <br />
                {{ getProductPeriodicPriceListString(item) }}
              </td>
              <td>
                <v-switch v-if="hasPeriodicPrice(item)" v-model="periodic[item.id]" inset></v-switch>
                <v-chip v-else dense color="warning">ندارد</v-chip>
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
            <tr v-if="user.current_cart.items.length > 0">
              <td></td>
              <td></td>
              <td>
                <strong>مبلغ قابل پرداخت</strong>
                {{ totalPrice }}
              </td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center ma-3" v-if="user.current_cart.items.length == 0">سبد خرید شما خالی است</div>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="2" sm="3" xs="3" class="my-auto">
          <strong>کد تخفیف دارم</strong>
        </v-col>
        <v-col cols="12" md="4" sm="9" xs="9" class="my-auto">
          <v-text-field hide-details class="my-auto" v-model="offCode" solo rounded>
            <template v-slot:append>
              <v-btn text rounded outlined dense color="primary">اعمال کد</v-btn>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" md="2" sm="3" xs="3" class="my-auto">
          <strong>درگاه بانک</strong>
        </v-col>
        <v-col cols="12" md="4" sm="9" xs="9" class="my-auto">
          <v-chip-group
            mandatory
            class="my-auto"
            v-model="gatewayIndex"
            column
            active-class="primary--text"
          >
            <v-chip v-for="(gateway) in gateways" :key="gateway.id">{{ gateway.title }}</v-chip>
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
      >تایید سبد و انتقال به صفحه بانک</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { UserCartEditor } from "./mixins";

export default {
  mixins: [UserCartEditor],
  name: "vf-current-cart-input",
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
    loadingBtn: false
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

      return price;
    }
  },
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
          gateway: this.gateways[this.gatewayIndex].id
        }
      })
        .then(response => {
          this.loadingBtn = false;
          if (parseFloat(response.data?.cart?.amount) === parseFloat(this.totalPriceVal)) {
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
    title(item) {
      return item.data?.title;
    },
    teacher(item) {
      return item.data?.types?.course?.teacher;
    }
  }
};
</script>
