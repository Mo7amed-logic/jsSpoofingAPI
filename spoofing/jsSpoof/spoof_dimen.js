(() => {
    console.log("Full device dimension spoofing enabled!");

    // Generate random dimensions (for testing)
    //const spoofedScreenWidth = Math.floor(Math.random() * 500) + 1280; // Random width between 1280 and 1780
    //const spoofedScreenHeight = Math.floor(Math.random() * 500) + 720; // Random height between 720 and 1220
    const spoofedScreenWidth = "$spfw$"; // Random width between 1280 and 1780
    const spoofedScreenHeight = "$spfh$"; // Random height between 720 and 1220

    // Calculating available screen size (considering taskbars and OS UI)
    const spoofedAvailWidth = spoofedScreenWidth - 100; // Available width
    const spoofedAvailHeight = spoofedScreenHeight - 100; // Available height

    // Adjusting inner width/height (the visible area of the browser)
    const spoofedInnerWidth = spoofedScreenWidth - 40; // Adjusting for browser borders
    const spoofedInnerHeight = spoofedScreenHeight - 100; // Adjusting for browser chrome

    // Adjusting outer width/height (including browser chrome like scrollbars and UI elements)
    const spoofedOuterWidth = spoofedScreenWidth + 50; // Including browser UI space
    const spoofedOuterHeight = spoofedScreenHeight + 150; // Including browser UI space

    // Override screen properties
    Object.defineProperty(screen, "width", {
        get() {
            return spoofedScreenWidth;
        },
    });
    Object.defineProperty(screen, "height", {
        get() {
            return spoofedScreenHeight;
        },
    });
    Object.defineProperty(screen, "availWidth", {
        get() {
            return spoofedAvailWidth;
        },
    });
    Object.defineProperty(screen, "availHeight", {
        get() {
            return spoofedAvailHeight;
        },
    });

    // Override window properties
    Object.defineProperty(window, "innerWidth", {
        get() {
            return spoofedInnerWidth;
        },
    });
    Object.defineProperty(window, "innerHeight", {
        get() {
            return spoofedInnerHeight;
        },
    });
    Object.defineProperty(window, "outerWidth", {
        get() {
            return spoofedOuterWidth;
        },
    });
    Object.defineProperty(window, "outerHeight", {
        get() {
            return spoofedOuterHeight;
        },
    });

    console.log("Device dimensions fully spoofed!");
})();
