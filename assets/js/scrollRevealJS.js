// brand and title of all pages fade in.
ScrollReveal().reveal('.brand', { duration: 3000, reset: true });
ScrollReveal().reveal('#delay', { duration: 5000, reset: true });

ScrollReveal().reveal('.scroll1', { duration: 3000, reset: true });
ScrollReveal().reveal('.scroll2', { duration: 5000, reset: true });

// island cards rotate and delay for index page
// ScrollReveal().reveal('.header', { duration: 2000, reset: true });
ScrollReveal().reveal('.card', {interval: 200,
rotate: {
    x: 20,
    z: 20
}, reset: true
});