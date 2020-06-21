<template>
  <v-card>
    <v-card-title>سبد خرید شما</v-card-title>
    <v-card-text>
      <v-list two-line v-if="user.current_cart.items.length > 0">
        <v-list-item
          v-for="(item, index) in user.current_cart.items"
          :key="`${id}-app-bar-cart-items-${index}`"
          justify="space-between"
        >
          <template v-slot:default="{}">
            <v-list-item-content>
              <v-list-item-title>{{ item.data.title }}</v-list-item-title>
              <v-list-item-subtitle>
                  {{ item.data.teacher }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
                    <v-chip
                      dense
                      small
                      outlined
                      color="green"
                      class="mt-1 #363b5e--text my-auto"
                      style="text-decoration:none;"
                    >{{ getProductPriceString(item) }}</v-chip>

            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon small color="red" @click="toggleItemInCart(item)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
            <v-divider></v-divider>
        </v-list-item>
      </v-list>
    </v-card-text>
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
  }
};
</script>
