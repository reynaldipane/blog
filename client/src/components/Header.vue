<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Blogs Panel</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><router-link :to="{name: 'NewArticle'}"><i class="fa fa-book"></i> <span>New Article</span></router-link></li>
          <li><router-link :to="{path: '/dashboard/readarticle'}"><i class="fa fa-child"></i> <span>My Article</span></router-link></li>
          <button type="button" class="btn btn-default navbar-btn" @click="signOut">Log Out</button>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: `Header`,
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>
