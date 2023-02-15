<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="module deals-layout4">
    <h3 class="modtitle"><span>{{t("Main.Slider.Deals.Dealsofthedays")}}</span></h3>
    <div class="modcontent">
      <div class="so-deal style2">
        <div
          class="extraslider-inner products-list yt-content-slider"
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
          <div class="item product-layout product-grid2">
            <div class="product-thumb transition product-item-container">
              <div class="left-block">
                <div class="product-image-container">
                  <div class="image">
                    <div class="box-label">
                      <span class="label label-sale">-13%</span>
                    </div>
                    <a href="#" target="_self" title="product">
                      <img
                        src="../../../assets/image/catalog/demo/product/index2/330/1.jpg"
                        alt="Ground round enim"
                        class="img-responsive"
                      />
                    </a>
                  </div>
                  <!--quickview-->
                  <div class="so-quickview">
                    <a
                      class="iframe-link btn-button quickview quickview_handler visible-lg"
                      href="quickview.html"
                      title="Quick view"
                      data-fancybox-type="iframe"
                      ><i class="fa fa-eye"></i><span>Quick view</span></a
                    >
                  </div>
                  <!--end quickview-->
                </div>
              </div>
              <div class="right-block">
                <div class="caption">
                  <h4>
                    <a href="#" target="_self" title="Ground round enim"
                      >Ground round enim</a
                    >
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

                  <p class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore..
                  </p>
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
                      <i class="fa fa-heart"></i><span>Add to Wish List</span>
                    </button>
                    <button
                      class="btn-button compare"
                      type="button"
                      title="Compare this Product"
                      onclick="compare.add('69');"
                    >
                      <i class="fa fa-refresh"></i
                      ><span>Compare this Product</span>
                    </button>
                  </div>
                  <!--countdown box-->
                  <div class="item-time-w">
                    <div class="item-time">
                      <div class="item-timer">
                        <div class="defaultCountdown-30"></div>
                      </div>
                    </div>
                  </div>
                  <!--end countdown box-->
                </div>
              </div>
            </div>
          </div>
          <div class="item product-layout product-grid2">
            <div class="product-thumb transition product-item-container">
              <div class="left-block">
                <div class="product-image-container">
                  <div class="image">
                    <div class="box-label">
                      <span class="label label-sale">-10%</span>
                    </div>
                    <a href="#" target="_self" title="product">
                      <img
                        src="../../../assets/image/catalog/demo/product/index2/330/2.jpg"
                        alt="Hofficia chicken"
                        class="img-responsive"
                      />
                    </a>
                  </div>
                  <!--quickview-->
                  <div class="so-quickview">
                    <a
                      class="iframe-link btn-button quickview quickview_handler visible-lg"
                      href="quickview.html"
                      title="Quick view"
                      data-fancybox-type="iframe"
                      ><i class="fa fa-eye"></i><span>Quick view</span></a
                    >
                  </div>
                  <!--end quickview-->
                </div>
              </div>
              <div class="right-block">
                <div class="caption">
                  <h4>
                    <a href="#" target="_self" title="Hofficia chicken"
                      >Hofficia chicken</a
                    >
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

                  <p class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore..
                  </p>
                  <p class="price">
                    <span class="price-new">$90.00</span>
                    <span class="price-old">$100.00</span>
                  </p>
                  <div class="button-group">
                    <button
                      class="addToCart"
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
                      <i class="fa fa-heart"></i><span>Add to Wish List</span>
                    </button>
                    <button
                      class="btn-button compare"
                      type="button"
                      title="Compare this Product"
                      onclick="compare.add('69');"
                    >
                      <i class="fa fa-refresh"></i
                      ><span>Compare this Product</span>
                    </button>
                  </div>
                  <!--countdown box-->
                  <div class="item-time-w">
                    <div class="item-time">
                      <div class="item-timer">
                        <div class="defaultCountdown-30"></div>
                      </div>
                    </div>
                  </div>
                  <!--end countdown box-->
                </div>
              </div>
            </div>
          </div>
          <div class="item product-layout product-grid2">
            <div class="product-thumb transition product-item-container">
              <div class="left-block">
                <div class="product-image-container">
                  <div class="image">
                    <div class="box-label">
                      <span class="label label-sale">-20%</span>
                    </div>
                    <a href="#" target="_self" title="product">
                      <img
                        src="../../../assets/image/catalog/demo/product/index2/330/3.jpg"
                        alt="Lastrami deserunt"
                        class="img-responsive"
                      />
                    </a>
                  </div>
                  <!--quickview-->
                  <div class="so-quickview">
                    <a
                      class="iframe-link btn-button quickview quickview_handler visible-lg"
                      href="quickview.html"
                      title="Quick view"
                      data-fancybox-type="iframe"
                      ><i class="fa fa-eye"></i><span>Quick view</span></a
                    >
                  </div>
                  <!--end quickview-->
                </div>
              </div>
              <div class="right-block">
                <div class="caption">
                  <h4>
                    <a href="#" target="_self" title="Lastrami deserunt"
                      >Lastrami deserunt</a
                    >
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

                  <p class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore..
                  </p>
                  <p class="price">
                    <span class="price-new">$45.00</span>
                    <span class="price-old">$56.00</span>
                  </p>
                  <div class="button-group">
                    <button
                      class="addToCart"
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
                      <i class="fa fa-heart"></i><span>Add to Wish List</span>
                    </button>
                    <button
                      class="btn-button compare"
                      type="button"
                      title="Compare this Product"
                      onclick="compare.add('69');"
                    >
                      <i class="fa fa-refresh"></i
                      ><span>Compare this Product</span>
                    </button>
                  </div>
                  <!--countdown box-->
                  <div class="item-time-w">
                    <div class="item-time">
                      <div class="item-timer">
                        <div class="defaultCountdown-30"></div>
                      </div>
                    </div>
                  </div>
                  <!--end countdown box-->
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
