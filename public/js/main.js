
$( document ).ready(function() {

  // Se setea como enlace activo el Inicio al cargar la página
  $('.navbar__menu .navbar__link:first').addClass('is-active');

  //Función de smooth para el scroll  
  $('.navbar a[href^="#"]').click(function() { 
    
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 900);
    return false;
  });

   var navBarTransform = new Waypoint({
   
    element: document.getElementById('h-wp'),
    handler: function() {
      $('.navbar').toggleClass('is-transform');
    },
    offset: -100
    
  })

  //Shadow al Navbar y efecto a la transición about/inicio

  var navBarShadow = new Waypoint({
   
    element: document.getElementById('about'),
    handler: function(direction) {
      // Añade shadow al navbar
      $('.navbar').toggleClass('is-shadow');   

      // efecto mencionados
      $('.navbar__menu .navbar__link').removeClass('is-active');
      $(this.element.id).addClass('is-active');        

      if(direction ==='down'){
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu a[href="#about"]').addClass('is-active');
      }else{
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu .navbar__link:first').addClass('is-active');
      }
    },
    offset: 120
  })

  var services = new Waypoint({
   
    element: document.getElementById('services'),
    handler: function(direction) {
      
      $('.navbar__menu .navbar__link').removeClass('is-active');
      $(this.element.id).addClass('is-active');        

      if(direction ==='down'){
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu a[href="#services"]').addClass('is-active');
      }else{
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu a[href="#about"]').addClass('is-active');
      }
    },
    offset: 180
  })

  var staff = new Waypoint({
   
    element: document.getElementById('staff'),
    handler: function(direction) {
      
      $('.navbar__menu .navbar__link').removeClass('is-active');
      $(this.element.id).addClass('is-active');        

      if(direction ==='down'){
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu a[href="#staff"]').addClass('is-active');
      }else{
        $('.navbar__menu .navbar__link').removeClass('is-active');
        $('.navbar__menu a[href="#services"]').addClass('is-active');
      }
    },
    offset: 180
  })

 
  
});

  






    