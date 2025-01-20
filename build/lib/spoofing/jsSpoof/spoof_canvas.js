function spoofCanvas(){
    const originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
    const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
    
    function addNoise(data){
        for (let i = 0 ; i <data.length ; i++){
            data[i] = Math.min(255, Math.max(0, data[i] + Math.floor(Math.random() * 10) - 5));     // R
            data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + Math.floor(Math.random() * 10) - 5)); // G
            data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + Math.floor(Math.random() * 10) - 5)); // B
        }
        return data; 
    }
    // Override toDataURL
    HTMLCanvasElement.prototype.toDataURL = function(...args) {
        const context = this.getContext('2d');
        const imageData = context.getImageData(0, 0, this.width, this.height);
        const data = imageData.data;

        // Add noise to the image data
        addNoise(data);

        // Put the altered image data back
        context.putImageData(imageData, 0, 0);

        // Call the original toDataURL method
        return originalToDataURL.apply(this, args);
    };
    // Override getImageData
    CanvasRenderingContext2D.prototype.getImageData = function(x, y, width, height) {
        const imageData = originalGetImageData.call(this, x, y, width, height);

        // Add noise to the image data
        addNoise(imageData.data);

        return imageData;
    };
    console.log("Canvas fingerprint spoofing applied!");
}
spoofCanvas()