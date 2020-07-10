<?php defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @author Dhyey Rathod
 */
class HomeController extends MY_Controller
{
	private $response = array();

	private $data = array();

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Websitemodel','websitemodel');
	}
	public function indexmethod()
	{
		echo "Hello world";
	}
	public function dashboard()
	{
		$this->load->view('admin/dashboard_view');
	}
	public function add_new_project()
	{
		$this->load->view('admin/add_new_project_view');
	}
	public function project_process()
	{
		if ($this->input->server('REQUEST_METHOD') === 'POST') {
			$this->form_validation->set_rules('title', 'Title', 'required');
			$this->form_validation->set_rules('website_url','Website URL','required|prep_url');
			$this->form_validation->set_rules('description','Description','required');	
			$this->load->library('upload', project_image_config());
			if ($this->upload->do_upload('project_file') && $this->form_validation->run()) {
				$insert_stack['title'] = $this->security->xss_clean($this->input->post('title'));
				$insert_stack['file_name'] = 'project_images/'.$this->upload->data('file_name');
				$insert_stack['website_url'] = $this->security->xss_clean($this->input->post('website_url'));
				$insert_stack['description'] = $this->security->xss_clean($this->input->post('description'));
				$project_query_response = $this->websitemodel->add_new_project($insert_stack);
				if ($project_query_response === TRUE) {
					$this->response['status'] = 'T';
					$this->response['message'] = 'Your project has been added successfully.';
				} else {
					$this->response['status'] = 'F';
					$this->response['message'] = 'Sorry, we have to face some technical issues please try again later.';
				}
			} else {
				$this->response['status'] = 'F';
				if (validation_errors()) {
					$this->response['message'] = validation_errors();
				}
				if ($this->upload->display_errors()) {
					$this->response['message'] = $this->upload->display_errors();
				}
			}
			return $this->output->set_content_type('application/json')->set_output(json_encode($this->response));
		}
	}
	public function project_list()
	{
		$this->data['project_list'] = $this->websitemodel->get_project();
		$this->load->view('admin/project_list_view',$this->data);
	}
	public function delete_project()
	{
		if ($this->input->server('REQUEST_METHOD') === 'POST') {
			$project_id = base64_decode($this->input->post('project_id'));
			if (!empty($project_id) && is_numeric($project_id)) {
				$project_query_response = $this->websitemodel->delete_project_by_id($project_id);
				if ($project_query_response) {
					$this->response['status'] = 'T';
					$this->response['message'] = 'Your project has been deleted successfully!';
				} else {
					$this->response['status'] = 'F';
					$this->response['message'] = 'Sorry, we have to face some technical issues please try again later.';
				}
			} else {
				$this->response['status'] = 'F';
				$this->response['message'] = 'Sorry, we have to face some technical issues please try again later.';
			}
			return $this->output->set_content_type('application/json')->set_output(json_encode($this->response));
		}
	}
	public function add_new_skills()
	{
		$this->load->view('admin/add_new_skills_view');
	}
	public function skill_process()
	{
		if ($this->input->server('REQUEST_METHOD') === 'POST') {
			$this->form_validation->set_rules('skill_name', 'Skill name', 'required');
			$this->form_validation->set_rules('lavel', 'lavel', 'required');
			$this->form_validation->set_rules('description', 'Description', 'required');
			$this->load->library('upload', skill_image_config());
			if ($this->upload->do_upload('skill_file') && $this->form_validation->run()) {
				$insert_stack['skills_name'] = $this->security->xss_clean($this->input->post('skill_name'));
				$insert_stack['descriptions'] = $this->security->xss_clean($this->input->post('description'));
				$insert_stack['lavel'] = $this->security->xss_clean($this->input->post('lavel'));
				$insert_stack['image'] = 'skill_images/'.$this->upload->data('file_name');
				$skill_query_response = $this->websitemodel->add_new_skill($insert_stack);
				if ($skill_query_response === TRUE) {
					$this->response['status'] = 'T';
					$this->response['message'] = 'Your skill has been added successfully.';
				} else {
					$this->response['status'] = 'F';
					$this->response['message'] = 'Sorry, we have to face some technical issues please try again later.';
				}
			} else {
				$this->response['status'] = 'F';
				if (validation_errors()) {
					$this->response['message'] = validation_errors();
				}
				if ($this->upload->display_errors()) {
					$this->response['message'] = $this->upload->display_errors();
				}
			}
			return $this->output->set_content_type('application/json')->set_output(json_encode($this->response));
		}
	}
	public function logout()
	{
		$this->session->unset_userdata('user_id');
		$this->session->unset_userdata('user_email');
		redirect('login');
	}
}