<template>
    <object-links-card :field="linksField" :id="id"></object-links-card>
</template>

<script>
import { EasyNestedObject } from './../../vuetify-formjson/Fields/mixins'

export default {
    mixins: [EasyNestedObject],
    name: 'user-links-card',
    props: {
        id: String,
        field: Object,
    },
    computed: {
        itemId () {
            const itemId = this.field.expand?.column?.id ? this.getNestedPathValue(this.field, this.field.expand?.column?.id) : this.field.id;
            if (typeof itemId === 'object') {
                return itemId.id;
            }

            return itemId;
        },
        linksField () {
            const links = {};
            const extras = [
                {
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
                    }
                },
                {
                    id: 'purchass',
                    title: 'محصولات خرید شده',
                    icon: 'mdi-cart-arrow-down',
                    url: '/admin/products',
                    filters: {
                        user_purchased_id: this.itemId,
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
                    id: 'periods',
                    title: 'اقساط پرداخت نشده',
                    icon: 'mdi-wallet-plus-outline',
                    url: '/admin/carts',
                    filters: {
                        customer_id: this.itemId,
                        flags: 16,
                        status: "1",
                    }
                }
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
}
</script>
