<template>
  <!--Images Preview Container-->
  <div
    v-show="getEmailData.attachments.length > 0"
    class="images-preview"
    ref="preview"
  >
    <!-- Single Image Container -->
    <h3 v-show="headerVisible" class="mx-0">Attached Files</h3>

    <div
      v-show="!disableDelete"
      class="preview"
      v-for="(image, key) in getEmailData.attachments"
      :key="image.id"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      @click="deleteAttachment(key)"
    ></div>

    <div
      v-show="disableDelete"
      class="preview delete-disabled"
      v-for="image in getEmailData.attachments"
      :key="image.id"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    headerVisible: {
      type: Boolean,
      default: true
    },
    disableDelete: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["getEmailData"])
  },
  methods: {
    ...mapActions(["deleteAttachment"])
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/_vars.scss";

.images-preview {
  width: 100%;
  max-width: 100%;
  .preview {
    position: relative;
    left: -10px;
    background: map-get($colors, lightgray);
    margin: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    &:before,
    &:after {
      transition: all 0.3s ease-out;
    }
    //Shows the background
    &:before {
      @media screen and (min-width: map-get($brk, s)) {
        opacity: 0;
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        content: "";
      }
    }
    //Shows the bin
    &:after {
      opacity: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      font-family: "Material Icons" !important;
      font-size: 16px;
      background-color: map-get($colors, darkgray);
      color: map-get($colors, white);
      content: "\e872";
      border-radius: 50%;
      width: 30px;
      height: 30px;
      right: 5px;
      top: 5px;

      @media screen and (min-width: map-get($brk, s)) {
        opacity: 0;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        font-size: 20px;
        width: 40px;
        height: 40px;
      }
    }
    &:hover {
      &:before,
      &:after {
        opacity: 1;
      }
    }
  }
}

.delete-disabled {
  &:after,
  &:before {
    display: none !important;
  }
  cursor: default !important;
}

.preview {
  background-size: cover;
  display: inline-block;
  width: 100px;
  height: 100px;
}
</style>
