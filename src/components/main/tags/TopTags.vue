<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="top-tags">
    <ul>
      <li><h2>{{t("Main.Tags.GoQuicklyto")}}:</h2></li>
      <li><a href="#">Fashions,</a></li>
      <li><a href="#">Electronic,</a></li>
      <li><a href="#">Furniture,</a></li>
      <li><a href="#">Accessories,</a></li>
      <li><a href="#">Shoes,</a></li>
      <li><a href="#">Smartphone,</a></li>
      <li><a href="#">Cellphone,</a></li>
      <li><a href="#">Cameras,</a></li>
      <li><a href="#">Latops,</a></li>
      <li><a href="#">Tablets,</a></li>
      <li><a href="#">Makeup,</a></li>
      <li><a href="#">iPhone</a></li>
    </ul>
  </div>
</template>

<style scoped></style>
