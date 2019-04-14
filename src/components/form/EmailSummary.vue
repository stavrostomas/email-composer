<template>
  <!-- This component gets data from the central store state and renders the summary of the email -->
  <v-layout fill-height row align-center>
    <section
      v-if="getEmailData.to.length > 0 && getEmailData.subject.length > 0"
      class="email-summary pa-4"
    >
      <header class="text-xs-center pb-4 mb-4">
        <v-icon dark class="ma-2 pa-3">
          done
        </v-icon>
        <p class="title mt-2">Your email has been sent</p>
      </header>
      <body>
        <!-- Subject -->
        <div
          v-show="getEmailData.subject.length > 0"
          class="title font-weight-bold mb-2"
        >
          {{ getEmailData.subject }}
        </div>

        <!-- to -->
        <div v-show="getEmailData.to.length > 0" class="recepients">
          <span class="greyed-out body-1">to</span>
          <span> {{ getEmailData.to }}</span>
        </div>

        <!-- CC -->
        <div v-show="getEmailData.cc.length > 0" class="recepients">
          <span class="greyed-out body-1">cc</span>
          <span> {{ getEmailData.cc }}</span>
        </div>

        <!-- Bcc -->
        <div v-show="getEmailData.bcc.length > 0" class="recepients">
          <span class="greyed-out body-1">bcc</span>
          <span> {{ getEmailData.bcc }}</span>
        </div>

        <!-- Message -->
        <div
          v-show="getEmailData.message.length > 0"
          class="email-message my-2"
        >
          {{ getEmailData.message }}
        </div>

        <!-- Attachments -->
        <attachments-previews
          class="mt-3"
          :disable-delete="true"
          :header-visible="false"
        />
      </body>
    </section>

    <!-- Error Message -->
    <section v-else class="error-message text-xs-center pa-4">
      <header class="pb-3">
        <v-icon class="ma-2">error</v-icon>
      </header>
      <body class="pt-4">
        <p class="headline">
          You seem to be lost, click
          <router-link tag="a" to="/">here</router-link>
          to go back to the homepage
        </p>
      </body>
    </section>
  </v-layout>
</template>

<script>
import AttachmentsPreviews from "@/components/form/AttachmentsPreviews";
import { mapGetters } from "vuex";

export default {
  components: {
    AttachmentsPreviews
  },
  computed: {
    ...mapGetters(["getEmailData"])
  }
};
</script>

<style scoped lang="scss">
// Import global vars
@import "@/assets/styles/_vars.scss";

.email-summary,
.error-message {
  width: 100%;
  max-width: 650px;
  overflow: hidden;
  border-radius: 5px;
  margin: 20px auto;
  background: map-get($colors, white);
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
  header {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    i {
      background: map-get($colors, green);
      font-size: 60px; //for older browsers
      font-size: calc(40px + 2vw);
      border-radius: 50%;
    }
  }
}

.recepients {
  span:first-child {
    display: inline-block;
    width: 30px;
  }
  span:last-child {
    color: map-get($colors, azzuro);
  }
}

.email-message {
  white-space: pre-line;
}

.error-message {
  i {
    color: red;
    background-color: map-get($colors, white) !important;
  }
}

.greyed-out {
  color: map-get($colors, darkgray);
}
</style>
