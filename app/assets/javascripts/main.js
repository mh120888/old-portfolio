$( document ).ready(function() {
  MainContent.bindEvents();
  PortfolioContent.bindEvents();
  ResumeContent.bindEvents();
});

var MainContent = {
  bindEvents: function() {
    $('a#home').on('click', MainContent.showHomeContent);
    $('a#about-me').on('click', MainContent.showAboutMeContent);
    $('a#portfolio').on('click', MainContent.scrollToPortfolio);
    $('a#resume').on('click', MainContent.scrollToResume);
    $('a#contact').on('click', MainContent.scrollToFooter);
  },
  showHomeContent: function() {
    event.preventDefault();
    $('#about-me-content').animate({left: '-100%'}, 700, function() {
      $(this).hide();
      $('#welcome-image').show();
      $('#welcome-image').animate({left: '0%'}, 700);
    });
  },
  showAboutMeContent: function() {
    event.preventDefault();
    $('#welcome-image').animate({left: '-75%'}, 700, function() { 
      $(this).hide();
      $('#about-me-content').show();
      $('#about-me-content').animate({left: '0%'}, 700); 
    });
  },
  scrollToPortfolio: function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#portfolio-content").offset().top
    }, 1000);
  },
  scrollToResume: function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#resume-content").offset().top
    }, 1000);
  },
  scrollToFooter: function() {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("#footer-links").offset().top
    }, 1500);
  },
}