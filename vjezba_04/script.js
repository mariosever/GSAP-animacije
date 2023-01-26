gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },
  // for mobile
  smartphone: { smooth: true }
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



