<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <title>Annex - Responsive Bootstrap 4 Admin Dashboard</title>
        <meta content="Admin Dashboard" name="description" />
        <meta content="Mannatthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <?php $this->load->view('admin/common/css') ?>
    </head>
    <body class="fixed-left">
        <div class="accountbg"></div>
        <div class="wrapper-page">
            <div class="card">
                <div class="card-body">

                    <h3 class="text-center mt-0 m-b-15">
                        <a href="index.html" class="logo logo-admin"><img src="assets/images/logo.png" height="24" alt="logo"></a>
                    </h3>
                    <div id="alert_message"></div>
                    <form class="form-horizontal m-t-20" action="<?php echo base_url('login_process') ?>" id="login_form">
                        <div class="form-group row">
                            <div class="col-12">
                                <input class="form-control" name="email" type="text" required="" placeholder="Email">
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-12">
                                <input class="form-control" name="password" type="password" required="" placeholder="Password">
                            </div>
                        </div>
                        
                        <div class="form-group text-center row m-t-20">
                            <div class="col-12">
                                <button class="btn btn-danger btn-block waves-effect waves-light" type="submit">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <?php $this->load->view('admin/common/js') ?>
        <script type="text/javascript">
            var validator_login = $('#login_form').validate({
                rules: {
                    email:{
                        required: true,
                        customEmail: true,
                    },
                    password: {
                        required: true,
                    }
                },
                messages: {
                    email:{
                        required: 'Email id is required.',
                    },
                    password: {
                        required: 'Password is required.',
                    }
                },
                submitHandler: function (form) {
                    var form_data = JSON.stringify($(form).serializeArray());
                    $.ajax({
                        type: "POST",
                        url: $(form).attr('action'),
                        data: JSON.parse(form_data),
                        success: response => {
                            if (response.status == 'T') {
                                notify_success(response.message);
                                setTimeout(function(){  window.location.href = base_url + 'admin/dashboard';  }, 3000);
                            } else {
                                notify_error(response.message);
                                setTimeout(function(){  window.location.href = base_url + 'login';  }, 3000);
                            }
                        },
                        error: response => {
                            notify_error();console.log(response);
                        }
                    });
                }
            });
        </script>
    </body>
</html>