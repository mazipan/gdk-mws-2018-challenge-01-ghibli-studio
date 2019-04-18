<template>
  <section class="container">
    <div v-for="item in dataRepo" :key="item.name" class="notification is-primary">
      <div class="level">
        <div class="level-left">
          <figure class="image is-96x96">
            <img class="is-rounded" :src="item.avatar">
          </figure>
        </div>
        <div class="level-right has-text-right">
          <div>
            <h2 class="subtitle">{{ item.name }}</h2>
            <div>
              <div class="tags">
                <span
                  v-for="(tech, index) in item.technologies"
                  :key="index"
                  class="tag is-warning"
                  style="margin: 1em .5em;"
                >{{ tech }}</span>
              </div>
            </div>
            <div style="margin: 1em 0;">
              <a
                style="margin: .5em;"
                alt="Github"
                :href="item.github_link"
                target="_blank"
                rel="noopener"
              >Github</a>
              <a
                style="margin: .5em;"
                alt="Demo"
                :href="item.demo_link"
                target="_blank"
                rel="noopener"
              >Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dataRepo from "@/assets/data.js";

export default {
  name: 'HomePage',
  data() {
    return {
      dataRepo
    };
  }
};
</script>

<style scoped>
.container {
  margin: 3em auto;
}
@media screen and (max-width: 640px) {
  .container {
    margin: 3em 1em;
  }
}
</style>
