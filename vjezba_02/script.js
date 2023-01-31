
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

// Ovdje pišemo JS kod

