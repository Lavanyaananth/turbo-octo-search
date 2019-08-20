/* getting form */
const form = document.querySelector("#wiki-search");

/* Add event listeners to form */
form.addEventListener("submit", handleSubmit);

/* prevent page from reloading before form is submitted */
function handleSubmit(event){
    event.preventDefault();

    /* fetch input term */
    const input = document.querySelector("#search-field").value;
    const query = input.trim();
    fetchResults(query);
}

/* fetching results */
function fetchResults(query){
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${query}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const results = data.query.search;
        console.log(results);
        displayResults(results);
      })
    
}

/* display results */
function displayResults(results){
    const searchResults = document.querySelector(".results");
    /* Remove all child elements*/
    searchResults.innerHTML = '';

    /*Looping over search results*/
    results.forEach(result => {
        const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
        searchResults.insertAdjacentHTML("beforeend",
            `<div class="result-item">
                <h3 class="result-title">    
                    <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
                </h3>
                <a class="suburl" href="${url}" target="_blank" rel="noopener">${url}</a>
                <span class="result-snippet">${result.snippet}</span><br>
            </div>`
        );
    });
}






