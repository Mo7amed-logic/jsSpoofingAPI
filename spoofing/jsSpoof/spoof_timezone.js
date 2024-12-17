 Object.defineProperty(Intl.DateTimeFormat.prototype, "resolvedOptions", {
    value: function() {
        return {
            timeZone: "$timezone$",
        };
    }
});