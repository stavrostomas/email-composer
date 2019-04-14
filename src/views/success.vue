<template>
  <v-container>
    <!-- Load the email-summary -->
    <email-summary />
  </v-container>
</template>

<script>
import emailSummary from '@/components/form/EmailSummary.vue'

export default {
  components: {
    emailSummary
  }
}
</script>
