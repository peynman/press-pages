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
                        component: 'vf-product-video-link-input',
                        props: {
                            field: {
                                label: this.session.data.title,
                                url: this.session.data.types?.vod_link.url,
                                width: this.session.data.types?.vod_link.width,
                                height: this.session.data.types?.vod_link.height,
                                isYoutube: this.session.data.types?.vod_link.tag !== 'kavimo',
                            },
                            id: 'session-' + this.session.id  +'-v-link',
                        }
                    });
                    break;
                case 'vod_hls':
                    contents.push({
                        component: 'vf-video-player-input',
                        props: {
                            field: {
                                label: this.session.data.title,
                                url: '/vod/' + this.session.id + '/link/' + this.session.data.types.vod_hls.file_id + '/stream',
                                ...this.session.data.types.vod_hls,
                            },
                            id: 'session-' + this.session.id  +'-hls-' + this.session.data.types.vod_hls.file_id,
                        }
                    });
                    break;
                case 'livestream':
                    if (this.session.data.types?.livestream?.status === 'live') {
                        contents.push({
                            component: 'vf-livesstream-input',
                            props: {
                                field: {
                                    ...this.session,
                                    ...this.session.data.types?.livestream,
                                    extras : this.session.children.filter(c => c.types.filter((t) => t.name === 'ac_meeting').length > 0).map((c) => ({
                                        ...c,
                                        ...c.data.types.ac_meeting,
                                    }))
                                },
                            }
                        });
                    }
                    break;
                case 'ac_meeting':
                    if (this.session.data.types?.ac_meeting?.status === 'live') {
                        contents.push({
                            component: 'vf-ac-session-link-input',
                            props: {
                                field: {
                                    label: this.session.data.title,
                                    ...this.session,
                                    ac_session_id: this.session.id,
                                    ...this.session.data.types?.ac_meeting,
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
