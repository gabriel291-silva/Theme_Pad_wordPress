<?php
// Crie uma instância de WP_Query
$args = array(
    'post_type' => 'paletas', // Tipo de post (pode ser personalizado)
    'posts_per_page' => -1, // -1 para listar todos os posts ou um número para limitar
);

$query = new WP_Query($args);

// Verifique se existem posts
if ($query->have_posts()) :
    while ($query->have_posts()) : $query->the_post();
        // Aqui você pode exibir informações do post
        the_title(); // Título do post
        the_content(); // Conteúdo do post
    endwhile;
    wp_reset_postdata(); // Restaure os dados originais do post
else :
    echo 'Não foram encontrados posts.';
endif;
?>

<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
    <input type="hidden" name="action" value="criar_post_personalizado">
    <label for="titulo">Título:</label>
    <input type="text" name="titulo" id="titulo" required>
    <label for="conteudo">Conteúdo:</label>
    <textarea name="conteudo" id="conteudo" required></textarea>
    <input type="submit" value="Enviar">
</form>