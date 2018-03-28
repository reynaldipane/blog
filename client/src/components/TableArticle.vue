<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <div class="box-body">
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th style="text-align:center;">Article Title</th>
                                <th style="text-align:center;">Action</th>
                            </tr>
                            <tr v-for="(article,i) in arrUserArticle" :key='i'>
                                    <td>
                                          {{article.title}}
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'userdetailarticle', params: {id: article._id}}">
                                          <button class="btn btn-warning">
                                            <i class="glyphicon glyphicon-pencil"></i>
                                          </button>
                                        </router-link>
                                        <button class="btn btn-danger" @click="deleteData(article._id)">
                                          <i class="glyphicon glyphicon-trash"></i>
                                        </button>
                                    </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                  <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TableArticle',
  data: function () {
    return {
      articles: [],
      singleArticle: ``
    }
  },
  methods: {
    deleteData (id) {
      this.$store.dispatch('deleteArticleById', id)
        .then(() => {
          this.$router.push({path: '/dashboard/readarticle'})
        })
    }
  },
  computed: {
    ...mapGetters({
      arrUserArticle: 'getArrUserArticle'
    })
  },
  created: function () {
    this.$store.dispatch('getUserArticle')
  },
  updated: function () {
    this.$store.dispatch('getUserArticle')
  }
}
</script>

<style>

</style>
