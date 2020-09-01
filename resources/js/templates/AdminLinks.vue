<template>
  <v-list nav dense>
    <v-list-item href="/admin/home" dark
        style="background: rgba(84, 84, 84, 0.74);">
        <v-list-item-icon class="my-auto">
          <v-icon small color="white" class="my-auto">mdi-monitor-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>
                داشبرد ادمین
            </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
<!--            <v-btn
            x-small
            dense
            icon
            class="pa-0 ma-0 my-auto"
            color="primary lighten-4"
            href="/admin/dashboard/settings"
          >
            <v-icon small color="primary">mdi-settings</v-icon>
          </v-btn> -->
        </v-list-item-action>
    </v-list-item>
    <v-list-item href="/" dark
        style="background: rgba(84, 84, 84, 0.74);">
        <v-list-item-icon class="my-auto">
          <v-icon small color="white" class="my-auto">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>
                صفحه اصلی سایت
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    <v-list-group
      v-for="group in groups"
      :key="`${id}-admin-crud-group-${group.id}`"
      :prepend-icon="group.icon"
      :href="group.href"
    >
      <template v-slot:activator>
        <v-list-item-content><v-list-item-subtitle>{{ group.title }}</v-list-item-subtitle></v-list-item-content>
      </template>
      <v-list-item
          dark
        style="background: rgba(84, 84, 84, 0.74);"
        v-for="crud in group.links"
        :key="`${id}-admin-crud-link-${crud.id}`"
        :href="crud.href ? crud.href : `/admin/${crud.id}`"
      >
        <v-list-item-icon class="my-auto">
          <v-icon small color="white" class="my-auto">{{ crud.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ crud.title }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="crud.extras" class="my-0 py-0 d-flex flex-row justify-end">
          <v-btn
            x-small
            dense
            icon
            class="pa-0 ma-0 my-auto"
            :color="extra.color"
            v-for="(extra, index) in crud.extras"
            :key="`${id}-admin-crud-link-${crud.id}-extra-${index}`"
            :href="extra.href ? extra.href : `/admin/${crud.id}/${extra.id}`"
          >
            <v-icon small :color="extra.color">{{ extra.icon }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: {
      id: String,
    isAvailable: Array,
    groups: Array,

  }
};
</script>
