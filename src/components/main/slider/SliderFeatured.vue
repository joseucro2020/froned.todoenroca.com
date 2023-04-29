<script setup>
import { useI18n } from "vue-i18n";
import useFeatured from "@/composables/useFeatured";
const { t } = useI18n();

const { allFeatured } = useFeatured();
</script>

<template>
 <div class="module so-extraslider-ltr">
        <h3 class="modtitle"><span>{{t("Main.Slider.Featured.Featuredproducts")}}</span></h3>
        <div class="modcontent">
          <div class="so-extraslider">
            <div
              class="yt-content-slider-featured extraslider-inner products-list"
              data-rtl="yes"
              data-pagination="no"
              data-autoplay="no"
              data-delay="4"
              data-speed="0.6"
              data-margin="30"
              data-items_column0="4"
              data-items_column1="4"
              data-items_column2="3"
              data-items_column3="2"
              data-items_column4="1"
              data-arrows="yes"
              data-lazyload="yes"
              data-loop="no"
              data-buttonpage="top"
            >
              
              <div class="item" v-for="featured in allFeatured" :key="featured.id">
                <div class="product-layout product-grid2 style1">
                  <div class="product-thumb transition product-item-container">
                    <div class="left-block">
                      <div class="product-image-container">
                        <div class="image">
                          <a href="#" target="_self" title="product">
                            <img
                              src="../../../assets/image/catalog/demo/product/index2/270/10.jpg"
                              alt="Mapicola incididuv "
                              class="img-responsive"
                            />
                          </a>
                        </div>
                        <!--quickview-->
                        <div class="so-quickview">
                          <a
                            class="iframe-link btn-button quickview quickview_handler visible-lg"
                            href="quickview.html"
                            :title="$t('Main.Quickview')"
                            data-fancybox-type="iframe"
                            ><i class="fa fa-eye"></i><span>{{t("Main.Quickview")}}</span></a
                          >
                        </div>
                        <!--end quickview-->
                      </div>
                    </div>
                    <div class="right-block">
                      <div class="caption">
                        <h4>
                          <router-link :to="`/productsDetail/${featured.id}`">{{ featured.name }}</router-link>
                          <!--<a href="#" target="_self" :title="featured.name"
                            >{{ featured.name }}
                          </a>-->
                        </h4>
                        <div class="rating">
                          <span class="fa fa-stack"
                            ><i class="fa fa-star fa-stack-2x"></i
                          ></span>
                          <span class="fa fa-stack"
                            ><i class="fa fa-star fa-stack-2x"></i
                          ></span>
                          <span class="fa fa-stack"
                            ><i class="fa fa-star fa-stack-2x"></i
                          ></span>
                          <span class="fa fa-stack"
                            ><i class="fa fa-star fa-stack-2x"></i
                          ></span>
                          <span class="fa fa-stack"
                            ><i class="fa fa-star fa-stack-2x"></i
                          ></span>
                        </div>

                        <p class="price">
                          <span class="price-new">$66.00</span>
                          <span class="price-old">$76.00</span>
                        </p>
                        <div class="button-group">
                          <button
                            class="btn-button wishlist"
                            title="Add to Cart"
                            type="button"
                            onclick="cart.add('69');"
                          >
                            <i class="fa fa-shopping-cart"></i>
                            <span>Add to Cart</span>
                          </button>
                          <button
                            class="btn-button wishlist"
                            type="button"
                            title="Add to Wish List"
                            onclick="wishlist.add('69');"
                          >
                            <i class="fa fa-heart"></i
                            ><span>Add to Wish List</span>
                          </button>
                          <!--<button
                            class="btn-button compare"
                            type="button"
                            title="Compare this Product"
                            onclick="compare.add('69');"
                          >
                            <i class="fa fa-refresh"></i
                            ><span>Compare this Product</span>
                          </button>-->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped></style>
