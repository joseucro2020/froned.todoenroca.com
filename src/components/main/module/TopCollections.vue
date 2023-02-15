<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="so-categories custom-slidercates module clearfix">
    <h3 class="modtitle"><span>{{t("Main.Module.Topcollections")}}</span></h3>
    <div class="modcontent">
      <div
        class="cat-wrap theme3 font-title yt-content-slider"
        data-rtl="yes"
        data-autoplay="no"
        data-autoheight="no"
        data-delay="4"
        data-speed="0.6"
        data-margin="30"
        data-items_column0="5"
        data-items_column1="4"
        data-items_column2="3"
        data-items_column3="2"
        data-items_column4="1"
        data-arrows="yes"
        data-pagination="no"
        data-lazyload="yes"
        data-loop="no"
        data-hoverpause="yes"
      >
        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Smartphone" target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat1.jpg"
                title="Smartphone"
                alt="Smartphone"
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Smartphone " target="_self"> Smartphone</a>
          </div>
        </div>
        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Fashion" target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat2.jpg"
                title="Fashion"
                alt="Fashion"
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Fashion" target="_self"> Fashion</a>
          </div>
        </div>

        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Sport bikes " target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat3.jpg"
                title="Sport bikes "
                alt="Sport bikes "
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Sport bikes " target="_self"> Sport bikes </a>
          </div>
        </div>
        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Furniture & Decor" target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat4.jpg"
                title="Furniture & Decor"
                alt="Furniture & Decor"
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Furniture & Decor " target="_self">
              Furniture & Decor</a
            >
          </div>
        </div>
        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Appliances" target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat5.jpg"
                title="Appliances"
                alt="Appliances"
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Appliances" target="_self">Appliances</a>
          </div>
        </div>
        <div class="content-box">
          <div class="image-cat">
            <a href="#" title="Sine engain" target="_self">
              <img
                src="../../../assets/image/catalog/demo/category/id4-cat3.jpg"
                title="Sine engain"
                alt="Sine engain"
              />
            </a>
          </div>
          <div class="cat-title">
            <a href="#" title="Sine engain " target="_self"> Smartphone</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
