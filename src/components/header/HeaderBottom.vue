<script setup>
import "@/js/themejs/so_megamenu.js";
import { useI18n } from "vue-i18n";
import useCategories from "@/composables/useCategories";
const { t } = useI18n();
const { allCategories, optionCategories, search } = useCategories();
</script>

<template>
  <div class="header-bottom hidden-compact">
    <div class="container">
      <div class="row">
        <div class="bottom1 menu-vertical col-lg-2 col-md-3">
          <!-- Secondary menu -->
          <div class="responsive so-megamenu megamenu-style-dev">
            <div class="so-vertical-menu">
              <nav class="navbar-default">
                <div class="container-megamenu vertical">
                  <div id="menuHeading">
                    <div class="megamenuToogle-wrapper">
                      <div class="megamenuToogle-pattern">
                        <div class="container">
                          <div>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          {{ t("HeaderBottom.AllCategories") }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="navbar-header">
                    <button
                      type="button"
                      id="show-verticalmenu"
                      data-toggle="collapse"
                      class="navbar-toggle"
                    >
                      <i class="fa fa-bars"></i>
                      <span> {{ t("HeaderBottom.AllCategories") }} </span>
                    </button>
                  </div>
                  <div class="vertical-wrapper">
                    <span id="remove-verticalmenu" class="fa fa-times"></span>
                    <div class="megamenu-pattern">
                      <div class="container-mega">
                        <ul class="megamenu">
                          <li
                            class="item-vertical with-sub-menu hover"
                            v-for="category in allCategories"
                            :key="category.id"
                          >
                            <p class="close-menu"></p>
                            <a href="#" class="clearfix">
                              <img
                                src="../../assets/image/catalog/menu/icons/ico10.png"
                                alt="icon"
                              />
                              <span>{{ category.name }}</span>
                              <b class="caret"></b>
                            </a>
                            <div class="sub-menu" data-subwidth="60">
                              <div class="content">
                                <div class="row">
                                  <div class="col-sm-12">
                                    <div class="row">
                                      <div class="col-md-4 static-menu">
                                        <div class="menu">
                                          <ul>
                                            <li>
                                              <a href="#" class="main-menu">{{
                                                category.name
                                              }}</a>
                                              <ul>
                                                <li
                                                  v-for="subcategory in category.all_subcategories"
                                                  :key="subcategory.id"
                                                >
                                                  <a href="#">{{
                                                    subcategory.name
                                                  }}</a>
                                                </li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <!-- // end Secondary menu -->
        </div>
        <!-- Main menu -->
        <div class="main-menu col-lg-10 col-md-9">
          <div class="responsive so-megamenu megamenu-style-dev">
            <nav class="navbar-default">
              <div class="container-megamenu horizontal open">
                <div class="navbar-header">
                  <button
                    type="button"
                    id="show-megamenu"
                    data-toggle="collapse"
                    class="navbar-toggle"
                  >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>

                <div class="megamenu-wrapper">
                  <span id="remove-megamenu" class="fa fa-times"></span>
                  <div class="megamenu-pattern">
                    <div class="container-mega">
                      <ul
                        class="megamenu"
                        data-transition="slide"
                        data-animationtime="250"
                      >
                        
                       

                        <li class="">
                          <p class="close-menu"></p>
                          <a href="#" class="clearfix">
                            <strong>Ofertas</strong>
                          </a>
                        </li>
                        <li class="">
                          <p class="close-menu"></p>
                          <a href="#" class="clearfix">
                            <strong>Más vendidos</strong>
                          </a>
                        </li>
                        <li class="">
                          <p class="close-menu"></p>
                          <a href="blog-page.html" class="clearfix">
                            <strong>Productos Recientes</strong>
                            <span class="label"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <!-- //end Main menu -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
