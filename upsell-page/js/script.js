function openVideo(videoUrl, videoId, videoType) {
    var video = document.getElementById(videoType + '-video-' + videoId);
    video.src = videoUrl;
    video.classList.remove('hidden');
  
    var playButton = document.querySelector('#play-button-' + videoType + '-' + videoId);
    if (playButton) {
      playButton.style.display = 'none';
    }
  }
  
  document.querySelectorAll('.preview-image').forEach(item => {
    item.addEventListener('click', event => {
      var productId = item.getAttribute('data-product-id');
      openVideo(item.getAttribute('data-preview-url'), productId, 'preview');
    });
  });
  
  document.querySelectorAll('.trailer-image').forEach(item => {
    item.addEventListener('click', event => {
      var productId = item.getAttribute('data-product-id');
      openVideo(item.getAttribute('data-trailer-url'), productId, 'trailer');
    });
  });