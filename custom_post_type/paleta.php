<?php
function add_cpt() { 

    /* Informa os nomes que serão exibidos na dashboard do WordPress */
    $labels = [
        "name" => __( "paletas", "chaplin-child" ),
        "singular_name" => __( "paletas", "chaplin-child" ),
        "menu_name" => __( "paletas", "chaplin-child" ),
        "all_items" => __( "Todos as paletas", "chaplin-child" ),
    ];

    /* Informa os argumentos do custom post type */
    $args = [
        "label" => __( "paletas", "chaplin-child" ),
        "labels" => $labels,
        "description" => "Meus principais trabalhos reunidos em um lugar.",
        "public" => true,
           "has_archive" => true,
        "show_in_menu" => true,
        "delete_with_user" => false,
        "exclude_from_search" => false,
        "hierarchical" => false,
        "rewrite" => [ "slug" => "paletas", "with_front" => true ],
        "menu_icon" => "dashicons-text-page",
        "supports" => [ "title", "editor", "thumbnail", "excerpt", "comments", "revisions", "author", "page-attributes", "post-formats" ],
    ];

    /* Registra o custom post type */
    register_post_type( "paletas", $args );
}
/* Adiciona a função que acabou de ser criada */
add_action( 'init', 'add_cpt' );

?>