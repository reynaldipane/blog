<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <div class="box-body">
                        <h1 class="col-md-8 col-md-offset-2">Update Article</h1>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Article Title</label>
                            <input type="text" class="form-control" placeholder="Article Title ..." v-model="objToUpdate.title">
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Article Body</label>
                            <textarea class="form-control" rows="10" placeholder="Write Some Story ..." v-model="objToUpdate.articleBody"></textarea>
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <button type="submit" class="btn btn-warning" @click="updateArticle">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],
  name: 'DetailArticle',
  computed: {
    ...mapGetters({
      objToUpdate: 'getActiveArticle'
    })
  },
  methods: {
    updateArticle: function () {
      this.$store.dispatch('updateArticleById', this.objToUpdate)
        .then(() => {
          this.$router.push({name: `userdetailarticle`})
        })
    }
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

<style>

</style>
