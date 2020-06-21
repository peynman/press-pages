import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings
} from '../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ProductCardSettings extends BaseInputSettings {
    getInputSlots() {
        return []
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            data: {
                options: {
                    type: 'col',
                    formClass: 'ma-0 pa-0',
                },
                fields: {
                    add_to_cart: TextSettings('Add to cart string'),
                    single_session: TextSettings('Single session string'),
                    added_to_cart: TextSettings('Added to cart string'),
                    signup_or_in_string: TextSettings('Signin or Singup string'),
                    access: TextSettings('Access product string'),
                    online_class: TextSettings('Online badge string'),
                    already_purchased: TextSettings('Already purchased string'),
                    period_ended: TextSettings('Period Ended string'),
                    title: TextSettings('Title'),
                    teacher: TextSettings('Teacher'),
                    "time": {
                        "type": "input",
                        "input": "text",
                        "id": "time",
                        "label": "ساعت و زمان کلاس"
                    },
                    "pricing": {
                        "type": "input",
                        "input": "datatable",
                        "id": "pricing",
                        "label": "قیمت مقطوع",
                        "default": [],
                        "props": {
                            "dense": true,
                            "disable-pagination": true,
                            "disable-sort": true,
                            "disable-filtering": true,
                            "hide-default-footer": true,
                            "single-select": true,
                            "show-select": true,
                            "v-on": {}
                        },
                        "hide-search": true,
                        "hide-filters": true,
                        "class": "mt-3",
                        "columns": {
                            "amount": {
                                "__custom_slot": "column",
                                "id": "amount",
                                "label": "قیمت"
                            },
                            "currency": {
                                "__custom_slot": "column",
                                "id": "currency",
                                "label": "واحد پول"
                            },
                            "priority": {
                                "__custom_slot": "column",
                                "id": "priority",
                                "label": "ترتیب"
                            }
                        },
                        "crud": {
                            "create": {
                                "id": "create",
                                "fields": {
                                    "amount": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "amount",
                                        "label": "قیمت"
                                    },
                                    "currency": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "currency",
                                        "label": "واحد پول"
                                    },
                                    "priority": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "priority",
                                        "label": "ترتیب"
                                    }
                                }
                            }
                        }
                    },
                    "price_periodic": {
                        "type": "input",
                        "input": "datatable",
                        "id": "price_periodic",
                        "label": "قیمت اقساط",
                        "default": [],
                        "props": {
                            "dense": true,
                            "disable-sort": true,
                            "disable-pagination": true,
                            "disable-filtering": true,
                            "hide-default-footer": true,
                            "single-select": true,
                            "show-select": true,
                            "v-on": {}
                        },
                        "hide-filters": true,
                        "hide-search": true,
                        "columns": {
                            "amount": {
                                "__custom_slot": "column",
                                "id": "amount",
                                "label": "قیمت"
                            },
                            "currency": {
                                "__custom_slot": "column",
                                "id": "currency",
                                "label": "واحد پول"
                            },
                            "priority": {
                                "__custom_slot": "column",
                                "id": "priority",
                                "label": "ترتیب"
                            }
                        },
                        "crud": {
                            "create": {
                                "id": "create",
                                "fields": {
                                    "amount": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "amount",
                                        "label": "قیمت"
                                    },
                                    "currency": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "currency",
                                        "label": "واحد پول"
                                    },
                                    "priority": {
                                        "type": "input",
                                        "input": "text",
                                        "id": "priority",
                                        "label": "ترتیب"
                                    }
                                }
                            }
                        }
                    },
                }
            },
        }
    }
}
