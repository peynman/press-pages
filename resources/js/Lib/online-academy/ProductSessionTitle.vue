<template>
  <div class="d-flex flex-row">
    <div
      class="ma-auto d-flex flex-row"
    >
      <div class="d-flex flex-column me-2">
        <label
          v-if="showParent"
          style="margin-bottom: 10px;"
        >
          {{ parentTitle }}
        </label>
        {{ session.data.title }}
      </div>
      <v-chip
        v-if="isStarted"
        dense
        small
        class="green my-auto"
        dark
      >
        آنلاین
      </v-chip>
      <v-chip
        v-if="isEnded"
        dense
        small
        class="secondary my-auto"
        dark
      >
        برگزار شد
      </v-chip>
      <v-chip
        v-if="startTime.isValid() && !isEnded && !isStarted && remainTime !== ''"
        dense
        small
        class="my-auto"
      >
        {{ remainTime }}
      </v-chip>
      <v-chip
        v-for="(badge, index) in badges"
        :key="`$${id}-badges-${index}`"
        :color="badge.color"
        small
        dense
        class="my-auto"
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
      <v-btn class="my-auto" icon small dense v-if="isAdmin" :href="`/admin/products/${session.id}`" target="_blank"><v-icon small>mdi-database-edit</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
import ProductActions from './ProductActions.vue'
import moment from 'moment-jalaali'
import { UserAwareComponent } from "./mixins";

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
        ProductActions,
    },
    mixins: [UserAwareComponent],
    props: {
        session: Object,
        id: String
    },
    computed: {
        showParent () {
            return this.session.parent != null;
        },
        parentTitle () {
            return this.session.parent?.data?.title;
        },
        badges () {
            return this.session.types.filter((t) => ['vod_hls', 'vod_link', 'file_pdf', 'azmoon']
                .includes(t.name)).map(
                (t) => {
                    let title = ''
                    switch (t.name) {
                        case 'vod_hls':
                        case 'vod_link':
                        title = 'فایل ضبظ شده';
                        break;
                        case 'file_pdf':
                        title = 'جزوه';
                        break;
                        case 'azmoon':
                        title = 'آزمون';
                        break;
                    }
                    return {
                        title: title,
                        color: 'primary',
                    }
                })
        },
        startTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        endTime () {
            return moment(this.session.data?.types?.session?.start_at, 'YYYY/MM/DDTHH:mm:ssZ', true);
        },
        isStarted () {
            return this.session.data.types?.livestream?.status === 'live' ||
                    this.session.data.types?.ac_meeting?.status === 'live';
        },
        isEnded () {
            return this.session.data.types?.livestream?.status === 'ended' ||
                     this.session.data.types?.ac_meeting?.status === 'ended';
        },
        remainTime () {
            let duration = moment.duration(this.startTime.diff(moment()));
            //Get Days and subtract from duration
            const days = duration.asDays();
            const hours = duration.asHours();

            if (hours > 10) {
                return this.startTime.locale('fa').format('dddd jDD jMMMM ساعت HH:mm')
            }

            const minutes = duration.asMinutes();
            const msg = [];
            if (days > 1) {
                msg.push(`${Math.floor(days)} روز`)
            }
            if (hours > 1) {
                msg.push(`${Math.floor(hours)} ساعت`)
            }
            if (minutes > 0) {
                msg.push(`${Math.floor(minutes % 60)} دقیقه`)
            }
            return msg.join(' و ')
            + (
                msg.length > 0 ? ' مانده تا شروع کلاس' : ''
            );
        },
    }
}
</script>
