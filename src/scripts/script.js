function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    var videoContainer = document.getElementById("video-container");
    popup.style.display = "none";
    // Remove o iframe do DOM
    videoContainer.innerHTML = "";
}