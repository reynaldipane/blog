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
        <router-link :to="{path: '/'}">
          <a class="navbar-brand" href="#"> Simple Blogs</a>
        </router-link>
        <button type="button" class="btn btn-default navbar-btn">
          <router-link :to="{name: 'signin'}">
            Sign In
          </router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarLanding'
}
</script>
