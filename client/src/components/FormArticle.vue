<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <div class="box-body">
                        <h1 class="col-md-8 col-md-offset-2">Add new articles</h1>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Article Title</label>
                            <input type="text" class="form-control" placeholder="Article Title ..." v-model="objNewArticle.title">
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Article Body</label>
                            <textarea class="form-control" rows="5" placeholder="Write Some Story ..." v-model="objNewArticle.articleBody"></textarea>
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <button type="submit" class="btn btn-warning" @click="createArticle">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

    </section>
</template>

<script>
export default {
  name: 'FormArticle',
  data: function () {
    return {
      objNewArticle: {
        title: ``,
        articleBody: ``
      }
    }
  },
  methods: {
    createArticle: function () {
      this.$store.dispatch('createNewArticle', this.objNewArticle)
        .then(this.$router.push({path: '/dashboard/readarticle'}))
    }
  }
}
</script>

<style>

</style>
