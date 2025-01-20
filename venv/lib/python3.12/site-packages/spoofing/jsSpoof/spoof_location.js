navigator.geolocation.getCurrentPosition = function(success, error) {
    success({
        coords: {
            latitude: "$latitude$",
            longitude: "$longitude$",
            accuracy: 100
        }
    });
};