export const UserCartEditor = {
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        toggleItemInCart(item) {
            const host = this.$store.state.host;
            let found = false;
            if (
                this.user.current_cart &&
                Array.isArray(this.user.current_cart.items)
            ) {
                this.user.current_cart.items.forEach(it => {
                    if (it.id === item.id) {
                        found = true;
                    }
                });
                if (found) {
                    if (typeof this.loading === 'object') {
                        this.loading[item.id] = true;
                    } else {
                        this.loading = true;
                    }
                    host
                        .axios({
                            url: "/api/me/current-cart/remove",
                            method: "POST",
                            headers: host.getWebAuthHeaders({
                                Accept: "application/json",
                                "Content-Type": "applicatinon/json"
                            }),
                            data: {
                                product_id: item.id
                            }
                        })
                        .then(response => {
                            if (typeof this.loading === 'object') {
                                this.loading[item.id] = false;
                            } else {
                                this.loading = false;
                            }
                            const newUser = {
                                ...this.$store.state.user
                            };
                            newUser.current_cart = response.data;
                            this.$store.state.user = newUser;
                        })
                        .catch(error => {
                            if (typeof this.loading === 'object') {
                                this.loading[item.id] = false;
                            } else {
                                this.loading = false;
                            }
                            if (error.response?.data?.message) {
                                host.showSnack(error.response.data.message);
                            } else {
                                host.showSnack(error.message);
                            }
                        });
                }
            }

            if (!found) {
                if (typeof this.loading === 'object') {
                    this.loading[item.id] = true;
                } else {
                    this.loading = true;
                }
                host
                    .axios({
                        url: "/api/me/current-cart/add",
                        method: "POST",
                        headers: host.getWebAuthHeaders({
                            Accept: "application/json",
                            "Content-Type": "applicatinon/json"
                        }),
                        data: {
                            product_id: item.id
                        }
                    })
                    .then(response => {
                        if (typeof this.loading === 'object') {
                            this.loading[item.id] = false;
                        } else {
                            this.loading = false;
                        }
                        const newUser = {
                            ...this.$store.state.user
                        };
                        newUser.current_cart = response.data;
                        this.$store.state.user = newUser;
                    })
                    .catch(error => {
                        if (typeof this.loading === 'object') {
                            this.loading[item.id] = false;
                        } else {
                            this.loading = false;
                        }
                        if (error.response?.data?.message) {
                            host.showSnack(error.response.data.message);
                        } else {
                            host.showSnack(error.message);
                        }
                    });
            }
        },

        getProductPriceString(item) {
            if (item.period_end) {
                return item.data.period_ended?item.data.period_ended : 'پرداخت قسط'
            }

            const price = this.getProductPrice(item)
            if (this.getProductPriceValue(item) && this.getProductPriceValue(item).amount == 0) {
                return 'رایگان'
            }

            return price.takhfif === '' ? price.price : price.takhfif;
        },


        getProductPriceOffString(item) {
            const price = this.getProductPrice(item)
            return price.price
        },

        getProductPrice(item) {
            // add prices from pricing
            const prices = JSON.parse(JSON.stringify(item.data.pricing?item.data.pricing : [])).sort(
                (a, b) => a.priority > b.priority
            );
            const product = {}
            if (prices.length === 1) {
                if (prices[0].amount === 0) {
                    product.price = item.data.free_string ?
                        this.field.data.free_string :
                        "رایگان";
                } else {
                    product.price =
                        prices[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                        " " +
                        this.$store.state.currencies[prices[0].currency];
                }
                product.takhfif = "";
            } else if (prices.length > 1) {
                product.takhfif =
                    prices[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " " +
                    this.$store.state.currencies[prices[0].currency];
                product.price =
                    prices[1].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " " +
                    this.$store.state.currencies[prices[1].currency];
            } else {
                product.price = item.data.free_string ?
                    item.data.free_string :
                    "رایگان";
                product.takhfif = "";
            }

            return product;
        },

        getProductPriceValue(item) {
            const prices = JSON.parse(JSON.stringify(item.data.pricing?item.data.pricing : [])).sort(
                (a, b) => a.priority > b.priority
            );
            return prices[0];
        },

        hasPeriodicPrice(item) {
            return item.data?.price_periodic?.length > 0;
        },

        getProductFirstPeriodPriceValue(item) {
            const prices = item.data?.price_periodic.sort(
                (a, b) => a.priority > b.priority
            );

            return prices[0];
        },

        getProductFirstPeriodPrice(item) {
            const prices = JSON.parse(JSON.stringify(item.data?.price_periodic)).sort(
                (a, b) => a.priority > b.priority
            );

            return prices[0].amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' +
                this.$store.state.currencies[prices[0].currency];
        },

        getProductPeriodicPriceListString(item) {
            const count = item.data?.calucalte_periodic?.period_count;
            const amount = item.data?.calucalte_periodic?.period_amount?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const days = item.data?.calucalte_periodic?.period_duration;
            const currency = this.$store.state.currencies[1]
            return `و سپس ${count} قسط ${amount} ${currency} هر ${days} روز`
        }
    }
};
