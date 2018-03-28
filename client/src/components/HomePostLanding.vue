<template>
  <div class="col-md-8">
    <h1 v-if="arrArticle.length">{{arrArticle[0].title}}</h1>
    <p class="lead">
        by
        <a v-if="arrArticle.length">{{arrArticle[0].userid.name}}</a>
    </p>
    <!-- Preview Image -->
    <!-- <img class="img-fluid rounded" src="http://placehold.it/900x300" alt=""> -->
    <hr>
        <p v-if="arrArticle.length">{{arrArticle[0].articleBody}}</p>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePostLanding',
  computed: {
    ...mapGetters({
      arrArticle: `getArrArticle`
    })
  }
}
</script>
