<template>
  <div id="image-uploader-container">
    <!--Upload Button-->
    <v-btn
      fab
      flat
      outline
      small
      color="#e0e0e0"
      class="ma-0"
      @click="$refs.filesInput.click()"
    >
      <v-icon color="#939598">attach_file</v-icon>
    </v-btn>

    <!-- Input File, gets triggered when user clicks on the icon-->
    <input
      multiple
      accept="image/jpg,image/png"
      id="image-files"
      ref="filesInput"
      style="display:none"
      type="file"
      v-on:change="previewFiles()"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getEmailData"])
  },
  methods: {
    previewFiles() {
      let files = this.$refs.filesInput.files;
      var images = this.getEmailData.attachments;

      function readAndPreview(file) {
        var reader = new FileReader();

        reader.addEventListener(
          "load",
          function() {
            images.push(this.result);
          },
          false
        );

        // Takes file input and returns a base64 encoded string of data
        reader.readAsDataURL(file);
      }

      if (files) {
        [].forEach.call(files, readAndPreview);
      }
    }
  }
};
</script>
