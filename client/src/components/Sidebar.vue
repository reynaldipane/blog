<template>
        <aside class="main-sidebar" style="margin-top:40px;position:fixed">
            <section class="sidebar">
                <ul class="sidebar-menu">
                    <li><router-link :to="{name: 'SignIn'}"><i class="fa fa-book"></i> <span>Sign In</span></router-link></li>
                    <li><router-link :to="{name: 'NewArticle'}"><i class="fa fa-book"></i> <span>New Article</span></router-link></li>
                    <li><router-link :to="{path: '/dashboard/readarticle'}"><i class="fa fa-child"></i> <span>My Article</span></router-link></li>
                </ul>
            </section>
        </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style>

</style>
