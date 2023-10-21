<?php if (have_posts()) : while (have_posts()): the_post(); ?>
    <h1>teste</h1>
    <?php the_content(); ?>
        <?php endwhile; else: ?>
            <div class='artigo'>
                <h2>nada encontrado</h2>
                <p>erro 404</p>
                <p>pagina não encontrada</p>
            </div>
            <?php endif; ?>
 