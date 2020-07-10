<template>
  <v-footer dark padless>
    <v-card flat tile class="grey darken1-1 white--text text-center pt-2">
      <v-card-text class="white--text pt-0">
        <v-row>
          <v-col cols="12" md="6" justify-start class="text-start">
            <v-row>
              <v-col cols="4" class="justify-center">
                  <v-img src="../../../images/logo-big.jpeg"></v-img>
              </v-col>
              <v-col cols="8" class="justify-center">
                «درباره ی تخته سیاه»
                هولدینگ تخته سیاه مجموعه ای است‌ که از سال ۱۳۸۳ فعالیت خود را در قالب چاپ کتاب های آموزشی در زمینه ی کنکور آغاز کرده است و‌ تا به امروز بیش‌ از ۱۰۰۰ عنوان کتاب مختلف به چاپ رسانده است که بسیاری از این عناوین مثل کتاب های ژنتیک،گیاهی،تاریخ ادبیات،ریاضیات جامع و ... بارها و بارها تجدید چاپ شده اند.
                در حال حاضر این هولدینگ دارای شاخه های زیر میباشد:
                ۱.نشر کتب ویژه ی کنکور در رشته های مختلف تحصیلی.
                ۲.نشر کتاب های آموزشی پایه در مقاطع ابتدایی و متوسطه.
                ۳.نشر کتاب کودک به نام انتشارات شازده کوچولو.
                ۴.آکادمی آنلاین.
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="justify-center">
            <v-list dense class="grey darken1-1">
              <v-list-item>راه‌های ارتباطی</v-list-item>
              <v-list-item>دفتر مرکزی: تهران - تهران - انقلاب -خیابان 12 فروردین - خیابان وحید نظری - پلاک 99</v-list-item>
              <v-list-item>تلفن تماس: ۰۹۳۶۱۲۲۲۱۲۰</v-list-item>
            </v-list>
            <v-img
              v-for="item in imageBank"
              :key="item"
              :src="item"
              max-height="150px"
              max-width="150px"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>آنلاین آکادمی</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data: () => ({
    imageBank: ["/logo.png"],
    svgs: [
      {
        name: "insta",
        image: "/logo.png",
        ref: ""
      },
      { name: "insta3", image: "../../../public/logo.png" }
    ]
  })
};
</script>
