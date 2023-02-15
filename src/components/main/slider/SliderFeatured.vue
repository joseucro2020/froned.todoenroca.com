<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
 <div class="module so-extraslider-ltr">
        <h3 class="modtitle"><span>{{t("Main.Slider.Featured.Featuredproducts")}}</span></h3>
        <div class="modcontent">
          <div class="so-extraslider">
            <div
              class="yt-content-slider extraslider-inner products-list"
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
              <div class="item">
                <div class="product-layout product-grid2 style1">
                  <div class="product-thumb transition product-item-container">
                    <div class="left-block">
                      <div class="product-image-container">
                        <div class="image">
                          <div class="box-label">
                            <span class="label label-sale">-13%</span>
                          </div>
                          <a href="#" target="_self" title="product">
                            <img
                              src="../../../assets/image/catalog/demo/product/index2/270/2.jpg"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
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
                          <a href="#" target="_self" title="Mapicola incididuv"
                            >Mapicola incididuv
                          </a>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-layout product-grid2 style1">
                  <div class="product-thumb transition product-item-container">
                    <div class="left-block">
                      <div class="product-image-container">
                        <div class="image">
                          <a href="#" target="_self" title="product">
                            <img
                              src="../../../assets/image/catalog/demo/product/index2/270/3.jpg"
                              alt="Corem ipsum dolor"
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
                          <a href="#" target="_self" title="Corem ipsum dolor"
                            >Corem ipsum dolor</a
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

                        <p class="price">$65</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-layout product-grid2 style1">
                  <div class="product-thumb transition product-item-container">
                    <div class="left-block">
                      <div class="product-image-container">
                        <div class="image">
                          <div class="box-label">
                            <span class="label-product label-new">New</span>
                          </div>
                          <a href="#" target="_self" title="product">
                            <img
                              src="../../../assets/image/catalog/demo/product/index2/270/4.jpg"
                              alt="Benderloin officia"
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
                          <a href="#" target="_self" title="Benderloin officia"
                            >Benderloin officia</a
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

                        <p class="price">$80.00</p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="product-layout product-grid2 style1">
                  <div class="product-thumb transition product-item-container">
                    <div class="left-block">
                      <div class="product-image-container">
                        <div class="image">
                          <a href="#" target="_self" title="product">
                            <img
                              src="../../../assets/image/catalog/demo/product/index2/270/5.jpg"
                              alt="Rumstick shankle"
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
                          <a href="#" target="_self" title="Rumstick shankle"
                            >Rumstick shankle</a
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
                        <p class="price">$132.00</p>
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
