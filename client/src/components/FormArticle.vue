<template>
    <section class="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-warning">
                    <div class="box-body">
                        <h1 class="col-md-8 col-md-offset-2">Add new articles</h1>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Your Article Title</label>
                            <input type="text" class="form-control" placeholder="Article Title ...">
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <label>Description</label>
                            <textarea class="form-control" rows="5" placeholder="Description ..."></textarea>
                        </div>
                        <div class="form-group col-md-8 col-md-offset-2">
                            <button type="submit" class="btn btn-warning">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FormArticle'
}
</script>

<style>

</style>
