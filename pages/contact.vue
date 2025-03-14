<template>
  <div class="contact-page">
    <h1>Contact Us</h1>
    <div class="contact-content">
      <p>Get in touch with us</p>
      <v-container>
        <v-card class="pa-6">
          <h1 class="text-h4 mb-4">Contact Us</h1>
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="form.name"
              label="Name"
              required
              :rules="[(v) => !!v || 'Name is required']"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              required
              :rules="[
                (v) => !!v || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
              ]"
            ></v-text-field>

            <v-text-field
              v-model="form.subject"
              label="Subject"
              required
              :rules="[(v) => !!v || 'Subject is required']"
            ></v-text-field>

            <v-textarea
              v-model="form.message"
              label="Message"
              required
              :rules="[(v) => !!v || 'Message is required']"
            ></v-textarea>

            <v-btn type="submit" color="primary" block>Send Message</v-btn>
          </v-form>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  // Implement form submission logic here
  console.log("Form submitted:", form.value);
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
}

.contact-content {
  margin-top: 20px;
}
</style>
