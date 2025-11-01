fetchData();

/*
window.onscroll = function() {ScrollHeaderMenu()};
function ScrollHeaderMenu(){
    if(window.scrollY != 0){
        document.getElementById("header-menu").classList.add("scrolled-header-menu");
    }    
    else {
        document.getElementById("header-menu").classList.remove("scrolled-header-menu");
    }
}
    */


async function fetchData(){
    console.log("starting");
    const response = await fetch("https://graphql.gbif-staging.org/graphql?query=%0Aquery%7B%0A%20%20occurrenceSearch%28predicate%3A%20%7B%0A%20%20%20%20type%3A%20and%2C%20%0A%20%20%20%20predicates%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20or%2C%20%0A%20%20%20%20%20%20%20%20predicates%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7Btype%3A%20isNotNull%2C%20key%3A%20%22institutionKey%22%7D%2C%20%0A%20%20%20%20%20%20%20%20%20%20%7Btype%3A%20isNotNull%2C%20key%3A%20%22collectionKey%22%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%20%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20in%2C%20%0A%20%20%20%20%20%20%20%20key%3A%20%22basisOfRecord%22%2C%20%0A%20%20%20%20%20%20%20%20values%3A%20%5B%22PRESERVED_SPECIMEN%22%2C%20%22FOSSIL_SPECIMEN%22%2C%20%22MATERIAL_SAMPLE%22%2C%20%22LIVING_SPECIMEN%22%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%29%20%7B%0A%20%20%20%20documents%28size%3A%200%29%20%7B%0A%20%20%20%20%20%20total%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%22predicate%22%3A%7B%22type%22%3A%22and%22%2C%22predicates%22%3A%5B%7B%22type%22%3A%22and%22%2C%22predicates%22%3A%5B%7B%22type%22%3A%22or%22%2C%22predicates%22%3A%5B%7B%22type%22%3A%22isNotNull%22%2C%22key%22%3A%22institutionKey%22%7D%2C%7B%22type%22%3A%22isNotNull%22%2C%22key%22%3A%22collectionKey%22%7D%5D%7D%2C%7B%22type%22%3A%22in%22%2C%22key%22%3A%22basisOfRecord%22%2C%22values%22%3A%5B%22PRESERVED_SPECIMEN%22%2C%22FOSSIL_SPECIMEN%22%2C%22MATERIAL_SAMPLE%22%2C%22LIVING_SPECIMEN%22%5D%7D%2C%7B%22type%22%3A%22equals%22%2C%22key%22%3A%22publishingCountry%22%2C%22value%22%3A%22US%22%7D%5D%7D%2C%7B%22type%22%3A%22and%22%2C%22predicates%22%3A%5B%5D%7D%5D%7D%2C%22size%22%3A50%2C%22from%22%3A0%7D");
    console.log("awaiting");
    const data = await response.json();
    console.log(data);

    document.getElementById("feature-specimens").innerHTML = data.data.occurrenceSearch.documents.total;
    document.getElementById("feature-datasets").innerHTML = data.data.occurrenceSearch.documents.total;
    document.getElementById("feature-collections").innerHTML = data.data.occurrenceSearch.documents.total;
}