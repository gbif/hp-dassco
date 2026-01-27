loadStats();

async function fetchData(url){  
    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch ${url}`);
        return null;
    }
}

//Read about the api here
//https://techdocs.gbif.org/en/openapi/
async function loadStats() {
    const urls = [
        { id: "feature-datasets",  url: "https://api.gbif.org/v1/dataset" },
        { id: "feature-collections", url: "https://api.gbif.org/v1/grscicoll/collection" }
    ];

    const results = await Promise.all(
        urls.map(endpoint => fetchData(endpoint.url))
    );

    results.forEach((data, i) => {
        const element = document.getElementById(urls[i].id);
        
        if(data && typeof data.count !== "undefined")
            element.innerHTML = new Intl.NumberFormat("da-DK").format(data.count);
        else {
            element.innerHTML = "Unavailable";
        }
            
    });

    const occourence = await fetchData("https://api.gbif.org/v1/occurrence/count");
    if(occourence && typeof occourence !== "undefined")
            document.getElementById("feature-occourence").innerHTML = new Intl.NumberFormat("da-DK").format(occourence);
        else {
            document.getElementById("feature-occourence").innerHTML = "Unavailable";
        }
}