<template>
  <div>
    <navbar-landing></navbar-landing>
    <div class="container">
      <div class="row">
        <router-view></router-view>
        <listpost-landing></listpost-landing>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarLanding from '@/components/NavbarLanding'
import ListPostLanding from '@/components/ListPostLanding'

export default {
  name: `Landing`,
  components: {
    'navbar-landing': NavbarLanding,
    'listpost-landing': ListPostLanding
  }
}
</script>
