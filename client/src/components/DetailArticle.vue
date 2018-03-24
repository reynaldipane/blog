<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <p>{{ objPost.title }}</p>
                    <p>{{ objPost.body }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  name: 'DetailArticle',
  data: function () {
    return {
      objPost: {
        title: ``,
        body: ``
      }
    }
  },
  methods: {
    getToDo: function () {
      axios.get(`http://localhost:3000/api/articles/${this.id}`, {})
        .then((article) => {
          this.objPost.title = article.data.data.title
          this.objPost.body = article.data.data.articleBody
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created: function () {
    this.getToDo()
  },
  watch: {
    id () {
      this.getToDo()
    }
  }
}
</script>

<style>

</style>
