<?php defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * @author Dhyey Rathod
 */
class APImodel extends CI_Model
{	
	public function __construct()
	{
    	parent::__construct();
    	$this->load->database();
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
    public function get_skill($skills_id = NULL , $limit = NULL)
    {
        $this->db->select('*');
        $this->db->from('skills');
        if ($skills_id != NULL && is_numeric($skills_id)) {
            $this->db->where('id', $skills_id);
            $query = $this->db->get();
            return $query->row();
        }
        if ($limit != NULL) {
            $this->db->limit($limit,0);
        }
        $this->db->order_by("id", "random");
        $query = $this->db->get();
        return $query->result();
    }
}