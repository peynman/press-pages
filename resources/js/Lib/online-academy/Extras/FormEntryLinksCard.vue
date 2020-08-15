<template>
    <v-card class="ma-1" flat background-color="grey lighten-2">
        <v-system-bar dark color="primary">{{ label }}</v-system-bar>
        <v-list dense color="grey lighten-2" >
            <v-list-item three-line>
                <v-list-item-icon class="ma-auto">
                    <v-icon large>mdi-alien-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="ms-2">
                    <v-list-item-title><strong>IP:</strong> {{ field.data.ip }}</v-list-item-title>
                    <v-list-item-subtitle><strong>Agent:</strong> {{ field.data.agent }}</v-list-item-subtitle>
                    <v-list-item-subtitle><strong>نوع اطلاعات فرم:</strong> {{ formTypeString }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon class="ma-auto">
                    <v-icon @click="showDetails = !showDetails" :color="showDetails ? 'warning':'secondary'" small>mdi-eye</v-icon>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
        <v-simple-table dense hide-default-footer v-if="showDetails">
            <template #default>
                <thead>
                    <tr>
                        <th>پارامتر</th>
                        <th>مقدار</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(param, index) in formParams" :key="`${id}-form-${itemId}-${index}`">
                        <td>{{ param.key }}</td>
                        <td><span style="overflow: hidden; max-width: 40%;">{{ param.value }}</span></td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <div
          v-if="showDetails && formParams.length == 0"
          class="text-center ma-3"
        >
            پارامتری برای نمایش مستقیم ثبت نشده است
        </div>
        <v-card-text v-if="formType === 'taklif'" class="d-flex flex-column">
            <span class="caption">فایل‌‌های ارسال شده توسط دانش آموز با شناسه {{ field.user_id }} برای جلسه با شناسه {{ field.data.values.product_id }}</span>
            <div class="d-flex flex-row">
                <v-btn
                    v-for="file in taklifFiles"
                    :key="`${id}-taklif-${itemId}-${file.id}`"
                    outlined
                    small
                    :href="file.link"
                    target="_blank"
                    class="no-letter-spacing ma-2"
                >
                    {{ file.title }}
                </v-btn>
            </div>
        </v-card-text>
        <v-card-text v-if="formType === 'presence'" class="d-flex flex-column">
            <span class="caption">حضور و غیاب دانش آموز با شناسه {{ field.user_id }} برای جلسه با شناسه {{ field.data.values.product_id }}</span>
            <v-list dense class="ma-2" color="grey lighten-3">
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>مدت حضور در کلاس: {{ presenceDuration }}</v-list-item-title>
                        <v-list-item-subtitle>اولین ورود: {{ presenceFirstEnter }}</v-list-item-subtitle>
                        <v-list-item-subtitle>اخرین خروج: {{ presenceLastExit }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
        <v-card-text v-if="formType === 'support'" class="d-flex flex-column">
            <span class="caption">تاریخچه و پشتیبان دانش آموز با شناسه {{ field.user_id }}</span>
            <v-list dense class="ma-2" color="grey lighten-3">
                <v-list-item two-line v-for="(sid, index) in supportIds" :key="`${id}-support-group-${index}`">
                    <v-list-item-content>
                        <v-list-item-title>تغییر پشتیبان به شناسه #{{ sid.support_user_id }} {{ sid.support_name }}</v-list-item-title>
                        <v-list-item-subtitle>تغییر در تاریخ {{ sid.at }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>

<script>
import { EasyNestedObject } from './../../vuetify-formjson/Fields/mixins'
import moment from 'moment-jalaali'
import momentTz from "moment-timezone";

export default {
    mixins: [EasyNestedObject],
    name: 'form-entry-links-card',
    props: {
        id: String,
        field: Object,
    },
    data: () => ({
        showDetails: false,
    }),
    computed: {
        itemId () {
            const itemId = this.field.expand?.column?.id ? this.getNestedPathValue(this.field, this.field.expand?.column?.id) : this.field.id;
            if (typeof itemId === 'object') {
                return itemId.id;
            }

            return itemId;
        },
        formType () {
            if (this.field.tags) {
                if (this.field.tags.startsWith('course-')) {
                    if (this.field.tags.endsWith('-taklif')) {
                        return 'taklif'
                    } else if (this.field.tags.endsWith('-presence')) {
                        return 'presence'
                    }
                } else if (this.field.tags.startsWith('support-group-')) {
                    return 'support'
                } else if (this.field.tags.startsWith('introducer-id-')) {
                    return 'introducer'
                }
            }

            return 'general'
        },
        formTypeString () {
            return {
                'general': 'فرم عمومی',
                'intoducer': 'ثبت نام از طریق معرف',
                'support': 'تایین پشتیبان دانش آموز',
                'presence': 'حضور و غیاب دانش آموز در جلسه کلاس',
                'taklif': 'تکالیف ارسال شده توسط دانش آموز',
            }[this.formType];
        },
        label () {
            return  `جزییات فرم پر شده با شناسه ${this.itemId} توسط کاربر با شناسه ${this.field.user_id}`;
        },
        formParams () {
            const params = [];
            for (const prop in this.field.form.data.form.schema.fields) {
                const field = this.field.form.data.form.schema.fields[prop];
                if (field.validations && field.validations.required) {
                    params.push({
                        key: prop,
                        value: this.field.data.values[prop]
                    })
                }
            }
            return params;
        },
        taklifFiles () {
            const files = [];
            if (this.field.data.values.file_ids) {
                this.field.data.values.file_ids.forEach((fid) => {
                    files.push({
                        id: fid,
                        title: `نمایش تکلیف با شناسه ${fid}`,
                        link: '/file-uploads/download/' + fid,
                    })
                })
            }
            return files;
        },
        presenceDuration() {
            const duration = parseInt(this.field.data.values.duration * 1000);
            return moment.duration(duration).locale('fa').humanize({precision: 3})
        },
        presenceFirstEnter () {
            const sessions = this.field.data.values.sessions ?? [];
            if (sessions.length > 0) {
                const mom = moment(momentTz.utc(sessions[0].at).tz(momentTz.tz.guess())).locale('fa');
                return 'در ساعت ' + mom.format('hh:mm:ss')
            }

            return ''
        },
        presenceLastExit () {
            const sessions = this.field.data.values.sessions ?? [];
            if (sessions.length > 0) {
                const mom = moment(momentTz.utc(sessions[sessions.length - 1].at).tz(momentTz.tz.guess())).locale('fa');
                return 'در ساعت ' + mom.format('hh:mm:ss')
            }

            return ''
        },
        supportIds() {
            const sids = [];
            const support_history = this.field.data.values.support_ids ?? [];

            support_history.forEach((si) => {
                sids.push({
                    ...si,
                    at: moment(momentTz.utc(si.updated_at).tz(momentTz.tz.guess())).locale('fa').format('jYYYY/jMM/jDD hh:mm:ss'),
                })
            })

            return sids;
        }
    },
}
</script>
