console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    try {
        const response = await fetch(url);

    if (!response.ok){
        console.error("Bad response");
        return;
    }

    const data = await response.json();
    console.log(data);
    console.log(data.results);
    console.log(data.results[0]);

    const R2D2 = data.results.find(character => character.name === "R2-D2"); 
    console.log(R2D2.eye_color);
    } catch (error) {
        console.error("error");
    }
}

fetchData();
