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
        { id: "feature-datasets",  url: "https://api.gbif.org/v1/dataset", link: "/dataset/search" },
        { id: "feature-collections", url: "https://api.gbif.org/v1/grscicoll/collection" , link: "/collection/search"},
        //{ id: "feature-citations", url: "https://api.gbif.org/v1/literature/search?gbifDatasetKey=f506ae89-e503-414a-9e4c-fefee5b5a07b", link: "" }
    ];
    
    
    // Remember to also change the list in _includes/js/config.js
    const datasetKeys = [
        'f506ae89-e503-414a-9e4c-fefee5b5a07b', // NHMD Amber
        'acf5050c-3a41-4345-a660-652cb9462379', // NHMD Biocultural Botany
        '5b5305ae-35d1-4992-9d1a-f447db84b471', // NHMD Danekrae
        'e0459621-92c2-40ac-9934-72b3b1384dc3', // NHMD Entomology
        '8c834f97-c5df-4280-9623-86594979f91a', // NHMD Herpetology
        '84dbaec2-f762-11e1-a439-00145eb45e9a', // NHMD Ichthyology
        '58fc397b-eee4-4138-8a5f-50f9dfb00216', // NHMD Ivertebrate Zoology
        '78b270c5-a5fe-4f1d-b87e-eb0dd7b7ae02', // NHMD Mammalogy
        '84d13eba-f762-11e1-a439-00145eb45e9a', // NHMD Mycology
        'e5c5cad9-b987-4bb4-b07b-85488c5fdd80', // NHMD Ornithology
        '51f8bbe4-36e9-44c2-9f66-eaa5c7017a5c', // NHMD Quaternary Zoology
        '0d1f9cee-7cb7-4d3a-a8c4-d2ca6edcd23b', // NHMD Vascular Plants
        '8e1b54db-ce7f-402e-a36e-c1382f0b7b97', // NHMD Vertebrate Paleontology
        'ab38a0f2-fe39-42d8-92e1-97d2e0a5e2f6', // NHMA Entomology
        '6015b708-235e-43d2-aa8e-aced24f57e0a', // NHMA Freshwater
        '8f67f5f4-69ee-4ddb-bd16-cb727d384eda', // NHMA Invertebrates wet
        '137fbdbd-3c31-4fba-b6b6-4489ad39a6c4', // NHMA Malacology
        '6b524ea4-2593-49de-8e38-cbd87965265b', // NHMA Vertebrate
        '833db434-f762-11e1-a439-00145eb45e9a', // AU herbarium
    ];

    const results = await Promise.all(
        urls.map(endpoint => fetchData(endpoint.url))
    );
    results.forEach((data, i) => {
        const element = document.getElementById(urls[i].id);
        
        if(data && typeof data.count !== "undefined") {
            element.innerHTML = new Intl.NumberFormat("da-DK").format(data.count);
            document.getElementById(urls[i].id + "-link").href = urls[i].link
        } else {
            element.innerHTML = "Unavailable";
        }
            
    });
    
    // Create the specimen occurrence statistics
    let sum = 0;
    datasetKeys.forEach((elem, i) => {
        const occourrence = await fetchData("https://api.gbif.org/v1/occurrence/count?datasetKey=" + elem);
        if(occourrence && typeof occourrence !== "undefined") {
            sum += occurrence;
        }
    });
    document.getElementById("feature-occourence").innerHTML = new Intl.NumberFormat("da-DK").format(sum);
    document.getElementById("feature-occourence-link").href = "/occurrence/search";
}