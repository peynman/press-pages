<template>
  <v-col
    cols="12"
    md="8"
    lg="9"
  >
    <v-card class="rounded-product-card grey lighten-4 ">
      <v-card-text>
        <v-expansion-panels
          accordion
          class="elevation-0"
        >
          <v-expansion-panel
            v-for="(session,i) in sessions"
            :key="i"
            :readonly="!session.available"
          >
            <v-expansion-panel-header class="grey lighten-4">
              <template #default="{ open }">
                <ProductSessionTitle :session="session" />
              </template>
              <template #actions>
                <v-icon>{{ session.available ? 'mdi-chevron-down' : 'mdi-lock' }}</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="grey
              lighten-4"
            >
              <ProductSessionContent :session="session" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import ProductSessionTitle from './ProductSessionTitle.vue'
import ProductSessionContent from './ProductSessionContent.vue'

export default {
    name: "VfProductChildrensCardInput",
    components: {
        ProductSessionTitle,
        ProductSessionContent,
    },
    mixins: [],
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data: vm => ({}),
    computed: {
        sessions() {
            return this.field.children.filter((child) => child.types.map((t) => t.name).includes('session')).sort((a, b) => (a.priority))
        },
    },
}
</script>

<style>
.rounded-product-card .v-expansion-panel::before {
   box-shadow: none !important;
}
</style>
