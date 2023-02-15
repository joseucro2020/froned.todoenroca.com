<script setup>
import { ref } from "vue";
import {useI18n} from "vue-i18n"
const {t} = useI18n()
</script>

<template>
  <div class="header-top hidden-compact">
    <div class="container">
      <div class="row">
        <div class="header-top-left col-lg-6 col-md-4 col-sm-6 col-xs-7">
          <ul class="top-link list-inline lang-curr">
            <li class="currency">
              <div class="btn-group currencies-block">
                <form
                  action="index.html"
                  method="post"
                  enctype="multipart/form-data"
                  id="currency"
                >
                  <a
                    class="btn btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span class="icon icon-credit"></span> $ US Dollar
                    <span class="fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu btn-xs">
                    <li><a href="#">(€)&nbsp;Euro</a></li>
                    <li><a href="#">(£)&nbsp;Pounds </a></li>
                    <li><a href="#">($)&nbsp;US Dollar </a></li>
                  </ul>
                </form>
              </div>
            </li>
            <li class="language">
              <div class="btn-group languages-block">
                <form
                  action="index.html"
                  method="post"
                  enctype="multipart/form-data"
                  id="bt-language"
                >
                  <a class="btn-link dropdown-toggle" data-toggle="dropdown">
                    <img
                      src="../../assets/image/catalog/flags/gb.png"
                      alt="English"
                      title="English"
                    />
                    <span class="">English</span>
                    <span class="fa fa-angle-down"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="index.html"
                        ><img
                          class="image_flag"
                          src="../../assets/image/catalog/flags/gb.png"
                          alt="English"
                          title="English"
                        />
                        English
                      </a>
                    </li>
                    <li>
                      <a href="index.html">
                        <img
                          class="image_flag"
                          src="../../assets/image/catalog/flags/ar.png"
                          alt="Arabic"
                          title="Arabic"
                        />
                        Arabic
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="header-top-right collapsed-block col-lg-6 col-md-8 col-sm-6 col-xs-5"
        >
          <ul class="top-link list-inline">
            <li class="account" id="my_account">
              <a
                href="#"
                title="My Account "
                class="btn-xs dropdown-toggle"
                data-toggle="dropdown"
              >
                <span>{{t("HeaderTop.MyAccount")}} </span> <span class="fa fa-caret-down"></span>
              </a>
              <ul class="dropdown-menu" style="display: none">
                <li><a href="register.html">{{t("HeaderTop.Register")}}</a></li>
                <li><a href="login.html">{{t("HeaderTop.Login")}}</a></li>
              </ul>
            </li>
            <li class="wishlist hidden-sm hidden-xs">
              <a
                href="#"
                id="wishlist-total"
                class="top-link-wishlist"
                :title="$t('HeaderTop.WishList')"
                ><!-- <i class="fa fa-heart"></i> -->
                {{t("HeaderTop.WishList")}} (0)
              </a>
            </li>
            <li class="checkout hidden-sm hidden-xs">
              <a href="checkout.html" class="btn-link" title="Checkout "
                ><span><i class="fa fa-check-square-o"></i>{{t("HeaderTop.Checkout")}} </span></a
              >
            </li>
            <li class="hidden-xs">
              <a href="login.html"><i class="fa fa-lock"></i>{{t("HeaderTop.Login")}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
