<template>
  <section class="container" style="margin: 3em auto;">
    <div v-for="item in dataRepo"
      :key="item.name"
      class="notification is-primary">
      <figure class="image is-96x96">
        <img class="is-rounded" :src="item.avatar">
      </figure>
      {{ item.name }}
    </div>
  </section>
</template>

<script>
import dataRepo from '../assets/data.js'

export default {
  data () {
    return {
      dataRepo
    }
  }
}
</script>
