(function() {
    // Store the original connection object
    const originalConnection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    // Function to generate random downlink speed (in Mbps)
    function getRandomDownlink() {
        return (Math.random() * (10 - 1) + 1).toFixed(2); // Random value between 1 and 10 Mbps
    }

    // Function to generate random RTT (round-trip time in milliseconds)
    function getRandomRTT() {
        return Math.floor(Math.random() * (500 - 100) + 100); // Random RTT between 100ms and 500ms
    }

    // Function to randomly return a value for effectiveType
    function getRandomEffectiveType() {
        const types = ['2g', '3g', '4g', 'wifi'];
        return types[Math.floor(Math.random() * types.length)];
    }

    // Function to randomly set saveData (true or false)
    function getRandomSaveData() {
        return Math.random() < 0.5; // 50% chance of true or false
    }

    // Check if the Network Information API is available
    if (originalConnection) {
        // Override the connection properties
        Object.defineProperty(navigator, 'connection', {
            get: function() {
                return {
                    downlink: getRandomDownlink(),             // Randomize downlink speed
                    effectiveType: getRandomEffectiveType(),    // Randomize network type (2g, 3g, 4g, wifi)
                    rtt: getRandomRTT(),                       // Randomize RTT
                    saveData: getRandomSaveData(),             // Randomize saveData (true or false)
                    type: originalConnection.type,             // Preserve original connection type
                    effectiveType: originalConnection.effectiveType, // Preserve effectiveType
                    downlinkMax: originalConnection.downlinkMax, // Preserve downlinkMax if needed
                    onchange: originalConnection.onchange      // Preserve onchange event listener
                };
            }
        });
    }
})();
