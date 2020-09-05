<template>
<v-text-field
    v-model="maskedModel"
    :label="field.label"
    :class="`vf-input ${field.class ? field.class:''}`"
    v-bind="fieldProps"
    hide-details="auto"
    :rules="rules"
    @paste="onPaste()"
    @keyup.native="updateInput($event)" v-on="eventHandlers"
>
</v-text-field>
</template>

<script>
function ConvertDigits(input, source, target) {
    var systems = {
        farsi: 1776,
        arabic: 48, english: 48, tamil: 3046, kannada: 3302, telugu: 3174, hindi: 2406,
        malayalam: 3430, oriya: 2918, gurmukhi: 2662, nagari: 2534, gujarati: 2790,
    },
    output = [], offset = 0, zero = 0, nine = 0, char = 0;
    source = source.toLowerCase();
    target = target.toLowerCase();

    if (!(source in systems && target in systems) || input == null || typeof input == "undefined" || typeof input == "object") {
        return input;
    }

    input = input.toString();
    offset = systems[target] - systems[source];
    zero = systems[source];
    nine = systems[source] + 9;
    const tzero = systems[target];
    const tnine = systems[target] + 9;
    for (var i = 0 ; i < input.length; i++) {
        var char = input.charCodeAt(i);
        if (char >= zero && char <= nine) {
            output.push(String.fromCharCode(char + offset));
        } else {
            if ((char >= tzero && char <= tnine) || char === tzero - 2) {
                output.push(input[i]);
            }
        }
    }
    return parseFloat(output.join(""));
}

import BaseComponent from './mixins'
import {
    VTextField
} from 'vuetify/lib'
export default {
    components: {
        VTextField
    },
    mixins: [BaseComponent],
    name: 'vf-text-input',
    props: {
        id: String,
        field: Object,
        value: [Object, String, Array, Number],
    },
    data: (vm) => ({
        maskedModel: vm.value
    }),
    methods: {
        updateInput: function (ev) {
            this.devalue = this.maskedModel;

            if (this.field.validations) {
                if (this.field.validations.mask === 'currency') {
                    const v = ConvertDigits(this.maskedModel, 'farsi', 'english');
                    if (!isNaN(v)) {
                        this.maskedModel = v.toLocaleString('fa')
                        if (this.field.validations.removeMask) {
                            this.devalue = v;
                        }
                    } else {
                        this.maskedModel = ''
                        this.devalue = ''
                    }
                }
            }
            if (!ev ||
                !this.field.updateKeyCodes ||
                this.field.updateKeyCodes.length === 0 ||
                this.field.updateKeyCodes.includes(ev.keyCode)
            ) { // update input on tab/enter pressed
                this.$emit('input', this.devalue)
            }
        },
        onPaste() {
            this.updateInput(null)
        },
    },
    watch: {
        value () {
            this.maskedModel = this.value;
        }
    }
}
</script>
