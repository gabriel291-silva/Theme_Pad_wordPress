<?php


require get_template_directory() . '/custom_post_type/paleta.php';
require get_template_directory() . '/custom_post_type/bannerSlider.php';


wp_enqueue_style( 'style', get_stylesheet_uri() );
wp_enqueue_style( 'style', get_stylesheet_uri() . '/styles/style.css', false, '1.1', 'all');


function processar_formulario_post() {
    if (isset($_POST['titulo']) && isset($_POST['conteudo'])) {
        $titulo = sanitize_text_field($_POST['titulo']);
        $conteudo = wp_kses_post($_POST['conteudo']);
        
        // Crie um novo post
        $novo_post = array(
            'post_title' => $titulo,
            'post_content' => $conteudo,
            'post_status' => 'publish',
            'post_type' => 'paletas' // Ou substitua por um tipo de post personalizado, se aplicável
        );

        $post_id = wp_insert_post($novo_post);

        if ($post_id) {
            // Redirecione o usuário para a página de sucesso ou exiba uma mensagem de sucesso
            echo 'criou o post.';
            exit();
        } else {
            // Exiba uma mensagem de erro
            echo 'Ocorreu um erro ao criar o post.';
        }
    }
}

add_action('admin_post_nopriv_criar_post_personalizado', 'processar_formulario_post');
add_action('admin_post_criar_post_personalizado', 'processar_formulario_post');

function register_my_menus() {
    register_nav_menus(
      array(
        'header-menu' => __( 'Header Menu' ),
        'extra-menu' => __( 'Extra Menu' )
       )
     );
   }
   add_action( 'init', 'register_my_menus' );

?>