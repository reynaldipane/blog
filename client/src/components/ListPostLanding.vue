<template>
  <div class="col-md-4">
    <div class="box box-warning">
      <div class="box-body">
          <table class="table table-bordered">
            <tbody>
            <tr>
                <th style="text-align:center;">Article Title</th>
            </tr>
            <tr v-for="(article,i) in articleList" :key='i'>
                    <td>
                        <router-link :to="{name: 'detailarticle', params: {id: article._id}}">
                            {{article.title}}
                        </router-link>
                    </td>
            </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ListPostLanding',
  computed: {
    ...mapGetters({
      articleList: 'getArrArticle'
    })
  },
  created: function () {
    this.$store.dispatch('getAllArticle')
  }
}
</script>
