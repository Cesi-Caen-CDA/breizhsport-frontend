<template>
  <div class="contact-page">
    <h1>Entre en contact avec nous</h1>
    <div class="contact-content">
      <p>Nous sommes heureux de vous entendre ! 🎉</p>
      <p>Merci de contacter l'équipe de BreizhSport !</p>
      <p>
        Votre message est très important pour nous, et nous sommes ravis de
        savoir que vous êtes en contact avec nous.
      </p>
      <p>
        Nous vous répondrons bientôt pour vous aider au mieux. Si vous avez
        besoin de quoi que ce soit d'autre, n'hésitez pas à nous le faire
        savoir. 🚀💙
      </p>

      <v-container class="v-container-contact" fluid>
        <v-card class="pa-10 content-contact-card">
          <v-form @submit.prevent="submitForm" class="contact-form">
            <v-text-field
              v-model="form.name"
              label="Nom"
              required
              :rules="[(v) => !!v || 'Nom est obligatoire']"
            ></v-text-field>
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              required
              :rules="[
                (v) => !!v || 'Email is required',
                (v) => /.+@.+\..+/.test(v) || 'Email non valide',
              ]"
            ></v-text-field>
            <v-text-field
              v-model="form.subject"
              label="Sujet"
              required
              :rules="[(v) => !!v || 'Sujet est obligatoire']"
            ></v-text-field>
            <v-textarea
              v-model="form.message"
              label="Message"
              required
              :rules="[(v) => !!v || 'Message est obligatoire']"
            ></v-textarea>
            <v-btn type="submit" class="btn-send-contact" block
              >Envoyer message</v-btn
            >
            <v-alert
              v-if="allertMessage"
              :type="alertType"
              tile="Attention"
              variant="tonal"
              class="mb-4"
              :class="{
                'fade-out': fading,
              }"
            >
              {{ allertMessage }}
            </v-alert>
          </v-form>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const allertMessage = ref("");
const allertType = ref("");
const fading = ref(false);

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = async () => {
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.subject ||
    !form.value.message
  ) {
    allertMessage.value = "Tous les champs sont obligatoires";
    allertType.value = "Erreur";
    fading.value = false;

    setTimeout(() => {
      fading.value = true;
    }, 3000);
    return;
  }
  setTimeout(() => {
    allertMessage.value = "";
    fading.value = false;
  }, 3000);

  console.log("Form envoyé", form.value);

  allertMessage.value =
    "Merci pour votre message ! Nous vous contacterons bientôt.";
  allertType.value = "success";
  fading.value = false;

  setTimeout(() => {
    fading.value = true;
  }, 3000);

  setTimeout(() => {
    allertMessage.value = "";
    fading.value = false;
  }, 3000);
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
}
.contact-page h1 {
  text-align: center;
  margin-bottom: 15px;
}

.v-container-contact {
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
}
.contact-content {
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: var(--dark);
}

.contact-title {
  text-align: center;
}
.contact-form {
  max-width: 100%;
  margin: auto;
}
.content-contact-card {
  width: 70%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn-send-contact {
  background-color: var(--primary);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 5px;
}
.btn-send-contact:hover {
  background-color: var(--primary-alt);
  transition: background-color 0.3s ease;
}
.fade-out {
  opacity: 0;
  transition: opacity 2s ease-out;
}
</style>
