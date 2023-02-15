<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12 copyright-w">
          <div class="copyright">
            eMarket © 2018 Demo Store. All Rights Reserved. {{t("Footer.Bottom.Designedby")}}
            <a href="http://www.opencartworks.com/" target="_blank"
              >OpenCartWorks.Com</a
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-5 col-sm-12 col-xs-12 payment-w">
          <img
            src="../../assets/image/catalog/demo/payment/payment-4.png"
            alt="imgpayment"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
