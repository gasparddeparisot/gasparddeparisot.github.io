// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Tout juste diplômé de l’école d’ingénieur généraliste ECAMLaSalle ⚙ et de l’Université de Sherbrooke en Maîtrise en Génie Aérospatial 🛩 🚀 , je suis actuellement à la recherche d'opportunités (CDI) dans le secteur aérospatial en France ou en Europe. Mes stages dans des entreprises leaders de l'industrie m'ont permis de développer ma rigueur et une grande capacité à travailler en équipe. Je suis passionné par l'innovation et la découverte de nouvelles technologies et je suis impatient de relever de nouveaux défis professionnels dans une entreprise dynamique. Ce site présente mon parcours et mes expériences professionnelles. Bonne visite !"],
  typeSpeed: 20,
});
  
// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 800,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();