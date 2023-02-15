<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="header-top hidden-compact">
    <div class="container">
      <div class="row">
        <div class="header-top-left col-lg-6 col-md-8 col-sm-6 col-xs-4">
          <div class="hidden-sm hidden-xs welcome-msg">
            <b>Welcome to Emarket !</b> ! Wrap new offers / gift every single
            day on Weekends - New Coupon code: Happy2018
          </div>
        </div>
        <div
          class="header-top-right collapsed-block col-lg-6 col-md-4 col-sm-6 col-xs-8"
        >
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
                  <a
                    class="btn btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
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
      </div>
    </div>
  </div>
</template>

<style scoped></style>
