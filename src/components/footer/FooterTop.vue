<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="footer-top">
    <div class="container">
      <div class="module newsletter-footer4">
        <div class="newsletter" style="width: 100%; background-color: #fff">
          <div class="title-block">
            <div class="page-heading font-title">
              Sign up for newsletter & get 30% off
            </div>
            <div class="promotext">
              Trade Alert - Delivering the latest product trends and industry
              news straight to your inbox.
            </div>
          </div>

          <div class="block_content">
            <form
              method="post"
              id="signup"
              name="signup"
              class="form-group form-inline signup send-mail"
            >
              <div class="form-group">
                <div class="input-box">
                  <input
                    type="email"
                    placeholder="Your email address..."
                    value=""
                    class="form-control"
                    id="txtemail"
                    name="txtemail"
                    size="55"
                  />
                </div>
                <div class="subcribe">
                  <button
                    class="btn btn-primary btn-default font-title"
                    type="submit"
                    onclick="return subscribe_newsletter();"
                    name="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--/.modcontent-->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
