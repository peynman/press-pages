module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        "indent": 2,
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error',
        'vue/valid-v-slot': 0,
        'vue/v-slot-style': 0,
        'vue/no-deprecated-v-bind-sync': 0,
    },
}
