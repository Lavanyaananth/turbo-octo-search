/* getting elements from form */
let searchField = document.querySelector("#serach-field");
let searchButton = document.querySelector("#search-btn");
const form = document.querySelector("#wiki-search");

/* Add event listeners to form */
form.addEventListener("submit", handleSubmit);

/* prevent page from reloading before form is submitted */
function handleSubmit(event){
    event.preventDefault();

    /* fetch input term */
    const input = document.querySelector("#search-field").value;
    console.log(input);

    const query = input.trim();

    fetchResults(query);
}

/* fetching results */
function fetchResults(query){
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${query}`;
  
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const results = data.query;
        console.log(results);
      })
    
    .catch(() => console.log("An error occurred."));

}






