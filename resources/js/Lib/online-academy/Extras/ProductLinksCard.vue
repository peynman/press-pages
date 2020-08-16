<template>
    <object-links-card :field="linksField" :id="id"></object-links-card>
</template>

<script>
import { EasyNestedObject } from './../../vuetify-formjson/Fields/mixins'

export default {
    mixins: [EasyNestedObject],
    name: 'product-links-card',
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
            const extras = [];
            if (this.field.types) {
                if (this.field.types.map((t) => t.name).includes('course') ||
                    this.field.types.map((t) => t.name).includes('session')) {
                    extras.push(...[
                        {
                            id: 'children',
                            title: 'محصولات زیرمجموعه',
                            icon: 'mdi-file-tree',
                            url: '/admin/products',
                            filters: {
                                parent_id: this.field.id,
                            }
                        },
                        {
                            id: 'purchased',
                            title: 'خرید شده توسط',
                            icon: 'mdi-cart-arrow-down',
                            url: '/admin/users',
                            filters: {
                                purchased_id: this.field.id,
                            }
                        },
                        {
                            id: 'in_list',
                            title: 'در لیست خرید',
                            icon: 'mdi-cart-plus',
                            url: '/admin/users',
                            filters: {
                                in_cart_id: this.field.id,
                            }
                        },
                        {
                            id: 'send-sms',
                            title: 'ارسال پیامک به لیست خریداران',
                            icon: 'mdi-cellphone-play',
                            url: '/admin/sms-messages/send',
                            devalue: {
                                type: 'in_purchased_ids',
                                ids: this.itemId,
                            }
                        },
                    ]);
                }
                if (this.field.types.map((t) => t.name).includes('session')) {
                    extras.push(...[
                        {
                            id: 'entry_presense',
                            title: 'حضور و غیاب',
                            icon: 'mdi-clipboard-check',
                            url: '/admin/form-entries',
                            filters: {
                                tags: 'course-' + this.field.id + '-presence',
                            }
                        },
                        {
                            id: 'entry_taklif',
                            title: 'تکالیف ارسالی',
                            icon: 'mdi-clipboard-file',
                            url: '/admin/form-entries',
                            filters: {
                                tags: 'course-' + this.field.id + '-taklif',
                            }
                        },
                    ]);
                }
            }
            extras.forEach((e) => {
                if (!links[e.id]) {
                    links[e.id] = {
                        ...e,
                        fields: {},
                        options: {},
                        devalue: {},
                        loaded: false,
                        loading: false,
                    }
                }
            });
            return {
                label: `جزییات محصول با شناسه ${this.field.id}`,
                ...this.field,
                links,
            }
        }
    },
}
</script>
