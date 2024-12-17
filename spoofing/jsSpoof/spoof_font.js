(() => {
  const originalGetComputedStyle = window.getComputedStyle;

  // Randomize font families in getComputedStyle
  window.getComputedStyle = function (element, pseudoElt) {
      const style = originalGetComputedStyle.call(this, element, pseudoElt);

      if (style.fontFamily) {
          const fonts = ["Arial", "Verdana", "Courier New", "Times New Roman", "Comic Sans MS"];
          const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
          const newStyle = new Proxy(style, {
              get(target, prop) {
                  if (prop === "fontFamily") {
                      return randomFont;
                  }
                  return Reflect.get(target, prop);
              }
          });
          return newStyle;
      }

      return style;
  };

  // Randomize document.fonts data
  const originalFonts = document.fonts;
  document.fonts = new Proxy(originalFonts, {
      get(target, prop) {
          if (prop === "check") {
              return (font) => Math.random() > 0.5;
          }
          if (prop === "ready") {
              return Promise.resolve();
          }
          return Reflect.get(target, prop);
      }
  });

  console.log("Font spoofing enabled!");
})();





(() => {
  console.log("Font spoofing enabled!");

  // Intercept `document.fonts`
  const originalDocumentFonts = document.fonts;
  Object.defineProperty(document, 'fonts', {
      get() {
          return {
              check: (font) => Math.random() > 0.5, // Random response for font availability
              load: async () => {},
              ready: Promise.resolve(), // Fake that fonts are always ready
              forEach: () => {} // No-op for forEach
          };
      }
  });

  // Intercept Canvas font detection
  const originalMeasureText = CanvasRenderingContext2D.prototype.measureText;
  CanvasRenderingContext2D.prototype.measureText = function (text) {
      const metrics = originalMeasureText.call(this, text);
      metrics.width = metrics.width * (1 + Math.random() * 0.1); // Slightly randomize width
      return metrics;
  };

  const originalFillText = CanvasRenderingContext2D.prototype.fillText;
  CanvasRenderingContext2D.prototype.fillText = function (...args) {
      // Optionally, randomize text rendering to disrupt detection
      const randomizedText = args[0] + " "; // Add a space to subtly alter
      return originalFillText.call(this, randomizedText, args[1], args[2]);
  };

  // Intercept `getComputedStyle` for font-family detection
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = function (element, pseudoElt) {
      const style = originalGetComputedStyle.call(this, element, pseudoElt);

      if (style.fontFamily) {
          const fonts = ["Arial", "Verdana", "Courier New", "Times New Roman", "Comic Sans MS"];
          const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
          const newStyle = new Proxy(style, {
              get(target, prop) {
                  if (prop === "fontFamily") {
                      return randomFont; // Return a spoofed font family
                  }
                  return Reflect.get(target, prop);
              }
          });
          return newStyle;
      }

      return style;
  };

  // Override Font Loading Detection
  const originalFontFace = window.FontFace;
  window.FontFace = function (...args) {
      return new Proxy(new originalFontFace(...args), {
          get(target, prop) {
              if (prop === "status") return "unloaded"; // Fake that fonts are unavailable
              return Reflect.get(target, prop);
          }
      });
  };
})();




(() => {
  console.log("Dynamic Font Spoofing Enabled!");

  // Base set of fonts (simulate system fonts)
  let baseFonts = ["Arial", "Verdana", "Times New Roman", "Courier New", "Comic Sans MS"];
  const dynamicFonts = [...baseFonts];

  // Function to simulate adding/removing fonts dynamically
  function updateFontList() {
      const additionalFonts = ["Roboto", "Open Sans", "Lobster", "Georgia", "Impact"];
      const action = Math.random() > 0.5 ? "add" : "remove";

      if (action === "add" && dynamicFonts.length < 10) {
          const fontToAdd = additionalFonts[Math.floor(Math.random() * additionalFonts.length)];
          if (!dynamicFonts.includes(fontToAdd)) {
              dynamicFonts.push(fontToAdd);
              console.log(`Font added: ${fontToAdd}`);
          }
      } else if (action === "remove" && dynamicFonts.length > 5) {
          const fontToRemove = dynamicFonts[Math.floor(Math.random() * dynamicFonts.length)];
          const index = dynamicFonts.indexOf(fontToRemove);
          if (index > -1) {
              dynamicFonts.splice(index, 1);
              console.log(`Font removed: ${fontToRemove}`);
          }
      }
  }

  // Periodically update the font list
  setInterval(updateFontList, 5000); // Update every 5 seconds

  // Intercept `document.fonts`
  const originalDocumentFonts = document.fonts;
  Object.defineProperty(document, "fonts", {
      get() {
          return {
              check: (font) => dynamicFonts.includes(font), // Check font existence dynamically
              load: async () => {},
              ready: Promise.resolve(),
              forEach: (callback) => dynamicFonts.forEach(callback), // Mock forEach
          };
      },
  });

  // Spoof getComputedStyle for font-family detection
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = function (element, pseudoElt) {
      const style = originalGetComputedStyle.call(this, element, pseudoElt);
      if (style.fontFamily) {
          const randomFont =
              dynamicFonts[Math.floor(Math.random() * dynamicFonts.length)];
          return new Proxy(style, {
              get(target, prop) {
                  if (prop === "fontFamily") {
                      return randomFont;
                  }
                  return Reflect.get(target, prop);
              },
          });
      }
      return style;
  };

  // Intercept Canvas-based font detection
  const originalMeasureText = CanvasRenderingContext2D.prototype.measureText;
  CanvasRenderingContext2D.prototype.measureText = function (text) {
      const metrics = originalMeasureText.call(this, text);
      metrics.width = metrics.width * (1 + Math.random() * 0.1); // Slight randomness
      return metrics;
  };

  console.log("Dynamic font spoofing in action!");
})();


