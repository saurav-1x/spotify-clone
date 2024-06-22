document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');

    if (query) {
        // Perform the search and display results
        document.getElementById('results').innerText = `Results for "${query}"`;
        
        // Here you would typically make an AJAX request to your server to get the search results
        // For example:
        fetch(`/search?query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                // Display the search results
            });
    } else {
        document.getElementById('results').innerText = 'No search query provided.';
    }
});
