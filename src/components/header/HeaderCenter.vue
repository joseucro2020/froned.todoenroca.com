<script setup>
import { useI18n } from "vue-i18n";
import useCategories from "@/composables/useCategories";

const { t } = useI18n();

const { allCategories, optionCategories, search } = useCategories();

</script>

<template>
  <div class="header-middle">
    <div class="container">
      <div class="row">
        <!-- Logo -->
        <div class="navbar-logo col-lg-2 col-md-3 col-sm-12 col-xs-12">
          <div class="logo">
            <a href="index.html"
              ><img
                src="../../assets/image/catalog/logo6.png"
                title="Your Store"
                alt="Your Store"
            /></a>
          </div>
        </div>
        <!-- //end Logo -->
        <!-- Search -->
        <div class="middle2 col-lg-7 col-md-6">
          <div class="search-header-w">
            <div class="icon-search hidden-lg hidden-md hidden-sm">
              <i class="fa fa-search"></i>
            </div>
            <div id="sosearchpro" class="sosearchpro-wrapper so-search">
              <form method="GET" action="index.html">
                <div id="search0" class="search input-group form-group">
                  <div
                    class="select_category filter_type icon-select hidden-sm hidden-xs"
                  >
                    <select class="no-border" name="category_id" v-model="optionCategories">
                      <option value="0">
                        {{ t("HeaderCenter.AllCategories") }}
                      </option>
                      <template
                        v-for="category in allCategories"
                        :key="category.id"
                      >
                        <option :value="category.id">
                          {{ category.name }}
                        </option>
                        <option
                          v-for="subcategory in category.all_subcategories"
                          :key="subcategory.id"
                          :value="subcategory.id"
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                            subcategory.name
                          }}
                        </option>
                      </template>
                      
                    </select>
                  </div>

                  <input
                    class="autosearch-input form-control"
                    type="text"
                    size="50"
                    autocomplete="off"
                    :placeholder="$t('HeaderCenter.Keywordhere')"
                    name="search"
                    v-model="search"
                  />
                  <span class="input-group-btn">
                    <button
                      type="submit"
                      class="button-search btn btn-primary"
                      name="submit_search"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </div>
                <input type="hidden" name="route" value="product/search" />
              </form>
            </div>
          </div>
        </div>
        <!-- //end Search -->
        <div class="middle3 col-lg-3 col-md-3">
          <!--cart-->
          <div class="shopping_cart">
            <div id="cart" class="btn-shopping-cart">
              <a
                data-loading-text="Loading... "
                class="btn-group top_cart dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <div class="shopcart">
                  <span class="icon-c">
                    <i class="fa fa-shopping-bag"></i>
                  </span>
                  <div class="shopcart-inner">
                    <p class="text-shopping-cart">
                      {{ t("HeaderCenter.Mycart") }}
                    </p>

                    <span class="total-shopping-cart cart-total-full">
                      <span class="items_cart">02</span
                      ><span class="items_cart2"> item(s)</span
                      ><span class="items_carts"> - $162.00 </span>
                    </span>
                  </div>
                </div>
              </a>

              <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">
                <li>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td class="text-center" style="width: 70px">
                          <a href="product.html">
                            <img
                              src="../../assets/image/catalog/demo/product/80/1.jpg"
                              style="width: 70px"
                              alt="Yutculpa ullamcon"
                              title="Yutculpa ullamco"
                              class="preview"
                            />
                          </a>
                        </td>
                        <td class="text-left">
                          <a class="cart_product_name" href="product.html"
                            >Yutculpa ullamco</a
                          >
                        </td>
                        <td class="text-center">x1</td>
                        <td class="text-center">$80.00</td>
                        <td class="text-right">
                          <a href="product.html" class="fa fa-edit"></a>
                        </td>
                        <td class="text-right">
                          <a
                            onclick="cart.remove('2');"
                            class="fa fa-times fa-delete"
                          ></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center" style="width: 70px">
                          <a href="product.html">
                            <img
                              src="../../assets/image/catalog/demo/product/80/2.jpg"
                              style="width: 70px"
                              alt="Xancetta bresao"
                              title="Xancetta bresao"
                              class="preview"
                            />
                          </a>
                        </td>
                        <td class="text-left">
                          <a class="cart_product_name" href="product.html"
                            >Xancetta bresao</a
                          >
                        </td>
                        <td class="text-center">x1</td>
                        <td class="text-center">$60.00</td>
                        <td class="text-right">
                          <a href="product.html" class="fa fa-edit"></a>
                        </td>
                        <td class="text-right">
                          <a
                            onclick="cart.remove('1');"
                            class="fa fa-times fa-delete"
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <div>
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <td class="text-left"><strong>Sub-Total</strong></td>
                          <td class="text-right">$140.00</td>
                        </tr>
                        <tr>
                          <td class="text-left">
                            <strong>Eco Tax (-2.00)</strong>
                          </td>
                          <td class="text-right">$2.00</td>
                        </tr>
                        <tr>
                          <td class="text-left"><strong>VAT (20%)</strong></td>
                          <td class="text-right">$20.00</td>
                        </tr>
                        <tr>
                          <td class="text-left"><strong>Total</strong></td>
                          <td class="text-right">$162.00</td>
                        </tr>
                      </tbody>
                    </table>
                    <p class="text-right">
                      <a class="btn view-cart" href="cart.html"
                        ><i class="fa fa-shopping-cart"></i
                        >{{ t("HeaderCenter.ViewCart") }}</a
                      >&nbsp;&nbsp;&nbsp;
                      <a class="btn btn-mega checkout-cart" href="checkout.html"
                        ><i class="fa fa-share"></i
                        >{{ t("HeaderCenter.Checkout") }}</a
                      >
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--//cart-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>


