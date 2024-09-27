const btnFetch = document.getElementById("fetch");
const showText = document.getElementById("show");

const successCallback = (location)=>{
    console.log(location.coords);
    
    showText.innerText="Latitude: "+location.coords.latitude+ "\nLongitude: "+location.coords.longitude
}
const failureCallback = ()=>{
    showText.innerText = "Failed to get location"
}

btnFetch.addEventListener("click",async ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback, failureCallback)
    }
    else{
        showText.innerText = "Geolocation is not supported by this browser."
    }
})