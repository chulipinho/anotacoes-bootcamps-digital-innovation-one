const API_URL = 'https://api.thecatapi.com/v1/images/search?a5737a7e-00a0-4afd-95d6-bba41b6f579c/';
const BUTTON = document.getElementById("refreshButton");

async function getCat() {
    try{
        let request = await fetch(API_URL);
        let json = await request.json();    
        return json[0].url;
    }catch(e){
        console.log("Something went wrong...");
    }
}

async function refreshCatImage() {
    const img = document.getElementById("catPic");
    img.src = await getCat();
}

refreshCatImage();
BUTTON.addEventListener("click", refreshCatImage);
