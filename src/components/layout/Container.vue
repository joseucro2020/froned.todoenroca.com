<script setup>
import { ref } from "vue";

// Main
import BoxContentUno from '../../components/main/BoxContentUno.vue'
import BoxContentDos from '../../components/main/BoxContentDos.vue'
import TopColletions from '../../components/main/module/TopCollections.vue'
import CategoriesProducts from '../../components/main/slider/SliderCategoriesProducts.vue';
import Brands from '../../components/main/slider/SliderBrands.vue'


import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <!-- Main Container  -->
  <div class="main-container">
        <div id="content">
            <div class="container">

              <BoxContentUno />

              <BoxContentDos />

              <TopColletions />

              <CategoriesProducts />

              <Brands />
            </div>
        </div>
    </div>
    <!-- //Main Container -->
</template>

<style scoped></style>
