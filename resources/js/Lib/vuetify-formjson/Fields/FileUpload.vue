<template>
  <div :class="`vf-input ${field.class ? field.class : 'd-flex flex-column mt-3'}`">
    <div class="d-flex flex-row justify-space-between" :id="`${id}-container`">
      <label>{{ field.label }}</label>
      <div>
        <v-btn
          text
          small
          :id="`${id}-browse`"
          ref="browse"
          color="primary"
          href="javascript:;"
        >Browse</v-btn>
        <v-btn text small color="success" @click="startUpload()">Start</v-btn>
        <v-btn text small color="warning" @click="pauseUpload()">Pause</v-btn>
      </div>
    </div>
    <v-list dense>
      <v-list-item v-for="(file, index) in files" :key="`${id}-file-${index}`">
        <v-list-item-avatar size="80">
          <v-progress-circular :value="file.percent" size="70" class="ma-auto">%{{ file.percent }}</v-progress-circular>
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
  components: {},
  mixins: [BaseComponent],
  name: "vf-file-upload-input",
  props: {
    id: String,
    field: Object,
    value: [Object, String, Array, Number]
  },
  data: () => ({
    uploader: null,
    files: []
  }),
  methods: {
    startUpload() {
      console.log("upload");
      this.uploader.start();
    },
    pauseUpload() {
      this.uploader.stop();
    }
  },
  mounted() {
    const host = this.$store.state.host;
    const opt = {
      url: "/api/file-uploads",
      method: "POST",
      runtime: "html5",
      headers: host.getWebAuthHeaders({}),
      browse_button: window.document.getElementById(`${this.id}-browse`),
      container: window.document.getElementById(`${this.id}-container`),
      filters: {
        mime_types: this.field.filetrs
          ? this.field.filters
          : [{ title: "Image", extenstions: "jpg,png,jpeg" }],
          prevent_duplicates: true,
          max_file_size: this.field.max_file_size,
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
        console.log(file);
          this.$emit("progress", up, file);
        },
        FileUploaded: (up, file, result) => {
          this.$emit("uploaded", up, file, result);
        },
        BeforeUpload: (up, file) => {
          this.uploader.settings.multipart_params = this.field.multipart_params;
          console.log('multipart', this.uploader.settings)
        },
        UploadComplete: (up, files) => {
            console.log(files);
          this.$emit("finished", up, files);
        },
        Error: (up, err) => {
            console.log('error', err);
          host.showSnack(err);
          this.$emit("error", up, err);
        }
      }
    };
    this.uploader = new plupload.Uploader(opt);
    this.uploader.init();
  }
};
</script>
