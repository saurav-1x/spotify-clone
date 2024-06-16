document.addEventListener('DOMContentLoaded', () => {

    const searchBar=document.getElementById("search");
    searchInput.addEventListener('focus', () => {
        searchBar.classList.add('active');
    });

    document.addEventListener('click', (event) => {
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.classList.remove('active');
        }
    });
})
