<template>
  <div class="d-flex flex-column">
    <v-chip x-small dense tile dark v-for="(flag, i) in flags" :key="`${column.id}-flags-${i}`" :color="flag.color">
        {{ flag.title }}
    </v-chip>
  </div>
</template>

<script>
import { EasyNestedObject } from './../mixins';

export default {
    name: "VfDatatableColumnBitwiseFlags",
    mixins: [EasyNestedObject],
    props: {
        item: Object,
        column: Object,
    },
    computed: {
        flags () {
            const flags = [];
            const val = parseInt(this.getNestedPathValue(
                this.item,
                this.column['nested-path-key'] ? this.column['nested-path-key']:this.column.id
            ))
            this.column.map?.forEach((o) => {
                if ((parseInt(o.id) & val) !== 0) {
                    flags.push(o);
                }
            })

            return flags;
        }
    }
};
</script>
