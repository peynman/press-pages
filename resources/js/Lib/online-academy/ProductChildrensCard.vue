<template>
  <v-col
    cols="12"
    :md="field.md ? field.md : 8"
    :lg="field.lg ? field.lg : 9"
    :sm="field.sm ? field.sm : 12"
    :xs="field.xs ? field.xs : 12"
    :class="`vf-input ${field.class ? field.class : ''}`"
  >
    <v-card class="rounded-product-card grey lighten-4 mb-2" v-if="moreDetails">
      <v-card-text class="mx-2">
        <vf-paragraph-input :field="{'readonly': true}" :value="moreDetails" />
      </v-card-text>
    </v-card>
    <v-card class="rounded-product-card grey lighten-4 ">
      <v-card-title v-if="field.label">
        {{ field.label }}
      </v-card-title>
      <v-card-text>
        <v-expansion-panels
          accordion
          class="elevation-0"
        >
          <v-expansion-panel
            v-for="(session,i) in sessions"
            :key="i"
            :readonly="!session.available || session.locked"
          >
            <v-expansion-panel-header class="grey lighten-4">
              <template #default="{ open }">
                <ProductSessionTitle :session="session" />
              </template>
              <template #actions>
                <v-icon class="ms-2">
                  {{ session.available && !session.locked ? 'mdi-chevron-down' : 'mdi-lock' }}
                </v-icon>
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
        <v-label v-if="!sessions || sessions.length === 0">
          {{ field.emptyMessage }}
        </v-label>
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
    props: {
        field: Object,
        value: Object,
        id: String
    },
    data: vm => ({}),
    computed: {
        sessions() {
            if (this.field.children) {
                let list = this.field.children
                    .filter((child) => child.types.map((t) => t.name).includes('session'));
                if (this.field.sortStartTime) {
                    list = list.map((c) => {
                        c.start_at = moment(session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm');
                    });
                    list = list.sort((a, b) => (a.start_at.diff(b.sart_at)))
                } else {
                    list = list.sort((a, b) => (a.priority - b.priority))
                }
                return list.map((c) => ({...c}))
            }
            return [];
        },
        moreDetails () {
            return this.field.data?.types?.course?.moreDetails;
        }
    },
    mounted() {
    }
}
</script>

<style>
.rounded-product-card .v-expansion-panel::before {
   box-shadow: none !important;
}
</style>
