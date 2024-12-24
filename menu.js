function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", () => {
const project = document.getElementsByClass("prj");
const contact = document.getElementsByClass("cnt");
const s1 = document.querySelectorAll(".scroll-container")[0];
const s2 = document.querySelectorAll(".scroll-container")[1];
s1.style.display = "none";
s2.style.display = "none";
contact[0].addEventListener("click", () => {
    if ( s1.style.display !== "none") {
            $("#s1").fadeOut();
            $("#s2").fadeIn();
    }
    else 
    {
        $("#s2").fadeIn();
    }
});
project[0].addEventListener("click", () => {
    if  (isMobileDevice()) {
        window.location.href = "https://github.com/ricurry";
    }
    else{
    if ( s2.style.display !== "none") {
        $("#s2").fadeOut();
        $("#s1").fadeIn();
    }
    else 
    {
        $("#s1").fadeIn();
    }
}
});
});