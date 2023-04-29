<script setup>
import { useI18n } from "vue-i18n";
import useCategoriesProducts from "@/composables/useCategoriesProducts";
const { t } = useI18n();

const { allCategoriesProducts } = useCategoriesProducts();
</script>

<template>
  <div class="module so-extraslider-ltr extra-layout4 cus1" v-for="categoryproducts in allCategoriesProducts" :key="categoryproducts.id">
    <div class="form-group col-pre">
      <div class="m-head">{{ categoryproducts.name }}<a href="#">{{t("Main.Slider.CategoriesProducts.ViewAll")}}</a></div>
    </div>
    <div class="modcontent">
      <div class="so-extraslider">
        <div
          class="yt-content-slider-categories extraslider-inner products-list"
          data-rtl="yes"
          data-pagination="no"
          data-autoplay="no"
          data-delay="4"
          data-speed="0.6"
          data-margin="30"
          data-items_column0="6"
          data-items_column1="3"
          data-items_column2="2"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/6.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/7.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/8.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/9.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/1.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/2.jpg"
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
                          src="../../../assets/image/catalog/demo/product/index2/270/3.jpg"
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
