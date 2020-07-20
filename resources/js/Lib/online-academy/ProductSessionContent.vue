<template>
  <div class="d-flex flex-column">
    <component
      :is="content.component"
      v-for="(content, index) in contents"
      :key="`${id}-content-${index}`"
      v-bind="content.props"
    />
  </div>
</template>

<script>
export default {
    components: {
        'ProductVideoLink': () => import(/* webpackChunkName: "video-link"*/ './ProductVideoLink.vue'),
        'VfVideoPlayerInput': () => import(/* webpackChunkName: "video-player"*/ './VideoPlayer.vue'),
    },
    props: {
        session: Object,
        id: String,
    },
    computed: {
        contents () {
            const contents = [];
            for (const t in this.session.types) {
                const type = this.session.types[t];
                switch (type.name) {
                case 'vod_link':
                    contents.push({
                        component: 'ProductVideoLink',
                        props: {
                            session: this.session,
                        }
                    });
                    break;
                case 'vod_hls':
                    contents.push({
                        component: 'VfVideoPlayerInput',
                        props: {
                            field: {
                                url: '/vod/' + this.session.id + '/link/' + this.session.data.types.vod_hls.file_id + '/stream',
                                ...this.session.data.types.vod_hls,
                            },
                            id: 'session-' + this.session.id  +'-link-' + this.session.data.types.vod_hls.file_id,
                        }
                    });
                    break;
                case 'livestream':
                    break;
                case 'file_pdf':
                    break;
                }
            }
            return contents;
        }
    },
}
</script>
