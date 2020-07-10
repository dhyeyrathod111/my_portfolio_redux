<?php

function project_image_config() {
	$config['upload_path'] = './project_images/';
    $config['allowed_types'] = '*';
    $config['encrypt_name'] = TRUE;
    return $config ;
}

function skill_image_config() {
	$config['upload_path'] = './skill_images/';
    $config['allowed_types'] = '*';
    $config['encrypt_name'] = TRUE;
    return $config ;
}
