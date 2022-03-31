function initMap() {

    const london = {
        lat: 51.419289605634674,
        lng: -0.15940634445235746
    };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: london,
    })
    const marker = new google.maps.Marker({
        position: london,
        map: map,
    })
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const locations = [{
            lat: 40.785091,
            lng: -73.968285
        },
        {
            lat: 41.084045,
            lng: -73.874245
        },
        {
            lat: 40.754932,
            lng: -73.984016
        }
    ];

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });
}