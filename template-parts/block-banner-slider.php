<?php
// Crie uma instância de WP_Query
$args = array(
    'post_type' => 'BannersSlider', // Tipo de post (pode ser personalizado)
    'posts_per_page' => -1, // -1 para listar todos os posts ou um número para limitar
);

$query = new WP_Query($args);
?>
<?php
// Verifique se existem posts
if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();
    $post_id = get_the_ID(); // Ou você pode definir o ID manualmente

    $custom_field_name = 'imagem';      
    // Obtém o ID da imagem do campo personalizado
    $image_id = get_post_meta($post_id, $custom_field_name, true);

    // Verifica se a ID da imagem não está vazia
    if (!empty($image_id)) {
        // Obtém o URL da imagem usando a ID
        $image_url = wp_get_attachment_url($image_id);

        // Exibe a imagem
        echo '<img src="' . $image_url . '" alt="Minha Imagem Personalizada">';
    } else {
        echo 'Nenhuma imagem foi encontrada no campo personalizado.';
    }  
    
    ?>
        <div>
        
        </div>
        <?php
    endwhile;
    wp_reset_postdata(); // Restaure os dados originais do post
else :
    echo 'Não foram encontrados posts.';
endif;
?>
