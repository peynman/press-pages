<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 6"
    :lg="field.lg ? field.lg : 6"
    :sm="field.sm ? field.sm : 6"
    :xs="field.xs ? field.xs : 6"
  >
    <v-card :class="`rounded-product-card grey lighten-4 ${field.class ? field.class : ''}`">
      <v-card-title>برنامه هفتگی آنلاین آکادمی</v-card-title>
      <v-card-text>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th>زنگ ۱</th>
                <th>زنگ ۲</th>
                <th>زنگ ۳</th>
                <th>زنگ ۴</th>
              </tr>
            </thead>
            <tbody />
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import moment from "moment-jalaali";
import momentTz from "moment-timezone";

export default {
    name: "VfWeekCalendarInput",
    props: {
        field: Object,
        value: Object,
        id: String
    },
    computed: {
    },
    methods: {
    }
};
</script>
