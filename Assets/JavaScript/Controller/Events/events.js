document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13 && searchInFocus) {
        e.preventDefault();
        newSearch();
    }
}, false)


var searchInFocus = false;

function newSearch() {
    var search = document.getElementById('searchInput').value.trim();
    if (search.length <= 0) {
        return;
    }
    sessionStorage.searchInput = search;
    window.location = './search.html';
}

document.getElementById('searchButton').addEventListener('click', function (e) {
    e.preventDefault();
    newSearch();

}, false);


document.getElementById('searchInput').addEventListener('focus', function () {
    searchInFocus = true;
}, false);

document.getElementById('searchInput').addEventListener('blur', function () {
    searchInFocus = false;
}, false);