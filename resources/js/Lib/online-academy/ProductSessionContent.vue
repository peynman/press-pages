<template>
  <div class="d-flex flex-column">
    <component
      :is="content.component"
      v-for="(content, index) in contents"
      :key="`${id}-content-${index}`"
      v-bind="content.props"
      class="mb-2"
    />
    <vf-file-upload-input
      v-if="hasForm"
      :field="fileUpload"
    />
  </div>
</template>

<script>
export default {
    components: {
        'ProductVideoLink': () => import(/* webpackChunkName: "video-link"*/ './ProductVideoLink.vue'),
        'VfVideoPlayerInput': () => import(/* webpackChunkName: "video-player"*/ './VideoPlayer.vue'),
        'VfLivestreamInput': () => import(/* webpackChunkName: "live-window"*/ './LivestreamWindow.vue'),
    },
    props: {
        session: Object,
        id: String,
    },
    computed: {
        fileUpload () {
            return {
                label: 'ارسال تکلیف',
                url: '/api/course-session/' + this.session.id + '/upload-form',
                multipart_params: {}
            }
        },
        hasForm () {
            return this.session.data.types.session?.sendForm;
        },
        contents () {
            const contents = [];
            for (const t in this.session.types) {
                const type = this.session.types[t];
                switch (type.name) {
                case 'vod_link':
                    contents.push({
                        component: 'ProductVideoLink',
                        props: {
                            product: this.session,
                        }
                    });
                    break;
                case 'vod_hls':
                    contents.push({
                        component: 'VfVideoPlayerInput',
                        props: {
                            field: {
                                label: this.session.data.title,
                                url: '/vod/' + this.session.id + '/link/' + this.session.data.types.vod_hls.file_id + '/stream',
                                ...this.session.data.types.vod_hls,
                            },
                            id: 'session-' + this.session.id  +'-link-' + this.session.data.types.vod_hls.file_id,
                        }
                    });
                    break;
                case 'livestream':
                    if (this.session.data.types.livestream?.status === 'live') {
                        contents.push({
                            component: 'VfLivestreamInput',
                            props: {
                                field: {
                                    ...this.session
                                },
                            }
                        });
                    }
                    break;
                case 'file_pdf':
                    break;
                }
            }
            return contents;
        },
    },
}
</script>
