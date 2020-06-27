<template>
  <v-footer dark padless>
    <v-card flat tile class="grey darken1-1 white--text text-center">
      <v-card-title>
        <v-btn
          v-for="icon in svgs"
          :key="icon.name"
          class="transparent"
          elevation="0"
          fab
          href="icon.ref"
        >
          <v-img class="mx-4 white--text" :src="icon.image" max-height="40px" max-width="40px"></v-img>
        </v-btn>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-card-title>

      <v-card-text class="white--text pt-0">
        <v-row>
          <v-col
            cols="6"
            justify-start
          >
          </v-col>
          <v-col cols="6" class="justify-center">
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
        ref:
          "https://www.google.com/search?q=svg&rlz=1C5CHFA_enDE773DE773&oq=svg&aqs=chrome..69i57j0l7.1727j0j4&sourceid=chrome&ie=UTF-8"
      },
      { name: "insta3", image: "../../../public/logo" }
    ]
  })
};
</script>
