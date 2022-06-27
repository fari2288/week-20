document.addEventListener('DOMContentLoaded', function (event) {
    fetch('https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=R4a8quya2M0zpsI2YTAlEgLHB2aBRzokbEKEXYN2')
        .then(response => response.json())
        .then(planets => {
            console.log(planets);
            document.querySelector('#image').src = 'https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=nrW4EEU5AlCtMMmDwLqGqPh7EyV3LuKbU6X40YiQ';
            document.querySelector('#version').innerHTML = planets[0].version;
            document.querySelector('#centroid_coordinates').innerHTML = JSON.stringify(planets[0].centroid_coordinates);
            document.querySelector('#id').innerHTML = planets[0].identifier;
            document.querySelector('#caption').innerHTML = planets[0].caption;
            document.querySelector('#date').innerHTML = planets[0].date
        })
        .catch(error => console.log(error));
})