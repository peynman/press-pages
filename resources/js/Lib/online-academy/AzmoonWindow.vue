<template>
  <div :class="`vf-input ${field.class ? field.class:''}`">
    <v-btn
      outlined
      primary
      rouned
      class="no-letter-spacing"
      @click="dialog = true"
       :disabled="!canStartAzmoon"
    >
      <v-icon class="me-2">
        {{ field.icon }}
      </v-icon> {{ canStartAzmoon ? 'ورود به صفحه آزمون' : 'آزمون بعد از اتمام کلاس' }}
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
          :disabled="mode === 'started'"
        >
          <v-icon small>
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
            <v-row no-gutters justify="center" align="center" class="fill-height" v-show="mode === 'not_started'">
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

            <!-- already taken azmoon -->
            <v-row no-gutters justify="center" align="center" class="fill-height" v-show="mode === 'taken'">
                <v-col cols="12" md="8">
                    <v-list three-line>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>{{ takenTimeString }}</v-list-item-title>
                                <v-progress-linear absolute bottom
                                    :active="loading"
                                    indeterminate
                                    color="primary darken-2"
                                ></v-progress-linear>
                                <v-list-item-subtitle v-if="details">شامل {{ questionsCount }} سوال ۴ گزینه ای</v-list-item-subtitle>
                                <v-list-item-subtitle v-if="details">{{ azmoonTimeString }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-chip color="primary">{{ percentTitle }}</v-chip>
                                <v-chip color="success">{{ percentNoErrTitle }}</v-chip>
                                <v-chip color="secondary">{{ percentDetails }}</v-chip>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-row no-gutters justify="center" align="center" class="fill-height" v-show="mode === 'taken' && canSeeAnswers && !takenShowQ">
                <v-col cols="12" md="8">
                    <v-list dense>
                        <v-list-item v-for="(q,index) in questions" :key="`${id}-question-${index}`" @click="onGoToQuestion(index)">
                            <v-list-item-icon>
                                <v-chip :color="getColorForAnswer(index, 0, true)">{{ index + 1 }}</v-chip>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <div class="d-flex flex-row justify-space-between">
                                    <v-btn depressed small :color="getColorForAnswer(index, 1, true)"  class="mx-1 no-letter-spacing">گزینه ۱</v-btn>
                                    <v-btn depressed small :color="getColorForAnswer(index, 2, true)"  class="mx-1 no-letter-spacing">گزینه ۲</v-btn>
                                    <v-btn depressed small :color="getColorForAnswer(index, 3, true)"  class="mx-1 no-letter-spacing">گزینه ۳</v-btn>
                                    <v-btn depressed small :color="getColorForAnswer(index, 4, true)"  class="mx-1 no-letter-spacing">گزینه ۴</v-btn>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>

            <!-- started azmoon header -->
            <v-toolbar dense v-show="mode === 'started'">
                <v-toolbar-title>
                    <div class="d-flex flex-column">
                        <span>{{ azmoonQuestionTitle }}</span>
                        <span style="font-size: 12px;">{{ azmoonTimeTitle }}</span>
                    </div>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn :disabled="loading" outlined small color="success" class="no-letter-spacing me-1" @click="answerSheet = !answerSheet">نمایش پاسخنامه</v-btn>
                <v-btn :loading="loading" outlined small color="warning"class="no-letter-spacing me-1" @click="endAzmoon">تحویل پاسخنامه و ثبت پایان آزمون</v-btn>
            </v-toolbar>
            <v-navigation-drawer fixed temporary v-model="answerSheet" style="min-width: 400px;">
                <v-list dense>
                    <v-list-item v-for="(q,index) in questions" :key="`${id}-question-${index}`" @click="onGoToQuestion(index)">
                        <v-list-item-icon>
                            <v-chip>{{ index + 1 }}</v-chip>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <div class="d-flex flex-row justify-space-between">
                                <v-btn depressed small :color="getColorForAnswer(index, 1)"  class="mx-1 no-letter-spacing">گزینه ۱</v-btn>
                                <v-btn depressed small :color="getColorForAnswer(index, 2)"  class="mx-1 no-letter-spacing">گزینه ۲</v-btn>
                                <v-btn depressed small :color="getColorForAnswer(index, 3)"  class="mx-1 no-letter-spacing">گزینه ۳</v-btn>
                                <v-btn depressed small :color="getColorForAnswer(index, 4)"  class="mx-1 no-letter-spacing">گزینه ۴</v-btn>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <!-- azmoon started -->
            <v-card>
                <v-row no-gutters justify="center" align="center" class="fill-height" v-show="mode === 'started' || (takenShowQ && mode === 'taken')">
                    <v-col cols="12" md="12">
                        <v-card class="fill-width">
                            <v-btn fab color="primary" v-if="mode === 'taken'" @click="takenShowQ = false"><v-icon>mdi-close</v-icon></v-btn>
                            <v-img v-if="current" :src="current" contain min-height="100px">
                                <template v-slot:placeholder>
                                    <v-row
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center"
                                    >
                                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
            <v-toolbar :disabled="loading" dense v-show="mode === 'started'" class="fill-wdith">
                <v-btn small outlined :disabled="!current || currentIndex === 0" @click="prevQuestion"><v-icon>mdi-chevron-double-right</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-btn small depressed :color="getColorForAnswer(currentIndex, 1)" class="mx-1 no-letter-spacing" @click="selectAnswer(1)">گزینه ۱</v-btn>
                <v-btn small depressed :color="getColorForAnswer(currentIndex, 2)" class="mx-1 no-letter-spacing" @click="selectAnswer(2)">گزینه ۲</v-btn>
                <v-btn small depressed :color="getColorForAnswer(currentIndex, 3)" class="mx-1 no-letter-spacing" @click="selectAnswer(3)">گزینه ۳</v-btn>
                <v-btn small depressed :color="getColorForAnswer(currentIndex, 4)" class="mx-1 no-letter-spacing" @click="selectAnswer(4)">گزینه ۴</v-btn>
                <v-spacer></v-spacer>
                <v-btn small outlined :disabled="!current || currentIndex >= this.questions.length - 1" @click="nextQuestion"><v-icon>mdi-chevron-double-left</v-icon></v-btn>
            </v-toolbar>
        </v-sheet>
      </v-lazy>
    </v-dialog>
  </div>
</template>

<script>
import moment from 'moment-jalaali'
import momentTz from "moment-timezone";

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
        mode: 'not_started',
        answerSheet: false,
        loading: false,
        details: null,
        started_at: null,
        current: null,
        currentIndex: null,
        myAnswers: {},
        azmoonTimeTitle: '',
        taken: null,
        takenMom: null,
        takenShowQ: false,
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
        azmoonQuestionTitle () {
            if (this.currentIndex) {
                return `سوال ${this.currentIndex + 1}`
            }

            return ''
        },
        canSeeAnswers () {
            return this.field.data.types?.azmoon?.can_see_answers ?? false;
        },
        takenTimeString () {
            if (this.taken) {
                const dt = this.taken.created_at;
                if (dt.includes('+')) {
                    this.takenMom = moment(dt, "YYYY/MM/DDTHH:mm:ssZ");
                    this.takenMom.locale("fa");
                } else {
                    this.takenMom = moment(momentTz.utc(dt).tz(momentTz.tz.guess()));
                    this.takenMom.locale("fa");
                }

                return `شما آزمون را در تاریخ ${this.takenMom.format("dddd jYYYY/jMM/jDD")} پاسخ داده‌اید`
            }
        },
        percentTitle () {
            return `درصد شما ${this.takenDetails.percent}٪`
        },
        percentNoErrTitle () {
            return `بدون امتیاز منفی ${this.takenDetails.percentNoErr}٪`
        },

        percentDetails () {
            return `${this.takenDetails.correct} پاسخ صحیح و ${this.takenDetails.errors} غلط و ${this.takenDetails.noAnswer} نزده`
        },
        takenDetails () {
            let correct = this.taken?.data?.values?.correct ?? 0;
            let errors = this.taken?.data?.values?.errors ?? 0;
            let total = this.questions.length;
            let percentNoErr = (correct) / total * 100
            let percent = (correct * 3 - errors) /  (3*total) * 100
            return {
                correct: correct.toLocaleString('fa'),
                errors: errors.toLocaleString('fa'),
                total: total.toLocaleString('fa'),
                noAnswer: (total - (correct + errors)).toLocaleString('fa'),
                percent: percent.toFixed(2).toLocaleString('fa'),
                percentNoErr: percentNoErr.toFixed(2).toLocaleString('fa'),
            }
        },
        canStartAzmoon () {
            if (this.field.data?.types?.azmoon?.type == 'after_class') {
                return this.isEnded
            }
            return true;
        },
        isEnded () {
            return this.field.data.types?.livestream?.status === 'ended' ||
                     this.field.data.types?.ac_meeting?.status === 'ended';
        },
    },
    methods: {
        startAzmoon () {
            this.started_at = moment();
            this.started_at.locale('fa');
            this.mode = 'started'
            this.updateAzmoonTimeTitle();
            this.startAzmoonTimerUpdate();
            this.onGoToQuestion(0);
        },
        endAzmoon () {
            this.loading = true;
            const host = this.$store.state.host;
            host.webRequest({
                headers: host.getWebAuthHeaders({}),
                url: '/api/azmoon/' + this.field.id + '/answer_sheet',
                method: 'POST',
                data: {
                    answers: {...this.myAnswers},
                },
            }).then((response) => {
                this.mode = 'taken';
                this.taken = response.data;
                this.myAnswers = this.taken.data.values?.answers;
                this.loading = false;
            }).catch((err) => {
                this.loading = false;
                if (err.response?.data?.message) {
                    host.showSnack(err.response?.data?.message);
                } else {
                    host.showSnack(err.message);
                }
            })
        },
        startAzmoonTimerUpdate() {
            if (this.mode === 'started') {
                if (this.azmoonTime > 0) {
                    setTimeout(() => {
                        this.updateAzmoonTimeTitle();
                        this.startAzmoonTimerUpdate();
                    }, 60000)
                }
            }
        },
        onGoToQuestion (index) {
            this.currentIndex = index;
            this.current = '/azmoon/' + this.field.id + '/question/' + index;
            this.answerSheet = false;
            if (this.mode === 'taken') {
                this.takenShowQ = true;
            }
        },
        prevQuestion () {
            if (this.currentIndex > 0) {
                this.onGoToQuestion(this.currentIndex - 1);
            }
        },
        nextQuestion () {
            if (this.currentIndex < this.questions.length - 1) {
                this.onGoToQuestion(this.currentIndex + 1);
            }
        },
        getColorForAnswer(index, answer, truth = false) {
            if (truth) {
                if (this.questions[index].answer == answer) {
                    return 'success'
                } else if (answer === 0) { // show state of answer for this index
                    return this.myAnswers[index] ? this.myAnswers[index] == this.questions[index].answer ? 'success':'error' : 'gray'
                }
            }
            if (this.myAnswers[index]) {
                if (this.myAnswers[index] == answer) {
                    return this.taken ? 'error' : 'primary';
                }
            }

            return 'gray'
        },
        selectAnswer(answer) {
            if (this.myAnswers[this.currentIndex] == answer) {
                this.myAnswers[this.currentIndex] = undefined;
            } else {
                this.myAnswers[this.currentIndex] = answer;
            }
            setTimeout(() => {
                if (this.currentIndex < this.questions.length - 1) {
                    this.nextQuestion();
                } else {
                    this.onGoToQuestion(0);
                }
            }, 1000)
            this.$forceUpdate();
        },
        updateAzmoonTimeTitle () {
            if (this.azmoonTimed) {
                const diff = moment().diff(this.started_at, 'minute');
                const remaining = this.azmoonTime - diff;
                if (remaining === 0) {
                    setTimeout(() => {
                        tnis.endAzmoon();
                    }, 60000)
                }
                this.azmoonTimeTitle = `زمان باقی مانده ${remaining} دقیقه`
            } else {

            }
        },
    },
    watch: {
        dialog () {
            const host = this.$store.state.host;
            if (this.dialog) {
                if (!this.details) {
                    this.loading = true;
                    const host = this.$store.state.host;
                    host.webRequest({
                        headers: host.getWebAuthHeaders({}),
                        url: '/api/azmoon/' + this.field.id + '/details',
                        method: 'POST',
                    }).then((response) => {
                        this.details = response.data;
                        if (this.details.user_history) {
                            this.mode = 'taken';
                            this.taken = this.details.user_history;
                            this.myAnswers = this.taken.data.values?.answers;
                        }
                        this.loading = false;
                    }).catch((err) => {
                        this.loading = false;
                        if (err.response?.data?.message) {
                            host.showSnack(err.response?.data?.message);
                        } else {
                            host.showSnack(err.message);
                        }
                    })
                }
            } else {

            }
        }
    },
}
</script>
