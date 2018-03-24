<template>
    <section class="content">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="box box-warning">
                    <div class="box-body">
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Username</label>
                            <input id="login-username" type="text" class="form-control" placeholder="Username or Email">
                        </div>
                        <div class="form-group col-md-6 col-md-offset-3">
                            <label>Password</label>
                            <input id="login-password" type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-8 col-md-offset-2">
                                <button type="submit" class="btn btn-success col-md-6 col-md-offset-3">Login</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-4 col-md-offset-4">
                                <p>Dont have account ?</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-8 col-md-offset-2">
                                <button type="submit" class="btn btn-warning btn-success col-md-6 col-md-offset-3">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>

<style>

</style>
