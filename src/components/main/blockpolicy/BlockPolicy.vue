<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="block-policy4">
      <div class="inner">
        <div class="policy policy1">
          <a title="free shipping on all orders" href="#"
            ><span><i class="fa fa-truck"></i>{{t("Main.Policy.FreeShippingworldwide")}}</span></a
          >
        </div>
        <div class="policy policy2">
          <a title="money back guarantee" href="#"
            ><span><i class="fa fa-usd"></i>{{t("Main.Policy.moneybackguarantee")}}</span></a
          >
        </div>
        <div class="policy policy3">
          <a title="LOWEST PRICE GUARANTEE" href="#"
            ><span
              ><i class="fa fa-calendar"></i>{{t("Main.Policy.LOWESTPRICEGUARANTEE")}}</span
            ></a
          >
        </div>
        <div class="policy policy4">
          <a title="online support 24/24" href="#"
            ><span><i class="fa fa-umbrella"></i>{{t("Main.Policy.onlinesupport24/24")}}</span></a
          >
        </div>
      </div>
    </div>
</template>

<style scoped></style>
