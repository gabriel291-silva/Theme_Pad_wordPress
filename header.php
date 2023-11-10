<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
	<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />

	<

	<style>
		#menu-header-desktop{
			font-weight: bold;
			text-transform: uppercase;
			gap: 30px;
		}
	</style>
	</head>
  	<body <?php body_class(); ?>>
    	<!-- Cabeçalho da página -->
    	<header id="header" class="container-header">

		<div class="container-header-content">
			<div class="container-header-logo-container">
				<img class="container-header-logo-container" src="http://localhost/wordpress/wp-content/uploads/2023/11/2.png" alt="">
			</div>
			<div class="container-header-menu">
				<div class="container-header-info">
					<a href="" class="container-header-login-user">
						User login
					</a>
				</div>
				<div class="container-header-departamentos">
					<?php wp_nav_menu(array('theme_location' => 'header-menu','container_class' => 'menu-header-desktop-container')); ?>
				</div>

			</div>
		</div>
			
		</header>

		