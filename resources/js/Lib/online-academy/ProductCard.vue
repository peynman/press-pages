<template>
  <v-badge
      class="big-badge ma-10"
      color="#363b5e"
      content="یازدهم"
      label
      overlap
      left
      offset-x="40"
    >
      <v-card class="mx-auto rounded-product-card grey lighten-4" max-width="400" height="560px">
        <v-img class="white--text align-end" height="275px" :src="product.image" width="342px"></v-img>
        <v-card-title class="title">{{product.title}}</v-card-title>
        <v-card-subtitle class="pb-0">{{product.subtitle}}</v-card-subtitle>
        <v-avatar tile style="position: absolute; left: 80px; top: 260px; height:35px ; " size="50">
          <img src="" />
        </v-avatar>

        <v-card-text class="text--primary">
          <v-row align="center">
            <v-col cols="8" lg="8" sm="8">
              <v-btn fab small elevation="0" class="transparent" color="deep-orange--text">
                <v-icon class="my-0">mdi-account</v-icon>
              </v-btn>
              <span class="mx-2 deep-purple--text">{{product.person}}</span>
              <br v-if="!product.registered" />
              <v-btn fab small elevation="0" class="transparent" color="deep-orange--text">
                <v-icon class="my-2" v-if="!product.registered">mdi-cart</v-icon>
              </v-btn>
              <span
                class="mx-2 #363b5e--text"
                style="text-decoration:none;"
                v-if="product.takhfif === ''"
              >{{product.price}}</span>

              <!-- takhfif condition: -->

              <span
                class="mx-1 my-0 red--text overline"
                style="text-decoration: line-through;"
                v-if="product.takhfif !== '' && !product.registered"
              >
                {{product.price}}
                <br />
              </span>
              <span
                class="my-1 py-0 mx-11 green--text body-2"
                style="text-decoration:none;"
                v-if="product.takhfif !== '' && !product.registered"
              >{{product.takhfif}}</span>

              <br />
              <v-btn fab small elevation="0" class="transparent" color="deep-orange--text">
                <v-icon class="my-3">mdi-information</v-icon>
              </v-btn>
              <span class="mx-2 deep-purple--text">اطلاعات بیشتر</span>
              <br />
              <v-btn fab small elevation="0" class="transparent" color="deep-orange--text">
                <v-icon class="my-3">mdi-timeline-clock-outline</v-icon>
              </v-btn>
              <span class="mx-2 deep-purple--text">{{product.time}}</span>
              <br />
            </v-col>

            <v-col cols="4" md="4">
              <!-- isOnline condition true-->
              <v-badge
                v-if="product.isOnline"
                color="green lighten-3 black--text"
                content="آنلاین"
                label
                overlap
                left
                offset-x="40"
                offset-y="20"
                class="my-0 py-0 small-badge"
              >
                <v-btn
                  v-if="!product.registered"
                  fab
                  large
                  class="my-2 mx-3"
                  dark
                  color="#577891"
                >ثبت نام</v-btn>
                <v-btn
                  v-if="product.registered"
                  fab
                  large
                  class="my-2 mx-3"
                  dark
                  color="#577891"
                >ورود</v-btn>
              </v-badge>

              <!-- isOnline condition  false-->
              <div v-if="!product.isOnline">
                <v-btn
                  v-if="!product.registered"
                  fab
                  large
                  class="my-2 mx-3"
                  dark
                  color="#577891"
                >ثبت نام</v-btn>
                <v-btn
                  v-if="product.registered"
                  fab
                  large
                  class="my-2 mx-3"
                  dark
                  color="#577891"
                >ورود</v-btn>
              </div>
              <br />
              <v-chip
                v-if="!product.registered && product.once"
                small
                outlined
                class="deep-purple--text mt-3 pr-2"
              >تبت نام تک جلسه</v-chip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-badge>
</template>

<style scoped>
.rounded-card {
  border-radius: 60px;
}
</style>

<script>
export default {
  name: "vf-product-card-input",
  props: {
    field: Object,
    value: Object,
    id: String
  },
  data() {
      let product = {}
    const courseProduct = this.field;
    if (courseProduct && courseProduct.data) {
    const prices = courseProduct.data.pricing.sort((a, b) => a.amount > b.amount);
    product = {
        name: "shimi",
        title: this.field.data.title,
        subtitle: this.field.data.paragraph,
        person: this.field.data.teacher,
        time: this.field.data.time,
        info: "",
        isOnline: false,
        registered: false,
        once: true
    }
    if (prices.length === 1) {
        product.price = prices[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + 'ریال'
    } else if (prices.length > 1) {
        product.takhfif = prices[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + 'ریال'
        product.price = prices[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + 'ریال'
    }
    }

    return {
      product
    };
  }
};
</script>
