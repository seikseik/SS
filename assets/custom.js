/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

 Marquee3k.init();

let archivio = document.querySelector(".ArticleList_archive");
if(archivio != undefined){
  var flkty = new Flickity(archivio,{
    freeScroll: true,
    freeScrollFriction: 0.03,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true
  });
}


let article_slide = document.querySelector(".article_slideshow");
document.addEventListener("DOMContentLoaded", function(event) {
  if(article_slide != undefined){
  var flkty = new Flickity(".article_slideshow",{
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: true,
    imagesLoaded: true
  });
 }
})
