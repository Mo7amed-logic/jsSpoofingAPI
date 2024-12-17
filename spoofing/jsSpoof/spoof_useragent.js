
function userAgentSpoof(userAgent){
    //let userAgent = "#$"
    console.log(userAgent);
    navigator.__defineGetter__('userAgent', function(){
        return data;
    });
    const data = {
        userAgent: userAgent,
        platform: null,
        appVersion: null,
        vendor: null,
        appCodeName: "Mozilla", // Always "Mozilla" for modern browsers
        appName: null
    };
    // Determine appVersion
    const versionStart = userAgent.indexOf("/") 
    data.appVersion = userAgent.substring(versionStart+1)

    userAgent = userAgent.toLowerCase();

    // Determine vendor
    if (userAgent.includes("chrome")) {
        data.vendor = "Google Inc.";
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        data.vendor = "Apple";
    } else if (userAgent.includes("firefox")) {
        data.vendor = ""; // Firefox does not have a vendor
    } else if (userAgent.includes("microsoft edge")) {
        data.vendor = "Microsoft";
    } else {
        data.vendor = "Unknown";
    }

    // Determine appName
    if (
        userAgent.includes("chrome") ||
        userAgent.includes("firefox") ||
        userAgent.includes("safari") ||
        userAgent.includes("edge")
    ) {
        data.appName = "Netscape";
    } else {
        data.appName = "Internet Explorer";
    }

    // Determine platform
    if (userAgent.includes("windows")) {
        if (userAgent.includes('win32')) data.platform = 'Win32'
        else data.platform = 'Win64'
    } else if (userAgent.includes("mac")) {
        if (userAgent.includes('ipod'))
            data.platform = 'iPod'
        else if (userAgent.includes('ipad'))
            data.platform = 'iPad'
        else if (userAgent.includes('iphone'))
            data.platform = 'iPhone'
        else if (userAgent.includes('macintosh'))
            data.platform = "Macintosh";
        else data.platform = "MacIntel"
        
    } else if (userAgent.includes("android")) {
        //data.platform = "Linux armv8l";
        //data.platform = "Linux aarch64";
        data.platform = "Android"
    } else if (userAgent.includes("linux")) {
        data.platform = "Linux x86_64";
    
    } else {
        data.platform = "Unknown";
    }

    //Spoof navigator properties
    Object.defineProperty(navigator, 'userAgent', {
        value: data.userAgent,
        configurable: true
    });
    Object.defineProperty(navigator, 'platform', {
        value: data.platform,
        configurable: true
    });
    Object.defineProperty(navigator, 'appVersion', {
        value: data.appVersion,
        configurable: true
    });
    Object.defineProperty(navigator, 'vendor', {
        value: data.vendor,
        configurable: true
    });
    Object.defineProperty(navigator, 'appCodeName', {
        value: data.appCodeName,
        configurable: true
    });
    Object.defineProperty(navigator, 'appName', {
        value: data.appName,
        configurable: true
    });
    
    console.log(data);
    return data
}
userAgentSpoof('$userAgent$')