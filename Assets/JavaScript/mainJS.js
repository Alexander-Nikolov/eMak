var navigation = document.getElementById('navigation');
var fixedNav = document.getElementById('fixedNav');
window.addEventListener('scroll', function(e) {
    console.log(wrapper.scrollTop);
    if (window.scrollY >= 200) {
        navigation.style.position = 'fixed';
        navigation.style.top = '0px';
        navigation.style.width = '1170px';
        fixedNav.style.display = 'block';
    }

    if (window.scrollY < 200) {
        navigation.style.position = 'static';
        navigation.style.width = '100%';
        fixedNav.style.display = 'none';
    }
})