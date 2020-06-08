/*
Aggiungere la funzionalità di apertura/chiusura del menu all’hamburger menu(visibile in versione mobile) utilizzando jQuery.
*/

// Funzionalità di apertura hamburger menu
$('.header-right a:last-child i').click(
  function() {
    $('.hamburger-menu').addClass('close');
  }
);

// Funzionalità di chiusura hamburger menu
$('a.close i').click(
  function() {
    $('.hamburger-menu').removeClass('close');
  }
);
