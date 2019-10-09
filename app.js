window.addEventListener('load', ()=>{

    var locations = [];

    function loc(long,lat){
      this.long = long;
      this.lat = lat;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=>{
        let longCurrent = position.coords.longitude;
        let latCurrent = position.coords.latitude;
        locations.push(new loc(longCurrent,latCurrent));

        let longLondon = -0.118092;
        let latLondon = 51.509865;
        locations.push(new loc(longLondon,latLondon));

        let longRome = 12.507516;
        let latRome = 41.906204;
        locations.push(new loc(longRome,latRome));

        let longParis = 2.349014;
        let latParis = 48.864716;
        locations.push(new loc(longParis,latParis));

        let longNewYork = -73.935242;
        let latNewYork = 40.730610;
        locations.push(new loc(longNewYork,latNewYork));

        const proxy = "https://cors-anywhere.herokuapp.com/";
        console.log(locations);

        let api1 = `${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${locations[0].lat}&longitude=${locations[0]['long']}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`;
        let api2 = `${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${locations[1].lat}&longitude=${locations[1]['long']}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`;
        let api3 = `${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${locations[2].lat}&longitude=${locations[2]['long']}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`;
        let api4 = `${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${locations[3].lat}&longitude=${locations[3]['long']}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`;
        let api5 = `${proxy}https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=${locations[4].lat}&longitude=${locations[4]['long']}&oneobservation=true&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`;

        fetch(api1)
          .then(response => {
              return response.json();
          })
          .then(data =>{
            const {description,temperature,iconLink} = data.observations.location['0'].observation['0'];

            document.querySelector('.temperature-degree1').textContent = temperature;
            document.querySelector('.temperature-description1').textContent = description;
            document.querySelector('.location-timezone1').textContent = data.observations.location['0'].country + " - " + data.observations.location['0'].city;
            document.querySelector('.icon1').src = iconLink;

            // document.querySelector('.images-cloud').
          });

          fetch(api2)
            .then(response => {
                return response.json();
            })
            .then(data =>{
              const {description,temperature,iconLink} = data.observations.location['0'].observation['0'];

              document.querySelector('.temperature-degree2').textContent = temperature;
              document.querySelector('.temperature-description2').textContent = description;
              document.querySelector('.location-timezone2').textContent = data.observations.location['0'].country + " - " + data.observations.location['0'].city;
              document.querySelector('.icon2').src = iconLink;
            });

            fetch(api3)
              .then(response => {
                  return response.json();
              })
              .then(data =>{
                const {description,temperature,iconLink} = data.observations.location['0'].observation['0'];

                document.querySelector('.temperature-degree3').textContent = temperature;
                document.querySelector('.temperature-description3').textContent = description;
                document.querySelector('.location-timezone3').textContent = data.observations.location['0'].country + " - " + data.observations.location['0'].city;
                document.querySelector('.icon3').src = iconLink;
              });

              fetch(api4)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                  const {description,temperature,iconLink} = data.observations.location['0'].observation['0'];

                  document.querySelector('.temperature-degree4').textContent = temperature;
                  document.querySelector('.temperature-description4').textContent = description;
                  document.querySelector('.location-timezone4').textContent = data.observations.location['0'].country + " - " + data.observations.location['0'].city;
                  document.querySelector('.icon4').src = iconLink;
                });

                fetch(api5)
                  .then(response => {
                      return response.json();
                  })
                  .then(data =>{
                    const {description,temperature,iconLink} = data.observations.location['0'].observation['0'];

                    document.querySelector('.temperature-degree5').textContent = temperature;
                    document.querySelector('.temperature-description5').textContent = description;
                    document.querySelector('.location-timezone5').textContent = data.observations.location['0'].country + " - " + data.observations.location['0'].city;
                    document.querySelector('.icon5').src = iconLink;
                  });


      });
    }else{
      h1.textContent = "Something went wrong!!";
    }


})
