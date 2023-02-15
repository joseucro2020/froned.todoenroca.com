<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="module sohomepage-slider">
      <div
        class="yt-content-slider"
        data-rtl="yes"
        data-autoplay="no"
        data-autoheight="no"
        data-delay="4"
        data-speed="0.6"
        data-margin="0"
        data-items_column0="1"
        data-items_column1="1"
        data-items_column2="1"
        data-items_column3="1"
        data-items_column4="1"
        data-arrows="yes"
        data-pagination="no"
        data-lazyload="yes"
        data-loop="no"
        data-hoverpause="yes"
      >
        <div class="yt-content-slide">
          <a href="#"
            ><img
              src="../../../assets/image/catalog/slideshow/home4/slide-1.jpg"
              alt="slider1"
              class="img-responsive"
          /></a>
        </div>
        <div class="yt-content-slide">
          <a href="#"
            ><img
              src="../../../assets/image/catalog/slideshow/home4/slide-2.jpg"
              alt="slider2"
              class="img-responsive"
          /></a>
        </div>
        <div class="yt-content-slide">
          <a href="#"
            ><img
              src="../../../assets/image/catalog/slideshow/home4/slide-3.jpg"
              alt="slider3"
              class="img-responsive"
          /></a>
        </div>
      </div>

      <div class="loadeding"></div>
    </div>
</template>

<style scoped></style>
