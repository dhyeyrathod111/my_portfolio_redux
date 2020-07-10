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
                                                <li class="breadcrumb-item active">Add new project</li>
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
                                            <form action="#" id="add_new_project">
                                                <div class="form-group">
                                                    <label>Title:</label>
                                                    <input type="text" name="title" class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Website URL:</label>
                                                    <input type="text" name="website_url" class="form-control">
                                                </div>

                                                <div class="form-group">
                                                    <label>Image:</label><br /> 
                                                    <input name="project_file" type="file" onchange="preview_image(event)">
                                                    <img style="width: 400px;height: 300px;display: none;" id="output_image"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Description:</label>
                                                    <textarea class="form-control" name="description" rows="10"></textarea>
                                                </div>

                                                <div class="form-group m-b-0">
                                                    <div>
                                                        <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                            </form>
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
            $( "#add_new_project" ).validate({
                rules: {
                    title:{
                        required: true,
                    },
                    project_file:{
                        required: true,
                        extension: "png|jpg|jpeg"
                    },
                    description:{
                        required: true, 
                    },
                    website_url:{
                        required: true,  
                    }
                },
                submitHandler: function(form){
                    var form = $('#add_new_project')[0]; 
                    var form_data = new FormData(form);
                    let ajax_url = base_url + 'admin/project_process';
                    $('#preloader').show();
                    $.ajax({
                        type: "POST",
                        url: ajax_url,
                        data: form_data,
                        contentType: false,       
                        cache: false,             
                        processData:false, 
                        success: response => {
                            $('#preloader').hide();
                            if (response.status == 'T') {
                                window.scrollTo({top: 0, behavior: 'smooth'});
                                notify_success(response.message);
                                setTimeout(function(){  window.location.href = base_url + 'admin/project_list';  }, 3000);
                            } else {
                                window.scrollTo({top: 0, behavior: 'smooth'});
                                notify_error(response.message);
                                setTimeout(function(){  window.location.href = base_url + 'admin/add_new_project';  }, 3000);
                            }
                        },
                        error: response => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                            $('#preloader').hide();
                            notify_error();console.log(response);  
                        }
                    });
                }
            });
            function preview_image(event) 
            {
                var reader = new FileReader();
                reader.onload = function() {
                    var output = document.getElementById('output_image');
                    output.src = reader.result;
                }
                $('#output_image').show();
                reader.readAsDataURL(event.target.files[0]);
            }
        </script>
    </body>
</html>