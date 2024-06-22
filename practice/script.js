document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const query = document.getElementById('searchInput').value;

        if (query) {
            // Redirect to the search results page with the query as a URL parameter
            window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
        }
    });
});
