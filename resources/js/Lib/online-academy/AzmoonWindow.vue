<template>
  <div :class="`vf-input ${field.class ? field.class:''}`">
    <v-btn
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
    >
      <v-icon class="me-2">
        {{ field.icon }}
      </v-icon> ورود به صفحه آزمون
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen hide-overlay
      class="grey lighten-4"
      style="width: 100%; height: 100%;"
      transition="dialog-bottom-transition"
    >
      <v-system-bar color="primary" dark>
        {{ azmoonTitle }}
        <v-spacer />
        <v-btn
          icon
          small
          dense
          @click="dialog = false"
        >
          <v-icon small :disabled="state === 'started'">
            mdi-close
          </v-icon>
        </v-btn>
      </v-system-bar>
      <v-lazy
        class="pa-2 grey lighten-4 fill-height"
      >
        <v-sheet
          class="d-flex flex-column"
        >
            <!-- not started azmoon -->
            <v-row no-gutters justify="center" align="center" class="fill-height" v-show="state === 'not_started'">
                <v-col cols="12" md="8">
                    <v-list three-line>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{ azmoonTitle }}</v-list-item-title>
                                <v-progress-linear absolute bottom
                                    :active="loading"
                                    indeterminate
                                    color="primary darken-2"
                                ></v-progress-linear>
                                <v-list-item-subtitle v-if="details">شامل {{ questionsCount }} سوال ۴ گزینه ای</v-list-item-subtitle>
                                <v-list-item-subtitle v-if="details">{{ azmoonTimeString }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn :disabled="loading || hasHistory" outlined color="primary" class="no-letter-spacing" @click="startAzmoon">شروع آزمون</v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>

            <!-- started azmoon header -->
            <v-toolbar dense v-show="state === 'started'">
                <v-toolbar-title>{{ azmoonTimeTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn outlined small color="success" class="no-letter-spacing me-1" @click="answerSheet = !answerSheet">نمایش پاسخنامه</v-btn>
                <v-btn outlined small color="warning"class="no-letter-spacing me-1" @click="endAzmoon">تحویل پاسخنامه و ثبت پایان آزمون</v-btn>
            </v-toolbar>
            <v-navigation-drawer fixed temporary v-model="answerSheet" style="min-width: 400px;">
                <v-list dense>
                    <v-list-item v-for="(q,index) in questions" :key="`${id}-question-${index}`" @click="onGoToQuestion(index)">
                        <v-list-item-icon>
                            <v-chip>{{ index + 1 }}</v-chip>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <div class="d-flex flex-row justify-space-between">
                                <v-btn text small class="mx-1 no-letter-spacing">گزینه ۱</v-btn>
                                <v-btn text small class="mx-1 no-letter-spacing">گزینه ۲</v-btn>
                                <v-btn text small class="mx-1 no-letter-spacing">گزینه ۳</v-btn>
                                <v-btn text small class="mx-1 no-letter-spacing">گزینه ۴</v-btn>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <!-- azmoon started -->
            <v-card>
            <v-row no-gutters justify="center" align="center" class="fill-height" v-show="state === 'started'">
                <v-col cols="12" md="12">
                    <v-card>
                        <v-img src=""></v-img>
                    </v-card>
                </v-col>
            </v-row>
            </v-card>
            <v-toolbar dense v-show="state === 'started'">
                <v-btn small outlined><v-icon>mdi-chevron-double-right</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-btn small outlined class="px-1 no-letter-spacing">گزینه ۱</v-btn>
                <v-btn small outlined class="px-1 no-letter-spacing">گزینه ۲</v-btn>
                <v-btn small outlined class="px-1 no-letter-spacing">گزینه ۳</v-btn>
                <v-btn small outlined class="px-1 no-letter-spacing">گزینه ۴</v-btn>
                <v-spacer></v-spacer>
                <v-btn small outlined><v-icon>mdi-chevron-double-left</v-icon></v-btn>
            </v-toolbar>
        </v-sheet>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment-jalaali'

export default {
    name: 'VfAzmoonInput',
    props: {
        // field is the product model in db
        // with its original role in formjson
        field: Object,
        value: Object,
        id: String,
    },
    data: () => ({
        dialog: false,
        state: 'started',
        answerSheet: false,
        loading: false,
        details: null,
        started_at: null,
    }),
    computed: {
        azmoonTitle () {
            return this.field.data.types?.azmoon?.title ?? field.data.title;
        },
        questionsCount () {
            return this.questions?.length ?? 0
        },
        azmoonTimed () {
            return this.field.data.types?.azmoon?.max_time && parseInt(this.field.data.types?.azmoon?.max_time) > 0;
        },
        azmoonTime () {
            return parseInt(this.field.data.types?.azmoon?.max_time);
        },
        azmoonTimeString () {
            if (this.azmoonTimed) {
                return this.azmoonTime.toLocaleString('fa') + ' دقیقه '
            }
            return  'بدون زمان'
        },
        questions () {
            if (this.details?.data?.types?.azmoon?.details) {
                return this.details?.data?.types?.azmoon?.details.filter((q) => q.q_file);
            }
            return []
        },
        hasHistory () {
            return this.details && this.details.user_history ? true : false;
        },
        azmoonTimeTitle () {
            if (this.azmoonTimed) {
                const diff = moment().diff(this.started_at, 'minute');
                const remaining = this.azmoonTimed - diff;
                return `زمان باقی مانده ${remaining} دقیقه`
            }
        }
    },
    methods: {
        startAzmoon () {
            this.started_at = moment();
            this.started_at.setLocale('fa');
            this.state = 'started'
        },
        endAzmoon () {

        },
        onGoToQuestion () {

        }
    },
    watch: {
        dialog () {
            const host = this.$store.state.host;
            if (this.dialog) {
                if (!this.details) {
                    this.loading = true;
                    setTimeout(() => {
                        const host = this.$store.state.host;
                        host.webRequest({
                            headers: host.getWebAuthHeaders({}),
                            url: '/api/azmoon/' + this.field.id + '/details',
                            method: 'POST',
                        }).then((response) => {
                            this.details = response.data;
                            this.loading = false;
                        }).catch((error) => {
                            this.loading = false;
                            if (err.response?.data?.message) {
                                host.showSnack(err.response?.data?.message);
                            } else {
                                host.showSnack(err.message);
                            }
                        })
                    }, 300)
                }
            } else {

            }
        }
    },
}
</script>
