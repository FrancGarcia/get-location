const getLocation = () => {
    // Get the user location with the IP address
    fetch("https://ipapi.co/json/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const des = document.querySelector("p");
            des.innerHTML = `Latitude: ${data.latitude} <br>Longitude: ${data.longitude}`;
        });
};