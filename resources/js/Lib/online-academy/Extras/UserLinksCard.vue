<template>
<object-links-card :field="linksField" :id="id">
    <template v-slot:prepend>
        <v-list dense background-color="grey lighten-2" class="text-start" :disabled="false">
            <v-list-item three-line>
                <v-list-item-avatar>
                    <v-img size="40" :src="profile && profile.profile ? profile.profile : '/images/avatar.png'"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ profileTitle }}</v-list-item-title>
                    <v-list-item-subtitle style="overflow: visible;">
                        <v-chip dark small dense v-if="supportUserDays" :color="supportUserDaysColor" >{{ supportUserDays }} روز</v-chip>
                        <span>
                            {{ supportTitle }}
                        </span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        موجودی {{ balance ? balance.amount : '0' }} {{ balance ? balance.currency.title : 'تومان' }}
                    </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn icon small dense :href="`/admin/users/${itemId}`" target="_blank"><v-icon small>mdi-database-edit</v-icon></v-btn>
                    <v-btn color="warning" icon small dense :loading="updatingPass" @click="updatePass"><v-icon small>mdi-onepassword</v-icon></v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </template>
</object-links-card>
</template>

<script>
import moment from "moment-jalaali";
import {
    EasyNestedObject
} from './../../vuetify-formjson/Fields/mixins'

export default {
    mixins: [EasyNestedObject],
    name: 'user-links-card',
    props: {
        id: String,
        field: Object,
    },
    data: () => ({
        updatingPass: false,
    }),
    computed: {
        profileTitle () {
            if (this.profile) {
                return this.profile.firstname + ' ' + this.profile.lastname;
            }
            return 'پروفایل تمکیل نشده';
        },
        supportTitle () {
            if (this.supportUserProfile) {
                return this.supportUserProfile.firstname + ' ' + this.supportUserProfile.lastname;
            }
            return 'پشتیبان ندارد'
        },
        profile () {
            if (this.field.profile?.data?.values?.firstname && this.field.profile?.data?.values?.lastname) {
                return this.field.profile?.data?.values;
            } else if (this.field[this.column.id].profile?.data?.values?.firstname && this.field[this.column.id].profile?.data?.values?.lastname) {
                return this.field[this.column.id].profile?.data?.values;
            }
        },
        supportUserProfile () {
            if (this.field.supportUserProfile?.data?.values?.firstname && this.field.supportUserProfile?.data?.values?.lastname) {
                return this.field.supportUserProfile?.data?.values;
            } else if (this.field[this.column.id].supportUserProfile?.data?.values?.firstname && this.field[this.column.id].supportUserProfile?.data?.values?.lastname) {
                return this.field[this.column.id].supportUserProfile?.data?.values;
            }
        },
        balance () {
            if (this.field.balance) {
                return { amount: parseInt(this.field.balance.amount).toLocaleString('fa').replace(/\B(?=(\d{3})+(?!\d))/g, ","), currency: this.field.balance.currency };
            } else if (this.field[this.column.id].balance && this.field[this.column.id].balance?.amount) {
                return { amount: parseInt(this.field[this.column.id].balance.amount).toLocaleString('fa').replace(/\B(?=(\d{3})+(?!\d))/g, ","), currency: this.field[this.column.id].balance.currency };
            }
        },
        supportUserDays () {
            if (this.field.supportUserProfile?.entry?.created_at) {
                const inTime = moment(this.field.supportUserProfile?.entry?.created_at, 'YYYY/MM/DDTHH:mm:ssZ');
                const now = moment();
                return now.diff(inTime, 'day');
            } else if (this.field[this.column.id].supportUserProfile?.entry?.created_at) {
                const inTime = moment(this.field[this.column.id].supportUserProfile?.entry?.created_at, 'YYYY/MM/DDTHH:mm:ssZ');
                const now = moment();
                return now.diff(inTime, 'day');
            }
            return false;
        },
        supportUserDaysColor () {
            if (this.supportUserDays) {
                if (this.supportUserDays <= 7) {
                    return 'green'
                } else if (this.supportUserDays <= 14) {
                    return 'warning'
                } else if (this.supportUserDays <= 30) {
                    return 'purple'
                } else {
                    return 'red'
                }
            }
            return 'transparent';
        },
        column () {
            return this.field.expand?.column ?? null;
        },
        itemId() {
            const itemId = this.field.expand?.column?.id ? this.getNestedPathValue(this.field, this.field.expand?.column?.id) : this.field.id;
            if (typeof itemId === 'object') {
                return itemId.id;
            }

            return itemId;
        },
        linksField() {
            const links = {};
            const extras = [{
                    id: 'form-entries',
                    title: 'فرم‌های پر شده',
                    icon: 'mdi-clipboard-check-multiple-outline',
                    url: '/admin/form-entries',
                    filters: {
                        user_id: this.itemId,
                    }
                },
                {
                    id: 'send-form-entry',
                    title: 'ارسال  فرم',
                    icon: 'mdi-clipboard-check-outline',
                    url: '/admin/form-entries/create',
                    devalue: {
                        user_id: this.itemId,
                    },
                    schema: {
                        fields: {
                            user_id: {
                                hidden: true,
                            }
                        }
                    }
                },
                {
                    id: 'send-sms',
                    title: 'ارسال پیامک',
                    icon: 'mdi-cellphone-play',
                    url: '/admin/sms-messages/send',
                    devalue: {
                        type: 'in_ids',
                        ids: this.itemId,
                    },
                    schema: {
                        fields: {
                            ids: {
                                hidden: true,
                            },
                            type: {
                                hidden: true,
                            },
                            roles: {
                                hidden: true,
                            },
                            domains: {
                                hidden: true,
                            },
                        }
                    }
                },
                {
                    id: 'notifications',
                    title: 'اعلان‌ها',
                    icon: 'mdi-shield',
                    url: '/admin/notifications',
                    filters: {
                        user_id: this.itemId,
                    }
                },
                {
                    id: 'send-notification',
                    title: 'ارسال اعلان',
                    icon: 'mdi-shield-alert',
                    url: '/admin/notifications/send',
                    devalue: {
                        type: 'in_ids',
                        ids: this.itemId,
                    },
                    schema: {
                        fields: {
                            ids: {
                                hidden: true,
                            },
                            type: {
                                hidden: true,
                            },
                            roles: {
                                hidden: true,
                            },
                            domains: {
                                hidden: true,
                            },
                        }
                    }
                },
                {
                    id: 'carts',
                    title: 'سبد‌های خرید',
                    icon: 'mdi-cart-arrow-down',
                    url: '/admin/carts',
                    filters: {
                        customer_id: this.itemId,
                    }
                },
                {
                    id: 'carts_create',
                    title: 'ثبت سبد جدید',
                    icon: 'mdi-cart-plus',
                    url: '/admin/carts/create',
                    devalue: {
                        customer_id: this.itemId,
                    },
                    schema: {
                        fields: {
                            customer_id: {
                                hidden: true,
                            },
                        }
                    }
                },
                {
                    id: 'wallet',
                    title: 'تراکنش‌های کیف پول',
                    icon: 'mdi-wallet',
                    url: '/admin/wallet-transactions',
                    filters: {
                        user_id: this.itemId,
                    }
                },
                {
                    id: 'wallet_create',
                    title: 'ثبت تراکنش‌ جدید',
                    icon: 'mdi-wallet-plus',
                    url: '/admin/wallet-transactions/create',
                    devalue: {
                        target_user: this.itemId,
                    },
                    schema: {
                        fields: {
                            target_user: {
                                hidden: true,
                            },
                        }
                    }
                },
                {
                    id: 'periods',
                    title: 'اقساط پرداخت نشده',
                    icon: 'mdi-wallet-plus-outline',
                    url: '/admin/carts',
                    filters: {
                        customer_id: this.itemId,
                        flags: 16,
                        status: "1",
                    }
                },
            ];

            extras.forEach((e) => {
                if (!links[e.id]) {
                    links[e.id] = {
                        fields: {},
                        options: {},
                        devalue: {},
                        ...e,
                        loaded: false,
                        loading: false,
                    }
                }
            });

            return {
                label: `جزییات کاربر با شناسه ${this.itemId}`,
                ...this.field,
                links,
            }
        }
    },
    methods: {
        updatePass () {
            const newpass = window.prompt('Enter new password for user #'+this.itemId);
            const host = this.$store.state.host;
            if (newpass && newpass.length >= 6) {
                if (window.confirm('Are you sure you want to change user #'+this.itemId+' password to "'+newpass+'"?')) {
                    this.updatingPass = true;
                    host.axios({
                        url: '/api/users/' + this.itemId,
                        method: 'PUT',
                        data: {
                            password: newpass,
                            password_confirmation: newpass,
                        },
                        headers: host.getWebAuthHeaders({}),
                    }).then((response) => {
                        this.updatingPass = false;
                        host.showSnack('Password updated for user #'+this.itemId, 'success')
                    }).catch((error) => {
                        this.updatingPass = false;
                        if (error.response?.data.message) {
                            host.showSnack(error.response?.data.message)
                        } else {
                            host.showSnack(error.message)
                        }
                    })
                }
            } else {
                host.showSnack('Password did not change', 'secondary')
            }
        }
    }
}
</script>
