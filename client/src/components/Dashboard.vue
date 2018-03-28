<template>
  <div>
    <app-header></app-header>
    <div class="content-wrapper">
        <h3>Hallo, {{objUserActive.name}}</h3>
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import FormArticle from '@/components/FormArticle'
import { mapGetters } from 'vuex'

export default {
  props: ['path'],
  name: 'Dashboard',
  data: function () {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapGetters({
      objUserActive: 'getActiveUser'
    })
  },
  components: {
    'app-header': Header,
    'app-formarticle': FormArticle
  }
}
</script>

<style>

</style>
