<template>
    <v-container fill-height fluid>
        <v-row
                align="center"
                justify="center"
                class="grey lighten-5"
        >
            <v-col cols="12" sm="10" md="5">
                <v-col class="text-center title mb-2">{{ title }}</v-col>
                <v-card class="elevation-1">
                    <v-card-text>
                        <v-row
                                align="center"
                                justify="center"
                        >
                            <v-col
                                    cols="12"
                                    sm="12"
                                    md="10"
                            >
                                <lpd-crud-form v-bind="formProps" @on-success="onSuccess" @on-failed="onFailed"/>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions
                            class="d-flex flex-column"
                    >
                        <v-list
                        >
                            <v-subheader>Social Media Sign In</v-subheader>
                            <v-list-item>
                                <v-btn
                                        outlined
                                        block
                                        dark
                                        tile
                                        color="blue darken-1"
                                >
                                    Signin with Google
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn
                                        outlined
                                        block
                                        dark
                                        tile
                                        color="blue darken-1"
                                >
                                    Signin with Google
                                </v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn
                                        outlined
                                        block
                                        dark
                                        tile
                                        color="blue darken-1"
                                >
                                    Signin with Google
                                </v-btn>
                            </v-list-item>
                        </v-list>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-card-actions
                            class="d-flex justify-center"
                    >
                        <v-btn
                                text
                                class="flex-grow-1"
                        >
                            Reset Password

                        </v-btn>
                        <v-btn
                                text
                                class="flex-grow-1"
                        >
                            Sign Up
                        </v-btn>

                    </v-card-actions>
                </v-card>
                <v-col class="text-center font-weight-light mt-2">Copyright Larapress</v-col>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "lpp-template-signin",
        props: {
            title: {
                type: String,
                required: false,
            },
            fields: {
                type: Array,
                required: true,
            },
            submit: {
                type: Object,
                required: true,
            }
        },
        computed: {
            formProps: function() {
                return {
                    dense: true,
                    action: this.submit.action,
                    method: this.submit.method,
                    actions: [
                        {
                            label: this.submit.label,
                            class: '',
                            name: 'signin',
                            props: {
                                color: 'primary',
                                block: true,
                            }
                        }
                    ],
                    fields: this.fields,
                }
            }
        },
        methods: {
            onSuccess: function(response) {
                window.location.href = this.submit.redirect;
            },
            onFailed: function(response) {
            },
        }
    }
</script>

<style scoped>

</style>