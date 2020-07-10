import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    TextSettings,
    CheckboxSettings
} from '../../../vuetify-formjson/Fields/FormJSONBuilder/settings/comon'


export default class ChartSettings extends BaseInputSettings {
    getInputSlots() {
        return [
            {
                id: 'filters',
                title: 'Filters'
            }
        ]
    }

    getInputEventGroupsList() {
        return []
    }

    getInputProperties() {
        return {
            ...CommonInputEssentials,
            subtitle: TextSettings('Subtitle'),
            report_url: TextSettings('Report URL'),
            report_name: TextSettings('Report Name'),
            report_label_key: TextSettings('Label key for mapping labels (id)'),
            report_item_key: TextSettings('Report key for mapping labels (domain,role,...)'),
            report_groups: TextSettings('Group datasets by keys'),
            default_duration: TextSettings('Default duration', 'one of (1m, 5m, 10m, 30m, 1h, 3h, 6h, 12h, 1d, 2d, 7d, 15d, 30d, 90d, 180d, 1y, 2y'),
            default_window: TextSettings('Default window', 'one of (1s, 10s, 30s, 1m, 5m, 10m, 15m, 30m, 1h, 3h, 6h, 12h, 1d, 7d, 30d'),
            is_windowed: CheckboxSettings('is Windowed'),
            is_x_time: CheckboxSettings('is X axis time series'),
            report_type: {
                type: 'input',
                input: 'select',
                label: 'Report type',
                multiple: false,
                objects: [
                    {
                        id: 'pie',
                        title: 'Pie'
                    },
                    {
                        id: 'bar',
                        title: 'Bar'
                    },
                    {
                        id: 'line',
                        title: 'Line'
                    },
                    {
                        id: 'scatter',
                        title: 'Scatter'
                    },
                ],
                props: {
                    multiple: false,
                }
            },
            decorator: {
                options: {
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    label: {
                        type: 'input',
                        input: 'text',
                        label: 'Decorator Label',
                    },
                    labels: {
                        type: 'input',
                        input: 'text',
                        label: 'Decorator Property Names',
                        props: {
                            hint: 'comma separated property names'
                        }
                    },
                }
            },
            group: {
                type: 'input',
                input: 'text',
                label: 'Query server group columns',
                props: {
                    class: 'col-12, pa-0'
                },
            },
            func: {
                type: 'input',
                input: 'text',
                label: 'Query server function name',
                props: {
                    class: 'col-12, pa-0'
                },
            },
            query_filters: {
                type: 'input',
                input: 'datatable',
                label: 'Query servier filters',
                columns: [
                    {
                        id: 'filter',
                        title: 'Filter',
                    },
                    {
                        id: 'value',
                        title: 'Value',
                    },
                ],
                props: {
                    'disable-pagination': true,
                    dense: true,
                    'show-select': true,
                },
                'hide-search': true,
                crud: {
                    create: {
                        fields: {
                            filter: {
                                type: 'input',
                                input: 'text',
                                label: 'Filter tag'
                            },
                            value: {
                                type: 'input',
                                input: 'text',
                                label: 'Value of tag',
                            }
                        }
                    }
                },
            }
        }
    }
}
