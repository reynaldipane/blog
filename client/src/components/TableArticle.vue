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
                            </tr>
                            <tr v-for="(article,i) in articles" :key='i'>
                                    <td>
                                        <router-link :to="{name: 'tablearticle', params: {id: article._id}}">
                                          {{article.title}}
                                        </router-link>
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
import axios from 'axios'

export default {
  name: 'TableArticle',
  data: function () {
    return {
      articles: [],
      singleArticle: ``
    }
  },
  created: function () {
    axios.get('http://localhost:3000/api/articles', {})
      .then((articles) => {
        this.articles = articles.data.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
