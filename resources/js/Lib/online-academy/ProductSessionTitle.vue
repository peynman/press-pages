<template>
  <div class="d-flex flex-row">
    <div
      class="ma-auto"
    >
      {{ session.data.title }}

      <v-chip
        v-if="isStarted"
        dense
        small
        class="green"
        dark
      >
        آنلاین
      </v-chip>
      <v-chip
        v-if="isEnded"
        dense
        small
        class="secondary"
        dark
      >
        برگزار شد
      </v-chip>
      <v-chip
        v-if="startTime.isValid() && !isEnded && !isStarted"
        dense
        small
      >
        {{ remainTime }} تا شروع کلاس
      </v-chip>
    </div>
    <div
      class="ma-auto d-flex flex-row justify-end"
      style="flex: 1;"
    >
      <ProductPrice
        v-if="!session.available"
        :product="session"
        :field="{noIcon: true,}"
      />
      <ProductActions
        v-if="!session.available"
        :product="session"
        :field="{compact: true}"
      />
    </div>
  </div>
</template>

<script>
import ProductPrice from './ProductPrice.vue'
import ProductActions from './ProductActions.vue'
import moment from 'moment-jalaali'

export default {
    components: {
        ProductPrice,
        ProductActions,
    },
    props: {
        session: Object,
        id: String
    },
    computed: {
        startTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        endTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        isStarted () {
            return this.session.data.types?.livestream?.status === 'live';
        },
        isEnded () {
            return this.session.data.types?.livestream?.status === 'ended';
        },
        remainTime () {
            let diff = this.startTime.diff(moment(), 'minute');
            let unit = 'دقیقه'
            if (diff > 60) {
                diff = this.startTime.diff(moment(), 'hour');
                unit = 'ساعت'
                if (diff > 24) {
                    diff = this.startTime.diff(moment(), 'day');
                    unit = 'روز'
                }
            }
            return `${diff} ${unit}`;
        },
    }
}
</script>
