var navigation = document.getElementById('navigation');
var fixedNav = document.getElementById('fixedNav');
var toHome = document.getElementById('toHome');
window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 200 && window.innerWidth >= '1170') {
        navigation.style.position = 'fixed';
        navigation.style.top = '0px';
        navigation.style.width = '1170px';
        navigation.style.zIndex = '2';
        navigation.style.top = '5px';
        fixedNav.style.opacity = '0.9';
        fixedNav.style.zIndex = '2';
    } else {
        navigation.style.position = 'static';
        navigation.style.width = '100%';
        navigation.style.zIndex = '1';
        fixedNav.style.opacity = '0';
        fixedNav.style.zIndex = '-1';
    }

    if (window.scrollY >= 250) {
        toHome.style.bottom = '10px';
    } else {
        toHome.style.bottom = '-40px';
    }
})