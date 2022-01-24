$(document).ready(function () {
  var jenisJersey = "pendek";
  for (let i = 1; i < 25; i++) {
    switch (i) {
      case 2:
      case 6:
        var jenisJersey = "panjang";
        break;
      case 10:
      case 12:
      case 14:
        var jenisJersey = "stelan";
        break;
    }
    $(".portfolio-items").append(
      `<div class="col-sm-6 col-md-4 ` +
        jenisJersey +
        `">
            <div class="portfolio-item">
              <div class="hover-bg"> <a href="img/portfolio/jersey` +
        i +
        `.jpeg" title="jersey` +
        i +
        `" data-lightbox-gallery="gallery1">
                  <div class="hover-text">
                    <h4>Jersey NO ` +
        i +
        `</h4>
                  </div>
                  <img src="img/portfolio/jersey` +
        i +
        `.jpeg" class="img-responsive" alt="Coklat">
                </a></div>
            </div>
          </div>`
    );
    var jenisJersey = "pendek";
  }
});
