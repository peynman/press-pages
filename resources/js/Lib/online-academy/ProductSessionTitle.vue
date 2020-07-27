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
        v-if="startTime.isValid() && !isEnded && !isStarted && remainTime !== ''"
        dense
        small
      >
        {{ remainTime }} تا شروع کلاس
      </v-chip>
      <v-chip
        v-for="(badge, index) in badges"
        :key="`$${id}-badges-${index}`"
        :color="badge.color"
        small
        dense
      >
        {{ badge.title }}
      </v-chip>
    </div>
    <div
      class="ma-auto d-flex flex-row justify-end"
      style="flex: 1;"
    >
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

Object.getPrototypeOf(moment.localeData())._jMonths= [
    'فروردین'
    , 'اردیبهشت'
    , 'خرداد'
    , 'تیر'
    , 'مرداد'
    , 'شهریور'
    , 'مهر'
    , 'آبان'
    , 'آذر'
    , 'دی'
    , 'بهمن'
    , 'اسفند'
]

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
        badges () {
            return this.session.types.filter((t) => ['vod_hls', 'vod_link']
                .includes(t.name)).map(
                (t) => ({
                    title: 'فایل ضبظ شده',
                    color: 'primary',
                }))
        },
        startTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        endTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        isStarted () {
            return this.session.data.types?.livestream?.status === 'live' || this.session.data.types?.ac_meeting?.status === 'live';
        },
        isEnded () {
            return this.session.data.types?.livestream?.status === 'ended' || this.session.data.types?.ac_meeting?.status === 'ended';
        },
        remainTime () {
            let duration = moment.duration(this.startTime.diff(moment()));
            //Get Days and subtract from duration
            const days = duration.asDays();
            if (days > 2) {
                return this.startTime.locale('fa').format('dddd jDD jMMMM ساعت HH:mm')
            }

            const hours = duration.asHours();
            const minutes = duration.asMinutes();
            const msg = [];
            if (days > 1) {
                msg.push(`${Math.floor(days)} روز`)
            }
            if (hours > 1) {
                msg.push(`${Math.floor(hours)} ساعت`)
            }
            if (minutes > 0) {
                msg.push(`${Math.floor(minutes)} دقیقه`)
            }
            return msg.join(' و ');
        },
    }
}
</script>
