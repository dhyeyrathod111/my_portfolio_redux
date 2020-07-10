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
                                                <li class="breadcrumb-item active">Add new Skills</li>
                                            </ol>
                                        </div>
                                        <h4 class="page-title">Add new Skills</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-10"> 
                                    <div class="card m-b-30">
                                        <div class="card-body">
                                            <div id="alert_message"></div>
                                            <form action="#" id="add_new_skill">
                                                <div class="form-group">
                                                    <label>Skill name:</label>
                                                    <input type="text" name="skill_name" class="form-control" required="">
                                                </div>

                                                <div class="form-group">
                                                    <label>Lavel:</label>
                                                    <select name="lavel" class="form-control">
                                                        <option value="">---Select lavel---</option>
                                                        <option value="10">10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                        <option value="40">40</option>
                                                        <option value="50">50</option>
                                                        <option value="60">60</option>
                                                        <option value="70">70</option>
                                                        <option value="80">80</option>
                                                        <option value="90">90</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>

                                                <div class="form-group">
                                                    <label>Image:</label><br /> 
                                                    <input name="skill_file" type="file" onchange="preview_image(event)">
                                                    <img style="width: 400px;height: 300px;display: none;" id="output_image"/>
                                                </div>

                                                <div class="form-group">
                                                    <label>Description:</label>
                                                    <textarea class="form-control" name="description" rows="6"></textarea>
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
                                </div>
                            </div>
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
            $( "#add_new_skill" ).validate({
                rules: {
                    skill_name:{
                        required: true,
                    },
                    description:{
                        required: true, 
                    },
                    skill_file:{
                        required: true,
                        extension: "png|jpg|jpeg"
                    },
                    lavel:{
                        required: true,  
                    }
                },
                submitHandler: function(form){
                    var form = $('#add_new_skill')[0]; 
                    var form_data = new FormData(form);
                    let ajax_url = base_url + 'admin/skill_process';
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
                                setTimeout(function(){  window.location.href = base_url + 'admin/add_new_skills';  }, 3000);
                            } else {
                                window.scrollTo({top: 0, behavior: 'smooth'});
                                notify_error(response.message);
                                setTimeout(function(){  window.location.href = base_url + 'admin/add_new_skills';  }, 3000);
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