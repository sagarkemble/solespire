function adjustZoom() {
  // Get the current zoom level
  var zoomLevel = document.documentElement.style.zoom || 1;

  // Check if the display size is 125%
  if (window.devicePixelRatio === 1.25) {
    // Decrease zoom level by 20% (0.8 = 100% - 20%)
    var newZoomLevel = zoomLevel * 0.8;

    // Set the new zoom level
    document.documentElement.style.zoom = newZoomLevel;
  }
}

// Run the function on page load
window.addEventListener("load", adjustZoom);
