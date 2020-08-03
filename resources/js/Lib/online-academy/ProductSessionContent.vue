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
            const getSessionContent = function(session) {
                const contents = [];
                for (const t in session.types) {
                    const type = session.types[t];
                    switch (type.name) {
                    case 'vod_link':
                        contents.push({
                            component: 'vf-product-video-link-input',
                            props: {
                                field: {
                                    label: session.data.title,
                                    url: session.data.types?.vod_link.url,
                                    width: session.data.types?.vod_link.width,
                                    height: session.data.types?.vod_link.height,
                                    isYoutube: session.data.types?.vod_link.tag !== 'kavimo',
                                },
                                id: 'session-' + session.id  +'-v-link',
                            }
                        });
                        break;
                    case 'vod_hls':
                        contents.push({
                            component: 'vf-video-player-input',
                            props: {
                                field: {
                                    label: session.data.title,
                                    url: '/vod/' + session.id + '/link/' + session.data.types.vod_hls.file_id + '/stream',
                                    ...session.data.types.vod_hls,
                                },
                                id: 'session-' + session.id  +'-hls-' + session.data.types.vod_hls.file_id,
                            }
                        });
                        break;
                    case 'livestream':
                        if (session.data.types?.livestream?.status === 'live') {
                            contents.push({
                                component: 'vf-livesstream-input',
                                props: {
                                    field: {
                                        ...session,
                                        ...session.data.types?.livestream,
                                    },
                                }
                            });
                        }
                        break;
                    case 'ac_meeting':
                        if (session.data.types?.ac_meeting?.status === 'live') {
                            contents.push({
                                component: 'vf-ac-session-link-input',
                                props: {
                                    field: {
                                        label: session.data.title,
                                        ...session,
                                        ac_session_id: session.id,
                                        ...session.data.types?.ac_meeting,
                                    },
                                }
                            });
                        }
                        break;
                    case 'file_pdf':
                        contents.push({
                            component: 'vf-product-download-link-input',
                            props: {
                                field: {
                                    label: 'جزوه',
                                    ...session,
                                    session_id: session.id,
                                    ...session.data.types?.file_pdf,
                                    icon: 'mdi-file-document-edit',
                                    file_type: session.data.types?.file_pdf?.linked_file ? 'url' : 'pdf',
                                },
                            }
                        })
                        break;
                    }
                }
                return contents;
            }
            const contents = getSessionContent(this.session);
            if (this.session.children) {
                this.session.children.forEach((child) => {
                    contents.push(...getSessionContent(child))
                });
            }
            return contents;
        },
    },
}
</script>
