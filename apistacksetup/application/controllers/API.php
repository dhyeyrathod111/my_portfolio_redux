<?php defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @author Dhyey Rathod
 */
require APPPATH . 'libraries/REST_Controller.php';

class API extends REST_Controller
{
	public function __construct()
	{
		parent::__construct();
		header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
            die();
        } 
		$this->load->model('APImodel','api_model');
	}
	public function all_project_get()
	{
		$api_response['projects'] = $this->api_model->get_project();
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function project_details_get()
	{
		$project_id = $this->uri->segment(3);
		$api_response['projects'] = $this->api_model->get_project($project_id);
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function all_skill_get()
	{
		if ($this->uri->segment(3) === 'ALL') {
			$limit = NULL;
		} else {
			$limit = $this->uri->segment(3);
		}
		$api_response['skills'] = $this->api_model->get_skill(NULL,$limit);
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function skill_detail_get()
	{
		$skill_id = $this->uri->segment(3);
		$api_response['skills'] = $this->api_model->get_skill($skill_id);
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function contact_post()
	{
		$api_response['projects'] = $this->api_model->get_project();
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function contactus_post()
	{
		$this->form_validation->set_rules('name', 'Name', 'required');	
		$this->form_validation->set_rules('email', 'Email', 'required');	
		$this->form_validation->set_rules('contact', 'Contact', 'required');	
		$this->form_validation->set_rules('user_message', 'Message', 'required');	
		if($this->form_validation->run()){
			$insert_payload['name'] = $this->security->xss_clean($this->input->post('name'));
			$insert_payload['email'] = $this->security->xss_clean($this->input->post('email'));
			$insert_payload['contact_number'] = $this->security->xss_clean($this->input->post('contact'));
			$insert_payload['messsage'] = $this->security->xss_clean($this->input->post('user_message'));
			$insertContactRes = $this->api_model->new_contact_message($insert_payload);
			if($insertContactRes){
				$api_response['status'] = 'T';
                $api_response['message'] = 'Your query has been submited successfully.';
			} else {
				$api_response['status'] = 'F';
                $api_response['message'] = 'Sorry, we have to face some technical issues please try again later.';
			}
		} else {	
			$api_response['status'] = 'F';
            $api_response['message'] = validation_errors();
		}
		return $this->output->set_content_type('application/json')->set_output(json_encode($api_response));
	}
	public function contactus_options() {
        return $this->response(NULL, REST_Controller::HTTP_OK); 
    }
}