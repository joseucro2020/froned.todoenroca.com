<script setup>
import { ref } from "vue";

// Header
import HeaderTop from '../../components/header/HeaderTop.vue';
import HeaderCenter from '../../components/header/HeaderCenter.vue'
import HeaderBottom from '../../components/header/HeaderBottom.vue'

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <!-- Header Container  -->
  <header id="header" class=" typeheader-4">
      <!-- Header Top -->
      <HeaderTop />
      <!-- Header Top -->

      <!-- Header center -->
      <HeaderCenter />
      <!-- Header center -->

      <!-- Header Bottom -->
      <HeaderBottom />
      <!-- Header Bottom -->
    </header>
</template>

<style scoped></style>
