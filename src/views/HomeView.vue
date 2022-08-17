<template>
  <div class="home">
    <div v-show="false" class="w-100 row px-5 my-3">
      <b-button class="col-md-4">HOME</b-button>
      <b-button class="col-md-4">HISTORY</b-button>
      <b-button class="col-md-4 disable">???</b-button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <router-view></router-view>
    <SimpleDashboardVue></SimpleDashboardVue>
  </div>
</template>

<script>
import SimpleDashboardVue from '@/components/SimpleDashboard.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    SimpleDashboardVue
  }
}
</script>
