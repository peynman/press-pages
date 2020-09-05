<template>
  <component
    :is="getRootComponent()"
    v-show="!options || options.hidden !== true"
    :class="`${options && options.formClass ? options.formClass : ''}`"
    v-bind="getRootComponentProps()"
  >
    <component
      :is="options.wrap.component"
      v-if="options && options.wrap && options.wrap.enabled !== false && options.wrap.inside"
      v-bind="wrapProps"
      :class="options.wrap.class"
    >
      <component
        :is="options.wrap.inside.component"
        v-for="(field, key) in visibleFields"
        :key="`${id}-properties-${key}`"
        :class="options.wrap.inside.class"
        v-bind="options.wrap.inside.props"
      >
        <component
          :is="getComponentForField(field)"
          :ref="key"
          v-model="devalue[key]"
          v-bind="getComponentPropsForField(field, key)"
        />
      </component>
    </component>
    <component
      :is="getComponentForField(field)"
      v-for="(field, key) in visibleFields"
      v-else
      :ref="key"
      :key="`${id}-properties-${key}`"
      v-model="devalue[key]"
      v-bind="getComponentPropsForField(field, key)"
    />
  </component>
</template>

<script>
import {
    VRow,
    VCol,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VList,
    VListItem,
    VListItemTitle,
    VListItemContent,
    VCarousel,
    VCarouselItem,
    VSlideGroup,
    VSlideItem
} from "vuetify/lib";

export default {
    name: "VfFieldsRenderer",
    components: {
        VRow,
        VCol,
        VCard,
        VCardActions,
        VCardText,
        VCardTitle,
        VList,
        VListItem,
        VListItemTitle,
        VListItemContent,
        VCarousel,
        VCarouselItem,
        VSlideGroup,
        VSlideItem
    },
    props: {
        id: String,
        fields: [Object, Array],
        value: {
            type: [Object, Array],
            default: () => ({})
        },
        options: Object,
        onUpdated: Function
    },
    data() {
        let wrapProps =
      this.options && this.options.wrap && this.options.wrap.props
          ? this.options.wrap.props
          : {};
        const wrapInnerProps = {};
        if (typeof wrapProps === "string") {
            try {
                wrapProps = JSON.parse(wrapProps);
            } catch (e) {
                wrapProps = {};
            }
        }

        return {
            devalue: this.value ? this.value : {},
            wrapProps,
            wrapInnerProps
        };
    },
    computed: {
        visibleFields() {
            const filter = function(obj, predicate) {
                const result = {};
                let key;
                for (key in obj) {
                    if (obj[key] && !predicate(obj[key])) {
                        result[key] = obj[key];
                    }
                }
                return result;
            };

            return filter(this.fields, (i) => {
                if (this.$store.state.user?.permissions && i.user_permission) {
                    if (!this.$store.state.user.permissions.includes(i.user_permission)) {
                        return true;
                    }
                }
                return i.hidden === true
            });
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler: function() {
                if (this.onUpdated) {
                    this.onUpdated(this.devalue);
                }
                if (
                    this.options &&
          this.options["v-on"] &&
          this.options["v-on"].input
                ) {
                    this.options["v-on"].input(this.devalue);
                }
                this.$emit("input", this.devalue);
            }
        },
        value: {
            deep: true,
            handler() {
                if (this.value) {
                    this.devalue = this.value;
                } else {
                    this.devalue = {};
                }
            }
        }
    },
    methods: {
        getRootComponent() {
            if (this.options) {
                switch (this.options.type) {
                case "col":
                    return VCol;
                case "component":
                    return this.options.component;
                }
            }
            return VRow;
        },
        getRootComponentProps() {
            if (this.options) {
                if (this.options.props) {
                    return this.options.props;
                }
            }
            return {};
        },
        isVisibleField(field) {
            return field.visible !== false;
        },
        getComponentPropsForField(field, key) {
            if (!field.type || field.type === "row" || field.type === "col") {
                return {
                    fields: field.fields,
                    options: {
                        type: field.type ? field.type : "row",
                        props: field.props,
                        ...field.options
                    }
                };
            }

            const props = {
                field: { ...field },
                id: `${this.id}-field-${key}`
            };
            if (this.options) {
                if (this.options.class) {
                    props.field.class =
            this.options.class +
            (props.field.class ? " " + props.field.class : "");
                }
                if (this.options.props) {
                    props.field.props = {
                        ...this.options.props,
                        ...(props.field.props ? props.field.props : {})
                    };
                }
            }

            return props;
        },
        getComponentForField(field) {
            if (field.type === "input" && field.input) {
                return `vf-${field.input}-input`;
            } else if (field.type === "group" && field.group) {
                return `vf-group-${field.group}`;
            } else if (field.type === "component") {
                return field.component;
            } else if (field.fields) {
                return "vf-fields-renderer";
            }
        }
    }
};
</script>
