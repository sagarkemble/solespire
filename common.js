function adjustBrowserZoom() {
    var devicePixelRatio = window.devicePixelRatio || 1;
    var displaySize = devicePixelRatio * 100;
    var desiredZoomLevel = 100 * (100 / displaySize);
    document.body.style.zoom = desiredZoomLevel + '%';
  }
  
  window.addEventListener('load', adjustBrowserZoom);
  