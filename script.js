const getLocation = () => {
    // Get location from the user
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser");
    }
};

const showPosition = (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    const des = document.querySelector("p");
    des.innerHTML = `Latitude: ${lat} <br>Longitude: ${long}`;
    console.log(lat,long);
}

const showError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for geolocation");
            break;
        
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable");
                break;

            case error.TIMEOUT:
                alsert("Request timed out");
                break;

            case error.UNKNOWN_ERROR:
                alsert("An unknown error occurred");
                break;

            default:
                alert("An unknown error occurred");
    }
}