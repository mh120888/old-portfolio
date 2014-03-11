$( document ).ready(function() {
  MainContent.bindEvents();
});

var MainContent = {
  bindEvents: function() {
    $('a#home').on('click', MainContent.showHomeContent);
    $('a#about-me').on('click', MainContent.showAboutMeContent);
    $('a#portfolio').on('click', MainContent.scrollToPortfolio);
    $('a#contact').on('click', MainContent.scrollToFooter);
  },
  showHomeContent: function() {
    event.preventDefault();
    $('#about-me-content').hide();
    $('#welcome-image').show();
    $('#welcome-image').animate({left: '0%'}, 700);
  },
  showAboutMeContent: function() {
    event.preventDefault();
    $('#welcome-image').animate({left: '-75%'}, 700, function() { 
      $(this).hide();
      $('#about-me-content').show(); 
    });
  },
  scrollToPortfolio: function() {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $("#portfolio-content").offset().top
    }, 1000);
  },
  scrollToFooter: function() {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $("#footer-links").offset().top
    }, 1500);
  }
}