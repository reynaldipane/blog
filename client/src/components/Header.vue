<template>
    <header class="main-header">
        <a href="index2.html" class="logo" style="height:65px;position:fixed">
            <span class="logo-mini"><b>M</b>BG</span>
            <span class="logo-lg"><b>My</b>Blog</span>
        </a>

        <nav class="navbar navbar-static-top" role="navigation">
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="btn btn-danger">Logout</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>
