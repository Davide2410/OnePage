let btn = document.querySelector('#btn')

window.onscroll =
function scrollTop() {
    if (document.documentElement.scrollTop > 20) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}
function saliTop() {
    document.documentElement.scrollTop = 0;
}
