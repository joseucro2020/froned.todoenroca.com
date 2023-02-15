<script setup>
import SliderHome from "./slider/SliderHome.vue"
import TopTags from "./tags/TopTags.vue"
import BlockPolicy from "./blockpolicy/BlockPolicy.vue"
import { ref } from "vue";
</script>

<template>
  <div class="box-content1">
    <TopTags />

    <SliderHome />
    
    <BlockPolicy />
  </div>
</template>

<style scoped></style>
