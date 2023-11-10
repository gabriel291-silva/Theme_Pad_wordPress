// Main Inicializado!
console.log('%cCRP Mango: Main.js Inicializado!', 'padding: 2px 10px; background-color: green; color:#FFF;');


(function($, scope){

	this.MainClass = {
		// Document Ready Scope CRP Mango
    ready: function(){
      $(document).trigger('crpmango.ready');
      
      var postShare = $('.post-share');
      if( postShare[0] ){
        postShare.socialLinkBuilder({
          gplus: {
            isUsed: false
          }
        });
        postShare.append('<a title="Whatsapp" rel="nofollow" href="https://api.whatsapp.com/send?text=' + encodeURIComponent(document.title + " " + window.location.href) +'" class="botao-wpp" target="blank_"><?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m256.06 0h-0.128c-141.15 0-255.94 114.82-255.94 256 0 56 18.048 107.9 48.736 150.05l-31.904 95.104 98.4-31.456c40.48 26.816 88.768 42.304 140.83 42.304 141.15 0 255.94-114.85 255.94-256s-114.78-256-255.94-256zm148.96 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"/></svg></a>');
      }

      // Adicionar animação no logotipo
      //$('.logo-rio-oil-gas').addClass('active');
    },
    // Document OnLoad Scope CRP Mango
    load: function(){
      $(document).trigger('crpmango.load');
      this.gallery();

      //this.faqSearchText( $('#faqSearch') );

      // $(document).on('click', '.carregar-eventos', function(){
      //   _this = $(this);
      //   _saveTextButton = _this.text();
      //   $.ajax({
      //     url : window.location.protocol+'//'+window.location.host+'/wp-admin/admin-ajax.php',
      //     data:{
      //       'action': 'loadmoreeventos',
      //       'page' : _this.data('page')
      //     },
      //     type:'POST',
      //     beforeSend: function( xhr ){
      //       console.log('carregando...')
      //       _this.text('Carregando...');
      //     },
      //     success:function(data){
      //       console.log('retorno:',data);
      //       $( _this.data('out') ).append(data);
      //       _this.text(_saveTextButton);
      //       if( _this.data('page') >= (_this.data('total')-1) ){
      //         _this.remove();
      //       }else{
      //         _this.data('page', (_this.data('page')+1));
      //       }

      //     }
      //   });
      // });
    },
    // Init Scope CRP Mango
    init: function(){
      $(document).trigger('crpmango.init');

      // Inicializando as funções comuns a todas as páginas
      this.header();
      this.common();
      this.footer();
      this.popUpComite();
      this.programacao();
      this.palestrantes();

      // ******************
      
      var prgAccordion = $('.prg-accordion');
      if( prgAccordion[0] ){
        prgAccordion.find('.prg-accordion--title').on('click', function(){
          var 
          _this = $(this),
          _thisParent = _this.parent(),
          _filter = _thisParent.data('filter-dia');
          
          if( _thisParent.hasClass('active') ){
            _thisParent.removeClass('active');
          }else{
            _thisParent.addClass('active');
          }
          _this
            .closest('.prg-accordion')
            .find('.prg-accordion--item')
            .not('[data-filter-dia="'+_filter+'"]')
            .removeClass('active');
        });
        
        prgAccordion.find('.prg-accordion--item .prg-accordion--inner .tema').on('click', function(){
          var _this = $(this);
          console.log(_this.hasClass('active'));
          if( _this.hasClass('active') ){
            _this.removeClass('active');
          }else{
            _this.closest('.prg-accordion').find('.prg-accordion--item .prg-accordion--inner .tema').removeClass('active');
            _this.addClass('active');
          }
        });
      }

      $('.search-tema').keyup(function(){
        var _this = $(this);
        var _searchTarget = _this.data('search-target');
        var _searchWordsIn = _this.data('search-words-in');
        var _elmSearchTarget = $(_searchTarget);
        var text = _this.val();
        
        _elmSearchTarget.find(_searchWordsIn).hide();
        _elmSearchTarget.find(_searchWordsIn + ' a:contains("'+text+'")').parent().show();
      });

      $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
         return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
      });
      
    },

    // Function Header
    // Funções JS presentes no Header
    header: function(){ 

      $('.menu-mobile-button').on('click', function(){
        $(this).toggleClass('open');
        $(this).toggleClass('collapse');
        $("#header-mobile-menu").slideToggle('slow');
      });

      $('.menu-item-has-children').hover(
        function () {
          $(this).addClass('open');
        }, 
        function () {
          $(this).removeClass('open');
        }
      );

    },

    footer: function(){

      $(".backtop").on("click", function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

    },

    palestrantes: function(){
      /** */
      function searchLetter( elm ){
        var
          _this = elm,
          _searchTarget = _this.data('search-target'),
          _searchWordsIn = _this.data('search-words-in'),
          _elmSearchTarget = $(_searchTarget),
          _text = _this.val();
        _elmSearchTarget.hide().find( _searchWordsIn + ':contains("'+_text+'")').closest(_searchTarget).fadeIn(222);
      }

      /**
       * Search words inputs from div
       */
      $('.search-palestrantes').keyup(function(){
        searchLetter($(this));
      });

      /**
       * Abrir box com as letras
       */
      $(document).on('click', '.button-letters', function(e){
        e.preventDefault();
        $('.letters').stop(true,true).fadeToggle('slow');
        //$( $('.search-palestrantes').data('search-target') ).show();
        return;
      });

      /**
       * Abrir box com as letras
       */
      $(document).on('click', '#letra-limpa', function(e){
        e.preventDefault();
        $('.letters').stop(true,true).fadeToggle('slow');
        $( $('.search-palestrantes').data('search-target') ).show();
        $('.letra_escolhida').html('');
        return;
      });

      /**
       * Clique para filtar por letras
       */
      $('.letters li').on('click', function(){
        var 
        _this = $(this),
        _takeLetter = _this.text(),
        _divTarget = $('.search-palestrantes'),
        _totalResult = 0;
        $(_divTarget.data('search-target')).hide();
        $( _divTarget.data('search-words-in') ).each(function(i) {
          var
            _this = $(this),
            letter = jQuery.trim(_this.text());
          if ( RegExp('^'+_takeLetter).test(letter) ) {
            _this.closest( _divTarget.data('search-target') ).fadeIn(222);
            _totalResult++;
          }
        });
        $('.letters').stop(true,true).fadeToggle('slow'); // Ocultar
        $('.letra_escolhida').html(_takeLetter);
      });

      /**
       * Click: Exibir desrição completa
       */
      $(document).on('click', '.click-palestrantes-show-desc, .click-palestrantes-close-desc', function(e){
        e.preventDefault();
        var _this = $(this);
        _this.closest('.palestrantes__col').find('.palestrantes__descricao, .palestrantes__more').toggleClass('show');
      });

    },
    programacao: function(){

      // ******************
      $('.click-modal-inner').on('click', function(e){
        e.preventDefault();
        var _this = $(this);
        //alert('click-modal-inner test');
        $('.block-filtr').addClass('d-none');
        $('.click-modal-inner').removeClass('active');
        _this.addClass('active').next('.block-filtr').removeClass('d-none');
      });

      $(document).on('click', '.block-filtr a', function(e){
        $('#modalFilter').modal('hide')
      });

      // ******************
      
      // Funcao para limpar todo filtro
      function filterClearAll(){
        $('.prg-accordion').find('[data-filter-dia],[data-filter-tema],[data-filter-evento]').removeClass('hide');
        $('.filtros').find('.dias a, .temas a, .eventos a').removeClass('active');
      }

      // Limpar filtro
      $(document).on('click', '.filtros .limpar', function(e){
        e.preventDefault();
        filterClearAll();
      });

      var tabProgramacao = $('.tab-programacao');
      if( tabProgramacao[0] && !tabProgramacao.hasClass('eventos-paralelos') ){

        _prgAccordion = $('.prg-accordion');

        // Filtar por Dias
        tabProgramacao.on('click', '.dias a', function(e){
          e.preventDefault();
          var _this = $(this);
          filterClearAll();
        
          if( !_this.hasClass('active') ){
            
            _this.parent().find('a').removeClass('active');
            _this.addClass('active');

            _prgAccordion.find('[data-filter-dia]').addClass('hide').closest('.prg-accordion--item').addClass('hide');
            _prgAccordion.find('[data-filter-dia="' + _this.data('dia') + '"]').removeClass('hide').closest('.prg-accordion--item').removeClass('hide').addClass('active');
          }else{
            
            _prgAccordion.find('[data-filter-dia]').removeClass('hide');
            _this.removeClass('active');
          }
        
        });

        // Filtar por Tema
        tabProgramacao.on('click', '.temas a', function(e){
          e.preventDefault();
          var _this = $(this);
          filterClearAll();
        
          if( !_this.hasClass('active') ){
            
            _this.parent().parent().find('a').removeClass('active');
            _this.addClass('active');

            _prgAccordion.find('[data-filter-tema]').addClass('hide').closest('.prg-accordion--item').addClass('hide');
            _prgAccordion.find('[data-filter-tema="' + _this.data('tema') + '"]').removeClass('hide').closest('.prg-accordion--item').removeClass('hide').addClass('active');

          }else{
            _prgAccordion.find('[data-filter-tema]').removeClass('hide');
            _this.removeClass('active');

          }
        
        });

        // Filtar por Eventos
        tabProgramacao.on('click', '.eventos a', function(e){
          e.preventDefault();
          var _this = $(this);
          filterClearAll();
        
          if( !_this.hasClass('active') ){
            
            _this.parent().parent().find('a').removeClass('active');
            _this.addClass('active');
            
            _prgAccordion.find('[data-filter-evento]').addClass('hide').closest('.prg-accordion--item').addClass('hide');
            _prgAccordion.find('[data-filter-evento="' + _this.data('evento') + '"]').removeClass('hide').closest('.prg-accordion--item').removeClass('hide').addClass('active');

          }else{
            
            _prgAccordion.find('[data-filter-evento]').removeClass('hide');
            _this.removeClass('active');

          }
        
        });


      }
    },

    popUpComite: function(){
      $(".comites .block-content > ul > li").click(function (event) {
        event.preventDefault();
        $(this).next('.cd-popup').addClass('is-visible');
        // $(this).parent().find('.cd-popup').addClass('is-visible');
      });
      //close popup
      $('.cd-popup').on('click', function(event){
          if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup-close2') || $(event.target).is('.cd-popup') ) {
              event.preventDefault();
              $(this).removeClass('is-visible');
          }
      });
      // $('.cd-popup-close').on('click', function(event){
      //     alert('oi');
      //     $('.cd-popup').removeClass('is-visible');
      // });
      //close popup when clicking the esc keyboard button
      $(document).keyup(function(event){
          if(event.which=='27'){
              $('.cd-popup').removeClass('is-visible');
          }
      });
    },

    // Function Common
    // Inserir aqui o js comum a todas as páginas!
    common: function(){

    	// Função para inicializar Funções em páginas específicas!
    	var _page = jQuery('body').attr('class'), _page = _page.split(' ');
      if(_page.length){
        _page.map(function(e,i){
          if(typeof scope.pages[e] == 'function'){
            console.log('%cCRP Mango: Iniciando JavaScript Específico!','padding: 2px 10px; background-color: green; color: #FFF;');
            scope.pages[e].call(scope);
          }
        });
      }
      
      // Função do Acordeon
      $('.acordeon-title').on('click', function(){
        $(this).parent().toggleClass('active').find(".acordeon-content").slideToggle('fast');
      });


    },

    faqSearchText : function( elm ){
      searchout = elm.data('searchout');
      elm.on('keypress', function(){
        var _this = $(this);
        var text = _this.val();
        var query = new RegExp("(\\b" + text + "\\b)", "gim");
        var e = $(searchout).html();
        var enew = e.replace(/(<span>|<\/span>)/igm, "");
        // $(searchout).html( enew );
        var newe = enew.replace(query, "<span>$1</span>");
        // $(searchout).html(newe);
        console.log(newe);
      });
        
    },

    listaExpositores : function(){
      
      var lista_expositores = $('input[name=lista-expositores]').val();
      htmlFormat = function(data){
        return '\
        <div data-id="" class="expositor-item">\
          <div class="expositor-image">\
            <img src="'+data['logo']+'" />\
          </div>\
          <div class="expositor-resume">\
            <p class="name"><a href="//'+data['site'].replace(/^http(s?):\/\//i, "")+'" target="blank_">'+data['nome']+'</a></p>\
            <p class="pavilhao"><span class="en">Pavilion:</span><span class="pt-br">Pavilhão:</span> '+data['pavilhao']+'</p>\
            <p class="estande"><span class="en">Booth:</span><span class="pt-br">Estande:</span> '+data['stand']+'</p>\
            <p class="estande"><a href="//'+data['site'].replace(/^http(s?):\/\//i, "")+'" target="blank_"><em><small  class="size-14">'+data['site']+'</small></em></a></p>\
          </div>\
        </div>';
      };

      buttonsNextPrev = function(){
        if( $('#expositores').hasClass('pt-br')){
          $('.paginationjs-prev a').text('Anterior');
          $('.paginationjs-next a').text('Próximo');
        }else{
          $('.paginationjs-prev a').text('Previous');
          $('.paginationjs-next a').text('Next');
        }
      };

      $(document).on('click', '.button-letters', function(e){
        e.preventDefault();
        jQuery('.letters').stop(true,true).fadeToggle('slow');
        return;
      });

      $(document).on('click', '#letra-limpa', function(e){
        e.preventDefault();
        jQuery('.letters').stop(true,true).fadeToggle('slow');
        $('#expositores').pagination({
          dataSource: JSON.parse(lista_expositores),
          pageSize: 9,
          callback: function(data, pagination) {
              // template method of yourself
              buttonsNextPrev();
              
              lista = '';
              for(i = 0; i < data.length; i++) {
                html = htmlFormat(data[i]);
                lista = lista + html;
              }
              $('.expositores-data').html(lista);
          }
        });
        return;
      });


      $('#expositores').pagination({
        dataSource: JSON.parse(lista_expositores),
        pageSize: 9,
        callback: function(data, pagination) {
            // template method of yourself
            buttonsNextPrev();
            
            lista = '';
            for(i = 0; i < data.length; i++) {
              html = htmlFormat(data[i]);
              lista = lista + html;
            }
            $('.expositores-data').html(lista);
        }
      });

      $('.letters li').on('click', function(){
        letra = $(this).text();
        lista_a_se_filtrada = JSON.parse(lista_expositores);
        lista_filtrada = crpmango.filterArray(lista_a_se_filtrada, 'nome', letra);
        console.log(lista_filtrada);

        $('#expositores').pagination({
          dataSource: lista_filtrada,
          pageSize: 9,
          callback: function(data, pagination) {
              // template method of yourself
              buttonsNextPrev();
              
              lista = '';
              for(i = 0; i < data.length; i++) {
                html = htmlFormat(data[i]);
                lista = lista + html;
              }
              $('.expositores-data').html(lista);
          }
        });


      });

      // Buscar pelo campo input:text
      $('input.instant-search').on('keyup', function(){
        var _this = $(this);
        term = _this.val();
        listFilter = JSON.parse(lista_expositores);

        arr = $.grep(listFilter, function( n, i ) {
          var query = new RegExp("("+term.toLowerCase()+")", "gi");
          return query.test(n.nome.toLowerCase());
        });
        
        $('#expositores').pagination({
          dataSource: arr,
          pageSize: 9,
          callback: function(data, pagination) {
              // template method of yourself
              $('.paginationjs-prev a').text('Anterior');
              $('.paginationjs-next a').text('Próximo');
              
              lista = '';
              for(i = 0; i < data.length; i++) {
                html = htmlFormat(data[i]);
                lista = lista + html;
              }
              $('.expositores-data').html(lista);
          }
        });
      });
      /** */
    },

    gallery : function(){
      var gallery = $('.gallery');
      if( gallery[0] ){
        gallery.each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: 'a', // the selector for gallery item
              type: 'image',
              gallery: {
                enabled:true
              }
          });
        });
      }
    },

    acordeon: function(){

    },

    filterArray: function(array, prop, value){
      return $.grep(array, function( n, i ) {
        return n[prop][0] == value;
      });
    },

    // Funções de páginas específicas
    // Inserir aqui função para cada página que tenha recursos específicos!
    pages: {

    	// Funções específicas para home page!
      'home': function(){
        console.log('%cCRP Mango: JavaScript Home Iniciado!', 'padding: 2px 10px; background-color: green; color: #FFF;');

        
        $(".banners").slick({
          dots: true,
          arrows: true,
          // adaptiveHeight: false,
          infinite: false,
          responsive: [
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
        });
        $(".banners").find('.banners__item').removeClass('d-none');
        
        
      },

      'page-id-126': function(){
        this.listaExpositores();
      },
      'page-id-2422': function(){
        this.listaExpositores();
      }

    }
  };


  // Criação e inicialização do escopo da função principal
  scope = this.MainClass;
  scope.init();
  window.crpmango = scope;

  // Scope.Ready and Scope.Load
  $(document).ready(function(){ scope.ready(); });
  $(window).on('load',function(){ scope.load(); });
})(jQuery, {});