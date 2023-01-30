gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


const sections = gsap.utils.toArray('section');

sections.forEach( function(section) {

  const inner = section.querySelector('.section-inner');

  if (section.classList.contains('horizontalScrolling')) {

    const scroll = section.querySelector('.data-scroll-in-section');

    // the tween and the pinning have two different ScrollTriggers, because the will need different durations for that overlaying-effect to show
    
    ScrollTrigger.create({

      scroller: '.smooth-scroll',
      trigger: section,
      start: 'center center',
      end: () => `+=${section.scrollWidth + window.innerHeight}`, // added an extra window.innerHeight to the end here in comparison to the tween
      pin: inner,
      pinSpacing: true,
      pinType: 'transform',
      anticipatePin: 1,
      
    })
    
    gsap.to(scroll, {
      x: () => `${-(section.scrollWidth - document.documentElement.clientWidth)}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: scroll,
        scroller: '.smooth-scroll',
        start: 'center center',
        end: () => `+=${section.scrollWidth}`,
        scrub: true,
      }
    });
    
  } 

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


// GSAP animacije
gsap.from('header h1, header p', {duration: .8, y: '20%', opacity: 0, stagger: .2})

gsap.from('.image_cont h3', 
    {duration: .8, opacity: 0,
    scrollTrigger: {
        trigger: ".image",
        scrub: 1,
        start: "top center",
    },
})

gsap.to(".text p", {
    backgroundPositionX: "0%",
    duration: 5,
    stagger: 1,
    scrollTrigger: {
        trigger: ".text",
        scrub: 1,
        start: "top center",
        end: "+=500"
    },
});

// Linija
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "-=170px"
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


var t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

t1.staggerFrom(
    ".menu > div",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.2",  // delay za pojedinačne linkove kad se otvaraju
    "-=0.4" // delay u minus za početak kompletne animacije, 
            // nemoj čekati da prethodna animacija završi 
            // nego kreni .4 sec ranije,
);

t1.staggerFrom(
    ".socials > span",
    0.8,
    { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.069",
    "-=0.6"
);

t1.reverse();

const html = document.querySelector('html');
const body = document.querySelector('body');
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");


menuOpen.addEventListener("click", function() {
    body.classList.add('disabledScroll');
    t1.reversed(!t1.reversed());
    locoScroll.stop();
});

menuClose.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
    body.classList.remove('disabledScroll');
    locoScroll.start();
});










