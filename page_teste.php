<?php

/*
 * Template Name: plaeta page
 */

?>
 
<?php get_header(); ?>

<main id="content-page">
    <!-- LOOP -->
 
        <?php get_template_part( 'template-parts/block', 'title-paleta' ); ?>

        <?php get_template_part( 'template-parts/block', 'list-paleta' ); ?>


</main>

<?php get_footer(); ?>