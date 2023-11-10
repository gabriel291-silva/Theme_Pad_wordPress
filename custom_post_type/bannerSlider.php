<?php
function registrar_post_type_banner() {
    $labels = array(
        'name' => 'BannersSlider',
        'singular_name' => 'BannersSlider',
        'add_new' => 'Adicionar Novo',
        'add_new_item' => 'Adicionar Novo Banner',
        'edit_item' => 'Editar Banner',
        'new_item' => 'Novo Banner',
        'view_item' => 'Ver Banner',
        'search_items' => 'Buscar Banners',
        'not_found' => 'Banner Não ',
        'not_found_in_trash' => 'No se encontraron Banners en la papelera',
        'parent_item_colon' => 'Banner Padre:',
        'menu_name' => 'Banners Slider',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'banners'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 20,
        'supports' => array('title', 'imagem', 'custom-fields'),
    );

    register_post_type('BannersSlider', $args);
}

add_action('init', 'registrar_post_type_banner');


?>