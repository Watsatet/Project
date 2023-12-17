// button
const btn = document.getElementById("Hamburg");
btn.addEventListener('click', function () {
    const nav = document.getElementsByClassName('mobile-nav')[0];
    if (nav.style.display != 'none') {
        // Show the nav
        nav.style.display = 'none';
    } else {
        // Hide the nav
        nav.style.display = 'block';
    }
});
