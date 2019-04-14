<template>
  <v-layout fill-height row align-center>
    <!-- Form Container -->
    <section class="form-container">
      <header class="pa-4 mb-2">
        Send E-mail
      </header>

      <!-- Begin Form -->
      <v-form class="pa-4" ref="form" v-model="valid">
        <!-- To -->
        <v-text-field
          label="To"
          v-model="getEmailData.to"
          :rules="emailRules"
          required
          outline
        />

        <!-- CC -->
        <v-text-field
          label="CC"
          v-model="getEmailData.cc"
          :rules="ccAndBccRules"
          outline
        />

        <!-- BCC -->
        <v-text-field
          label="BCC"
          v-model="getEmailData.bcc"
          :rules="ccAndBccRules"
          outline
        />

        <!-- Subject -->
        <v-text-field
          label="Subject"
          v-model="getEmailData.subject"
          :counter="100"
          :rules="subjectRules"
          outline
          required
        />

        <!-- Message -->
        <v-textarea
          v-model="getEmailData.message"
          label="Message"
          outline
          required
        />

        <v-layout row>
          <v-flex xs-6>
            <!-- Attachments Button -->
            <attachments-button />
          </v-flex>

          <v-flex xs-6 class="text-xs-right">
            <!-- Submit Button -->
            <v-btn
              round
              flat
              class="submit-btn ma-0"
              :disabled="!valid"
              @click="validate"
            >
              <span>
                <v-icon small class="mr-1">
                  arrow_forward
                </v-icon>

                <span>
                  SEND
                </span>
              </span>
            </v-btn>
          </v-flex>
        </v-layout>

        <attachments-previews class="mt-4" />
      </v-form>
      <!--End of Form -->
    </section>
    <!-- End of Form Container -->

    <!-- Preloader -->
    <div v-show="modalIsVisible" class="modal">
      <v-progress-circular :size="50" class="preloader" indeterminate />
    </div>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

import attachmentsButton from "@/components/form/AttachmentsButton.vue";
import attachmentsPreviews from "@/components/form/AttachmentsPreviews.vue";

export default {
  components: {
    attachmentsButton,
    attachmentsPreviews
  },
  data: () => ({
    modalIsVisible: false,
    valid: false,
    subjectRules: [
      v => !!v || "Subject is required",
      v => (v && v.length <= 100) || "Subject must be less than 100 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => {
        return (
          /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(
            v
          ) ||
          "Please enter a valid email, i.e email1@example.com,email2@example.com"
        );
      }
    ],
    ccAndBccRules: [
      v => {
        if (v.length == 0) {
          return true;
        } else {
          return (
            /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(
              v
            ) ||
            "Please enter a valid email, i.e email1@example.com,email2@example.com"
          );
        }
      }
    ]
  }),
  computed: {
    ...mapGetters(["getEmailData"])
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.submit();
      }
    },
    submit() {
      this.modalIsVisible = true;
      // On submit navigate to success router view.
      // A real app can use something like 'Axios' here and depending what the promise return to navigate to an error page or a success page.
      setTimeout(() => {
        this.$router.push({ path: "success" });
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss">
// Import global vars
@import "@/assets/styles/_vars.scss";

// Form Header
header {
  color: map-get($colors, white);
  background-color: map-get($colors, darkblue);
}

// Form container
.form-container {
  width: 100%;
  max-width: 650px;
  overflow: hidden;
  border-radius: 5px;
  margin: 20px auto;
  background: map-get($colors, white);
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.75);
}

// Form Submit button
.submit-btn {
  background: map-get($colors, azzuro);
  color: map-get($colors, white);
  &.submit-btn.v-btn--disabled {
    background: map-get($colors, lightgray) !important;
    color: map-get($colors, darkgray) !important;
  }
  i {
    position: relative;
    bottom: -1px;
  }
  span {
    display: flex;
  }
}

.modal {
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .preloader {
    color: map-get($colors, azzuro);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
