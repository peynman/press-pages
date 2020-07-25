<template>
  <div :class="`vf-input ${field.class ? field.class : 'd-flex flex-column mt-3'}`">
    <div
      :id="`${id}-container`"
      class="d-flex flex-row justify-space-between"
    >
      <label>{{ field.label }}</label>
      <v-list-item-subtitle v-if="field.hint">
        {{ field.hint }}
      </v-list-item-subtitle>
      <div>
        <v-btn
          :id="`${id}-browse`"
          ref="browse"
          text
          small
          color="primary"
          href="javascript:;"
          :disabled="loading"
        >
          انتخاب فایل
        </v-btn>
        <v-btn
          text
          small
          color="success"
          :disabled="loading"
          @click="startUpload()"
        >
          ارسال فایل ها
        </v-btn>
        <v-btn
          text
          small
          color="warning"
          :disabled="!loading"
          @click="pauseUpload()"
        >
          توقف ارسال
        </v-btn>
      </div>
    </div>
    <v-list dense>
      <v-list-item
        v-for="(file, index) in files"
        :key="`${id}-file-${index}`"
      >
        <v-list-item-avatar size="80">
          <v-progress-circular
            :value="file.percent"
            size="70"
            class="ma-auto"
          >
            <div class="d-flex flex-column justify-center alight-center">
              <v-btn
                v-if="file.status === 2"
                icon
                small
                :loading="true"
              />
              <v-icon
                v-if="file.status === 5"
                color="success"
              >
                mdi-check-decagram
              </v-icon>
              %{{ file.percent }}
            </div>
          </v-progress-circular>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ file.name }}</v-list-item-title>
          <v-list-item-subtitle>
            <strong>Type</strong>
            {{ file.type }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <strong>Size</strong>
            {{ file.size }} bytes
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="files.length === 0">
        <v-list-item-title>فایلی وجود ندرد</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import BaseComponent from "./mixins";
import plupload from "plupload/js/plupload.dev";

export default {
    name: "VfFileUploadInput",
    components: {},
    mixins: [BaseComponent],
    props: {
        id: String,
        field: Object,
        value: [Object, String, Array, Number]
    },
    data: () => ({
        uploader: null,
        files: [],
        loading: false,
    }),
    mounted() {
        const host = this.$store.state.host;
        const opt = {
            url: this.field.url ? this.field.url : "/api/file-uploads",
            method: "POST",
            runtime: "html5",
            headers: host.getWebAuthHeaders({}),
            browse_button: window.document.getElementById(`${this.id}-browse`),
            container: window.document.getElementById(`${this.id}-container`),
            chunk_size: this.field.chunk_size ? this.field.chunk_size : "1mb",
            max_retries: this.field.max_retries ? this.field.max_retries : 0,
            filters: {
                mime_types: this.field.filters
                    ? this.field.filters
                    : [{ title: "Image", extensions: "jpg,png,jpeg" }],
                prevent_duplicates: this.field.prevent_duplicates
                    ? this.field.prevent_duplicates
                    : false,
                max_file_size: this.field.max_file_size
            },
            init: {
                PostInit: uploader => {
                    this.$emit("init", uploader);
                },
                FilesAdded: (up, files) => {
                    if (this.field.singleFile) {
                        this.files = files;
                    } else {
                        this.files.push(...files);
                    }
                    this.$emit("added", up, files);
                },
                UploadProgress: (up, file) => {
                    this.$emit("progress", up, file);
                },
                FileUploaded: (up, file, result) => {
                    this.$emit("uploaded", up, file, result);
                },
                BeforeUpload: (up, file) => {
                    this.uploader.settings.multipart_params = this.field.multipart_params;
                    this.loading = true;
                },
                UploadComplete: (up, files) => {
                    this.loading = false;
                    this.$emit("finished", up, files);
                },
                Error: (up, err) => {
                    this.loading = false;
                    this.uploader.stop();
                    host.showSnack(err.message);
                    if (err.response) {
                        try {
                            const json = JSON.parse(err.response);
                            if (json && json.errors) {
                                for (const err in json.errors) {
                                    json.errors[err].forEach(e => {
                                        host.showSnack(e);
                                    });
                                }
                            }
                        } catch (e) {}
                    }
                    this.$emit("error", up, err);
                }
            }
        };
        this.uploader = new plupload.Uploader(opt);
        this.uploader.init();
    },
    methods: {
        startUpload() {
            this.uploader.files.forEach((f) => {
                if (f.status === plupload.FAILED) {
                    f.status = plupload.STOPPED;
                }
            })
            this.uploader.start();
        },
        pauseUpload() {
            this.uploader.stop();
        }
    }
};
</script>
