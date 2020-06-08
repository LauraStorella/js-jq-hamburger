/*
Aggiungere la funzionalità di apertura/chiusura del menu all’hamburger menu(visibile in versione mobile) utilizzando jQuery.
*/

// Funzionalità di apertura hamburger menu
$('.header-right a:last-child').click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// Funzionalità di chiusura hamburger menu
$('a.close').click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
