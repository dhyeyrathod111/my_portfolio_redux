<script src="<?php echo base_url() ?>/assets/js/popper.min.js"></script>
<script src="<?php echo base_url() ?>/assets/js/bootstrap.min.js"></script>
<script src="<?php echo base_url() ?>/assets/js/modernizr.min.js"></script>
<script src="<?php echo base_url() ?>/assets/js/detect.js"></script>
<script src="<?php echo base_url() ?>/assets/js/fastclick.js"></script>
<script src="<?php echo base_url() ?>/assets/js/jquery.slimscroll.js"></script>
<script src="<?php echo base_url() ?>/assets/js/jquery.blockUI.js"></script>
<script src="<?php echo base_url() ?>/assets/js/waves.js"></script>
<script src="<?php echo base_url() ?>/assets/js/jquery.nicescroll.js"></script>
<script src="<?php echo base_url() ?>/assets/js/jquery.scrollTo.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/dataTables.bootstrap4.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/dataTables.buttons.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/buttons.bootstrap4.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/jszip.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/pdfmake.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/vfs_fonts.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/buttons.html5.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/buttons.print.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/buttons.colVis.min.js"></script>
<!-- Responsive examples -->
<script src="<?php echo base_url() ?>/assets/plugins/datatables/dataTables.responsive.min.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/datatables/responsive.bootstrap4.min.js"></script>
<!-- Datatable init js -->
<script src="<?php echo base_url() ?>/assets/pages/datatables.init.js"></script>
<!-- App js -->
<script src="<?php echo base_url() ?>/assets/js/app.js"></script>
<script src="<?php echo base_url() ?>/assets/plugins/summernote/summernote-bs4.min.js"></script>
<script type="text/javascript">
	
	var base_url = "<?php echo base_url() ?>";
	$.validator.addMethod("customEmail", function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
    }, "Please enter valid email address!");

	$.validator.addMethod("inputText", function(value, element) {
        return this.optional(element) || /^[a-z\ \s]+$/i.test(value);
    }, "Name must contain only letters & space");

    $.validator.addMethod("phoneUS", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\+?1-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}-?\d{4}$/);
    }, "Please specify a valid phone number");

    $(document).on('change','#setting_configuration_form :input[name=website_address]',function() {
        let current_url = $(this).val();
        if( current_url && current_url.search(new RegExp(/^http:\/\//i)) && current_url.search(new RegExp(/^https:\/\//i))) {
            current_url = 'https://'+current_url;
            $(this).val(current_url);
        }
    });

    function notify_success(message) {
        let html_str = '<div class="alert alert-success text-center" role="alert"><b>'+ message +'</b></div>';
        $('#alert_message').fadeIn();
        $('#alert_message').html(html_str).fadeOut(3000);
    }
    function notify_error(message = '') {
        if (message === '') {
            message = "Sorry, we have to face some technical issues please try again later."
        } 
        let html_str = '<div class="alert alert-danger text-center" role="alert"><b>'+ message +'</b></div>';
        $('#alert_message').fadeIn();
        $('#alert_message').html(html_str).fadeOut(3000);
    }

    
</script>

