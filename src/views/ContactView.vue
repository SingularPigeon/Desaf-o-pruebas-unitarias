<template>
    <h1>Contact us</h1>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" v-model="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" v-model="message" required></textarea>

    <button type="submit">Submit</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  if (name.value && email.value && message.value) {
   
    console.log('Formulario enviado:', {
      name: name.value,
      email: email.value,
      message: message.value
    });
   
    name.value = '';
    email.value = '';
    message.value = '';
    
    alert('Formulario enviado correctamente.');
  } else {
    alert('Por favor, rellena todos los campos.');
  }
}

</script>