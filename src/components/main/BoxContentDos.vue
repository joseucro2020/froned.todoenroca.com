<script setup>
import SliderDeals from "./slider/SliderDeals.vue"
import SliderFeatured from "./slider/SliderFeatured.vue";
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="row box-content2">
    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 box-left">
      <!-- Deals -->
      <SliderDeals />
      <!-- End Deals -->
    </div>
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 extra-right">
      <SliderFeatured />
    </div>
  </div>
</template>

<style scoped></style>
