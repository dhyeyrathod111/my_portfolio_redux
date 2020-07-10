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
                                                <a href="<?php echo base_url('admin/add_new_project') ?>" class="btn btn-info waves-effect waves-light"> Add new project </a>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Add new project</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-12">
                                    <div class="card m-b-30">
                                        <div class="card-body">
                                            <div id="alert_message"></div>
                                            <table id="datatable" class="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th>Sr. NO</th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>URL</th>
                                                    <th>Image</th>
                                                    <th>Delete</th>
                                                </tr>
                                                </thead>
            
            
                                                <tbody>
                                                    <?php foreach ($project_list as $key => $project) : ?>
                                                    <tr>
                                                        <td><?php echo $key + 1 ?></td>
                                                        <td><?php echo $project->title ?></td>
                                                        <td><?php echo $project->description ?></td>
                                                        <td><?php echo $project->website_url ?></td>
                                                        <td><img style="width: 170px;height: 100px" src="<?php echo base_url() ?>/<?php echo $project->file_name ?>"></td>
                                                        <td><button project_id="<?php echo base64_encode($project->id) ?>" class="btn btn-danger waves-effect waves-light delete_project">Delete</button></td>
                                                    </tr>
                                                    <?php endforeach ; ?>
                                                </tbody>
                                            </table>
            
                                        </div>
                                    </div>
                                </div> <!-- end col -->
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    © 2018 Annex by Dhyey Rathod.
                </footer>
            </div>
        </div>
        <?php $this->load->view('admin/common/js') ?>
        <script type="text/javascript">
            $(document).on('click', '.delete_project', function(event){
                event.preventDefault();
                let project_id = $(this).attr('project_id');
                if (confirm('Are you sure do you want to delete this project ?')) {
                    $('#preloader').show();
                    $.ajax({
                        type: "POST",
                        url: base_url + 'admin/delete_project',
                        data: {project_id:project_id},
                        success: response => {
                            $('#preloader').hide();
                            if (response.status == 'T') {
                                    notify_success(response.message);   
                                } else {
                                    notify_error(response.message);
                                }
                                setTimeout(function(){  window.location.href = base_url + 'admin/project_list'; }, 3000);
                        },
                        error: response => {
                            notify_error();console.log(response.responseText)
                        }
                    });
                } else {
                    notify_success('Your project is safe!');
                }
            });
        </script>
    </body>
</html>