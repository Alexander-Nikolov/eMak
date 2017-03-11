document.body.onload = function() {
    var search = sessionStorage.searchInput || '...';
    document.getElementById('searchResult').innerHTML = 'Резултати за: \" ' + search + ' \"';

    productSections.displaySearchResult(search);
}
