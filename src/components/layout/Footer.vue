<script setup>
import { ref } from "vue";

// Footer
import FooterTop from '../../components/footer/FooterTop.vue'
import FooterMiddle from '../../components/footer/FooterMiddle.vue'
import FooterBottom from '../../components/footer/FooterBottom.vue'

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <!-- Footer Container -->
  <footer class="footer-container typefooter-4">
      <!-- Footer Top Container 
      <FooterTop />-->
      <!-- /Footer Top Container -->
      <FooterMiddle />
      <!-- Footer Bottom Container -->
      <FooterBottom />

      <!--Back To Top-->
      <div class="back-to-top"><i class="fa fa-angle-up"></i></div>
    </footer>
</template>

<style scoped></style>
