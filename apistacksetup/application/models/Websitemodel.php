<?php defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @author Dhyey Rathod
 */
class Websitemodel extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
	}
	public function checkauth($email , $password)
	{
		$this->db->select('*');
		$this->db->from('users');
		$this->db->where('email',$email);
		$this->db->where('password',$password);
		$query = $this->db->get();
        return $query->row();
	}
	public function get_project($project_id = NULL , $limit = NULL)
	{
		$this->db->select('*');
        $this->db->from('projects');
        if ($project_id != NULL && is_numeric($project_id)) {
        	$this->db->where('id', $project_id);
        	$query = $this->db->get();
        	return $query->row();
        }
        if ($limit != NULL) {
        	$this->db->limit($limit,0);
        }
        $query = $this->db->get();
        return $query->result();
	}
	public function add_new_project($project_data)
	{
		return $this->db->insert('projects',$project_data);
	}
	public function delete_project_by_id($project_id)
	{
		return $this->db->delete('projects',['id' => $project_id]);
	}
	public function add_new_skill($skill_data)
	{
		return $this->db->insert('skills',$skill_data);
	}
}