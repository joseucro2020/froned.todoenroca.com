<script setup>
import { ref, defineProps,watch } from "vue";

import Header from './components/layout/Header.vue'
import Container from './components/layout/Container.vue'
import Footer from './components/layout/Footer.vue'

import {useI18n} from "vue-i18n"
const {t} = useI18n()

</script>

<template>
  <div>
    <!-- Header Container -->
    <Header />
    <!-- Container Container -->
    <Container />
    <!-- Footer Container -->
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
