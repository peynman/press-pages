<template>
    <v-badge dense :value="badgeValue !== false" bordered :color="badgeColor" overlap :content="badgeValue">
        <v-tooltip left content-class="ma-0 pa-0">
            <template v-slot:activator="{ on, attrs }">
                <v-chip
                        dense
                        small
                        color="primary lighten-1"
                        @click="onClick"
                        dark
                        v-bind="attrs"
                        v-on="(extraName || extraSupportName) ? on : {}"
                    >
                        <v-chip
                            v-if="isObject"
                            class="px-1 me-2"
                            color="primary lighten-2"
                            small
                            dense
                        >
                            #{{ itemID }}
                        </v-chip>
                        {{ isObject ? itemTitle : '#'+itemID }}
                </v-chip>
            </template>
            <v-list three-line dense dark >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{ extraName ? extraName : 'پروفایل تکمیل نشده' }}</v-list-item-title>
                        <v-list-item-subtitle>{{ extraSupportName ? extraSupportName : 'پشتیبان ندارد ' }}</v-list-item-subtitle>
                        <v-list-item-subtitle>موجودی {{ extraBalanceString }} </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-tooltip>
    </v-badge>
</template>

<script>
import moment from "moment-jalaali";

export default {
    name: "VfDatatableColumnExpandableLinks",
    props: {
        item: Object,
        column: Object
    },
    computed: {
        badgeValue () {
            if (this.item.supportUserProfile?.entry?.created_at) {
                const inTime = moment(this.item.supportUserProfile?.entry?.created_at, 'YYYY/MM/DDTHH:mm:ssZ');
                const now = moment();
                return now.diff(inTime, 'day');
            } else if (this.item[this.column.id] && this.item[this.column.id].supportUserProfile?.entry?.created_at) {
                const inTime = moment(this.item[this.column.id].supportUserProfile?.entry?.created_at, 'YYYY/MM/DDTHH:mm:ssZ');
                const now = moment();
                return now.diff(inTime, 'day');
            }
            return false;
        },
        extraName () {
            if (this.item.profile?.data?.values?.firstname && this.item.profile?.data?.values?.lastname) {
                return this.item.profile?.data?.values?.firstname + ' ' + this.item.profile?.data?.values?.lastname;
            } else if (this.item[this.column.id] && this.item[this.column.id].profile?.data?.values?.firstname && this.item[this.column.id].profile?.data?.values?.lastname) {
                return this.item[this.column.id].profile?.data?.values?.firstname + ' ' + this.item[this.column.id].profile?.data?.values?.lastname;
            }
            return false
        },
        extraSupportName () {
            if (this.item.supportUserProfile?.data?.values?.firstname && this.item.supportUserProfile?.data?.values?.lastname) {
                return this.item.supportUserProfile?.data?.values?.firstname + ' ' + this.item.supportUserProfile?.data?.values?.lastname;
            } else if (this.item[this.column.id] && this.item[this.column.id].supportUserProfile?.data?.values?.firstname && this.item[this.column.id].supportUserProfile?.data?.values?.lastname) {
                return this.item[this.column.id].supportUserProfile?.data?.values?.firstname + ' ' + this.item[this.column.id].supportUserProfile?.data?.values?.lastname;
            }
            return false
        },
        extraBalanceString () {
            if (this.item.balance) {
                return parseInt(this.item.balance.amount).toLocaleString('fa').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else if (this.item[this.column.id] && this.item[this.column.id].balance) {
                return parseInt(this.item[this.column.id] && this.item[this.column.id].balance.amount).toLocaleString('fa').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            return false;
        },
        extraBalanceCurrency () {
            if (this.item.balance) {
                return this.item.currency.title;
            } else if (this.item[this.column.id] && this.item[this.column.id].balance) {
                return this.item[this.column.id].balance.currency.title;
            }

            return false;
        },
        badgeColor () {
            if (this.badgeValue !== false) {
                if (this.badgeValue <= 7) {
                    return 'green'
                } else if (this.badgeValue <= 14) {
                    return 'warning'
                } else if (this.badgeValue <= 30) {
                    return 'purple'
                } else {
                    return 'red'
                }
            }
            return 'transparent';
        },
        isObject () {
            return this.item && (typeof this.item[this.column.id] === 'object') ? true: false;
        },
        itemID: function () {
            if (this.item && this.item[this.column.id]) {
                if (this.item[this.column.id].id) {
                    return this.item[this.column.id].id;
                } else {
                    return this.item[this.column.id];
                }
            }
            return '#'
        },
        itemTitle: function () {
            return this.item && this.item[this.column.id] ? this.item[this.column.id].name : '';
        }
    },
    methods: {
        onClick () {
            function copyToClipboard(text) {
                var dummy = document.createElement("textarea");
                // to avoid breaking orgain page when copying more words
                // cant copy when adding below this code
                // dummy.style.display = 'none'
                document.body.appendChild(dummy);
                //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
                dummy.value = text;
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            }
            copyToClipboard(this.itemTitle);
            this.$emit('on-event', 'expand', [this.item, this.column])
        }
    }
};
</script>
