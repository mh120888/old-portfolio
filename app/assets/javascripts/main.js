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
    $('.collapsible h2').hover(function(){$(this).css('color', '#00D5FF')}, function(){$(this).css('color', '#333')});
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

var PortfolioContent = {
  bindEvents: function() {
    $('#portfolio-content h2').on('click', PortfolioContent.showPortfolio);
  },
  showPortfolio: function() {
    $('#project-container').slideToggle(400);;
  }
}

var ResumeContent = {
  bindEvents: function() {
    $('#resume-content h2').on('click', ResumeContent.showResume);
  },
  showResume: function() {
    $('#resume-container').slideToggle(400);;
  }
}


// $('#portfolio-content div.project').hover(function(){console.log('in')}, function(){console.log('out')});