// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap animation
gsap.registerPlugin(CustomEase, ScrollTrigger)

// wrapper animation =============================
gsap.fromTo('.wrapper', {
  y: 150
}, {
  duration: 2,
  ease: "elastic.out(1.5,0.5)",
  y: 0
})
// wrapper animation =============================

// section space =================================
CustomEase.create(
  "space",
  // "M0,0 C0,0.408 0.475,0.998 0.531,1.05 0.589,1.103 0.584,1 1,1" goood
  "M0,0 C0,0.408 0.395,1.056 0.517,1.056 0.632,1.056 0.584,1 1,1 "
)

gsap.from('.space', {
  scrollTrigger: {
    trigger: '.main',
    start: '80% 0',
  },
  ease: "power1.in",
  yPercent: 70,
  duration: 1,
})

gsap.from('.space__title', {
  scrollTrigger: {
    trigger: '.main',
    start: '70% 0',
  },
  duration: 1,
  ease: "space",
  yPercent: 800,
  opacity: 0.5,
})
gsap.from('.space__list', {
  scrollTrigger: {
    trigger: '.main',
    start: '70% 0',
  },
  duration: 1,
  ease: "space",
  yPercent: 400,
  opacity: 0,
  delay: 0.2
})

const spaseColumn1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.main',
    start: '70% 0',
  }
}).from('.space__image', {
  duration: 3,
  ease: "elastic.out(1.5,1)",
  yPercent: 50,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2
})

// section space =================================

// section images =================================

gsap.from('.images__image-1', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: -100,
  yPercent: -100
})

gsap.from('.images__image-2', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: -200,
  yPercent: -800,
  delay: 0.5
})

gsap.from('.images__image-3', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 200,
  yPercent: -800
})

gsap.from('.images__image-4', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 100,
  yPercent: -100
})

gsap.from('.images__image-5', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  yPercent: -400
})

gsap.from('.images__image-6', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: -100,
  yPercent: 100
})

gsap.from('.images__image-7', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 200,
  yPercent: 250
})

gsap.from('.images__image-8', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 400,
  yPercent: -250
})

gsap.from('.images__image-10', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 100,
  yPercent: 100
})

gsap.from('.images__image-11', {
  scrollTrigger: {
    trigger: '.images',
    start: '30% 100%',
    end: 'center 55%',
    scrub: true,
  },
  xPercent: 200,
  yPercent: 100
})

// section images =================================

// section tariffs =================================
gsap.from('.tariffs__animate', {
  scrollTrigger: {
    trigger: '.tariffs',
    start: 'top 40%'
  },
  y: 50,
})
// section tariffs =================================

// section reliable =================================

gsap.from('.reliable__image', {
  scrollTrigger: {
    trigger: '.reliable',
    start: 'bottom 100%'
  },
  yPercent: 120,
})

// section reliable =================================
