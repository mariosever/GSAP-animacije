// Navbar

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-94px";
    }

    prevScrollpos = currentScrollPos;

}

// Hambi

const hambi = document.querySelector('#hambi');

hambi.onclick = function() {
    this.classList.toggle('open');
    document.getElementById("mobileNav").classList.toggle('mobile-open');
}

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


hambi.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
});


const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
