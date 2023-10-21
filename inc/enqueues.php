<?php 
function importar_meu_css_personalizado() {
    // Use get_template_directory_uri() para obter o diretório do tema ativo
    wp_enqueue_style('nome-unico-para-seu-css', get_template_directory_uri() . '/../style.css', array(), '1.0', 'all');
}


add_action('wp_enqueue_scripts', 'importar_meu_css_personalizado');
?>