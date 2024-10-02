<template>
  <h1>Contact us</h1>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="name"><
    <label for="email">Email:</label> 
    <input type="email" id="email" name="email" v-model="email"><
    <label for="message">Message:</label>
    <textarea id="message" name="message" v-model="message"></textarea>
    <button @click.prevent="submitForm">Submit</button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const message = ref('');

</script>