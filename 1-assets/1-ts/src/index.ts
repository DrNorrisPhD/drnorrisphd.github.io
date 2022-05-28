function toggleDescriptor(language: String) {
    let description = document.getElementById("description");
    if (language === "en") {
        description!.innerHTML = "English";
    }
    else if (language === "es") {
        description!.innerHTML = "Español";
    }
}