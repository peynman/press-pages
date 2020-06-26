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
                    this.loading = true;
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
                            this.loading = false;
                            const newUser = {
                                ...this.$store.state.user
                            };
                            newUser.current_cart = response.data;
                            this.$store.state.user = newUser;
                        })
                        .catch(error => {
                            this.loading = false;
                            if (error.response?.data?.message) {
                                host.showSnack(error.response.data.message);
                            } else {
                                host.showSnack(error.message);
                            }
                        });
                }
            }

            if (!found) {
                this.loading = true;
                console.log('add', item, item.id);
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
                        this.loading = false;
                        const newUser = {
                            ...this.$store.state.user
                        };
                        newUser.current_cart = response.data;
                        this.$store.state.user = newUser;
                    })
                    .catch(error => {
                        this.loading = false;
                        if (error.response?.data?.message) {
                            host.showSnack(error.response.data.message);
                        } else {
                            host.showSnack(error.message);
                        }
                    });
            }
        },

        getProductPriceString(item) {
            if (item.available) {
                return item.data.already_purchased ? item.data.already_purchased : 'در دسترس'
            }
            if (item.period_end) {
                return item.data.period_ended ? item.data.period_ended : 'پرداخت اقساط'
            }

            const price = this.getProductPrice(item)
            return price.takhfif === '' ? price.price : price.takhfif;
        },


        getProductPriceOffString(item) {
            const price = this.getProductPrice(item)
            return price.price
        },

        getProductPrice(item) {
            // add prices from pricing
            const prices = JSON.parse(JSON.stringify(item.data.pricing ? item.data.pricing : [])).sort(
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
        }
    }
};
