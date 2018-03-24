<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="content-wrapper">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import FormArticle from '@/components/FormArticle'

export default {
  props: ['path'],
  name: 'Dashboard',
  data: function () {
    return {
      isActive: true
    }
  },
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    'app-formarticle': FormArticle
  }
}
</script>

<style>

</style>
