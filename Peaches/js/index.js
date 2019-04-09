var scroll = new SmoothScroll('a[href*="#"]');

const mySiema = new Siema({
  duration: 250,
  loop: true,
  perPage: {
    380: 1,
    768: 2,
    1024: 3,
  },
});
setInterval(() => mySiema.next(), 2000)
