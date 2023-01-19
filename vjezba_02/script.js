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

let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
});

menuClose.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
});