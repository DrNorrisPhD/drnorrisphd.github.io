"use strict";
function toggleDescriptor(language) {
    var description = document.getElementById("description");
    if (language === "en") {
        description.innerHTML = "English";
    }
    else if (language === "es") {
        description.innerHTML = "Español";
    }
}
