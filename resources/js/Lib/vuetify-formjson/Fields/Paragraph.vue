<template>
<div :class="`vf-input d-flex flex-column flex-grow-1 ${field.class ? field.class : ''}`">
    <label v-if="mode !== 'view'">{{ field.label }}</label>
    <div v-show="!field.readonly">
        <v-btn fab small icon @click="() => { mode = mode === 'editor' ? 'view' : 'editor'; toggleVirtualMathKeyboard(dialog && mode === 'editor') }">
            <v-icon small>{{ modeIcon }}</v-icon>
        </v-btn>
    </div>
    <div v-show="mode === 'view' || field.readonly" ref="editorView" class="fill-height" style="width: 100%;"></div>
    <v-card v-show="mode === 'editor' && !field.readonly" style="position: relative; width: 100%; min-height: 100px; overflow: scroll;" class="fill-hight mx-2">
        <div class="" :style="`position: absolute; width: 100%; left: 0; right: 0; top: 0; bottom: 0; ${field.height ? 'height: ' + field.height : ''}`" ref="editorCode">
        </div>
    </v-card>
</div>
</template>

<script>
import BaseComponent from './mixins'

import markdownit from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

import {
    VBtn,
    VIcon,
    VCard
} from 'vuetify/lib'
export default {
    components: {
        VBtn,
        VIcon,
        VCard
    },
    mixins: [BaseComponent],
    name: 'vf-paragraph-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: String,
            default: () => ''
        }
    },
    data: (vm) => ({
        dialog: false,
        markdownEditor: null,
        mathfieldEditor: null,
        mathKeyboardVisible: false,
        aceEditor: null,
        aceUpdate: false, // break devalue update <=> ace text update loop
        mode: vm.field.readonly ? 'view' : 'editor'
    }),
    computed: {
        modeIcon() {
            return this.mode === 'editor' ? 'mdi-code-braces' : 'mdi-eye'
        }
    },
    methods: {
        toggleVirtualMathKeyboard(to) {
            if (this.mathfieldEditor) {
                if (this.mathfieldEditor.virtualKeyboardVisible !== to) {
                    this.mathfieldEditor.$perform(['toggleVirtualKeyboard'])
                }
                this.mathKeyboardVisible = this.mathfieldEditor.virtualKeyboardVisible
            }
        },
        updateMarkdownText() {
            const markdownHtml = this.markdownEditor.render(this.devalue)
            let child = this.$refs.editorView.lastElementChild
            while (child) {
                this.$refs.editorView.removeChild(child)
                child = this.$refs.editorView.lastElementChild
            }
            this.$refs.editorView.insertAdjacentHTML('beforeend', markdownHtml)

            if (this.aceEditor) {
                if (!this.aceUpdate) {
                    this.aceEditor.session.setValue(this.devalue)
                } else {
                    this.aceUpdate = false
                }
            }
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler() {
                this.updateMarkdownText()
            }
        }
    },
    mounted() {
        // eslint-disable-next-line new-cap
        this.markdownEditor = new markdownit((this.field.markdownProps ? this.field.markdownProps : {}))
        this.markdownEditor.use(markdownItAttrs, {
            // optional, these are default options
            leftDelimiter: '{',
            rightDelimiter: '}',
            allowedAttributes: [] // empty array = all attributes are allowed
        });
        // init ace editor before calling update
        this.updateMarkdownText()

        if (!this.field.readonly) {
            import( /* webpackChunkName: "ace-editor"*/ './MarkdownInput/AceEditor/ace').then((ACE) => {
                this.aceEditor = ACE.edit(this.$refs.editorCode, {
                    selectionStyle: 'text',
                    maxLines: Infinity
                })
                this.aceEditor.session.on('change', (delta) => {
                    this.aceUpdate = true
                    this.$nextTick(() => {
                        this.devalue = this.aceEditor.session.getValue()
                        this.$emit('input', this.devalue)
                    })
                })
                this.aceEditor.session.setValue(this.devalue)
                switch (this.field.mode) {
                    case 'js':
                    case 'javascript':
                        import( /* webpackChunkName: "ace-editor"*/ './MarkdownInput/AceEditor/mode-javascript').then((mode) => {
                            this.aceEditor.session.setMode(new mode.Mode());
                        });
                    break;
                    case 'markdown':
                    default:
                        import( /* webpackChunkName: "ace-editor"*/ './MarkdownInput/AceEditor/mode-markdown').then((mode) => {
                            this.aceEditor.session.setMode(new mode.Mode());
                        });
                    break;
                }
                import( /* webpackChunkName: "ace-editor"*/ './MarkdownInput/AceEditor/theme-eclipse').then((theme) => {
                    this.aceEditor.session.setTheme(theme);
                });
            });
        }
    }
}
</script>
