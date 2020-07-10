<?php defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @author Dhyey Rathod
 */
class Authcontroller extends MY_Controller
{
	protected $data = array();

    protected $response = array();

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Websitemodel','websitemodel');
	}
	public function login()
	{
		$this->load->view('admin/login_view');
	}
	public function login_process()
	{
		if ($this->input->server('REQUEST_METHOD') == 'POST') {
			$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
			$this->form_validation->set_rules('password', 'Password', 'required');
			if ($this->form_validation->run()) {
				$email = $this->security->xss_clean($this->input->post('email'));
				$password = $this->security->xss_clean($this->input->post('password'));
				$auth_response = $this->websitemodel->checkauth($email , $password);
				if ($auth_response) {
					$session_array['user_id'] = $auth_response->id;$session_array['user_email'] = $auth_response->email;
					$this->session->set_userdata($session_array);
					$this->response['status'] = 'T';
					$this->response['message'] = 'Success';
					$this->response['data'] = $auth_response;
				} else {
					$this->response['status'] = 'F';
					$this->response['message'] = 'Your email id and password dose not match.';
				}
			} else {
				if (validation_errors()) {
					$this->response['status'] = 'F';
					$this->response['message'] = validation_errors();
				} else {
					$this->response['status'] = 'F';
					$this->response['message'] = 'Sorry, we have to face some technical issues please try again later.';
				} 
			}
			return $this->output->set_content_type('application/json')->set_output(json_encode($this->response));
		}
	}
}