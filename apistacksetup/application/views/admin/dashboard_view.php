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
        <div id="preloader">
            <div id="status">
                <div class="spinner"></div>
            </div>
        </div>
        <div id="wrapper">
           <?php $this->load->view('admin/common/sidebar') ?>
            <div class="content-page">
                <div class="content">
                    <?php $this->load->view('admin/common/header') ?>
                    <div class="page-content-wrapper ">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="page-title-box">
                                        <div class="btn-group float-right">
                                            <ol class="breadcrumb hide-phone p-0 m-0">
                                                <li class="breadcrumb-item"><a href="#">Annex</a></li>
                                                <li class="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card m-b-30 text-white card-primary">
                                        <div class="card-body">
                                            <h5>Name: </h5>
                                            <h6>{{ Auth::user()->name }}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card m-b-30 text-white card-primary">
                                        <div class="card-body">
                                            <h5>Your point: </h5>
                                            <h6>{{ $player->points }}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card m-b-30 text-white card-primary">
                                        <div class="card-body">
                                            <h5>Email: </h5>
                                            <h6> {{ Auth::user()->email }} </h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    © 2018 Annex by Mannatthemes.
                </footer>
            </div>
        </div>
        <?php $this->load->view('admin/common/js') ?>
    </body>
</html>