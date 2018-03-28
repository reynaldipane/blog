<template>
  <div class="col-md-8">
    <h1>{{activeArticle.title}}</h1>
    <p class="lead">
        by
        <a v-if="activeArticle.userid !== undefined">{{ activeArticle.userid.name }}</a>
    </p>
    <!-- Preview Image -->
    <!-- <img class="img-fluid rounded" src="http://placehold.it/900x300" alt=""> -->
    <hr>
        <p>{{activeArticle.articleBody}}</p>
    <hr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  name: 'PostLanding',
  computed: {
    ...mapGetters({
      activeArticle: `getActiveArticle`
    })
  },
  created: function () {
    this.$store.dispatch('getArticleById', this.id)
  },
  watch: {
    id () {
      this.$store.dispatch('getArticleById', this.id)
    }
  }
}
</script>
