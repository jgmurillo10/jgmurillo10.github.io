( function () {
  var desktopSize = window.innerWidth > 980;

  var appContainer = document.getElementById('app-container');
  var pageLoader   = document.getElementById('page-loader');
  var pageLoaderLoader = document.getElementById('page-loader-loader');
  var pageLoaderContent = document.getElementById('page-loader-content');

  // var animationDuration = on load page;
  pageLoaderContent.style.display = "none";
  window.onload = function () {
    if (desktopSize) {
      pageLoader.classList.add('stop'); 
      pageLoaderContent.style.display = "block";
      pageLoaderLoader.style.display = "none";
    } else {
      // scroll(animationDuration);
      pageLoaderContent.style.display = "block";
      pageLoaderLoader.style.display = "none";
    }
  };
})();
