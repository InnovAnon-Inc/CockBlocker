// runs on each page
// for each image on page
// - check if dick pic
// - if not dick pic, then do nothing
// - else replace image with placeholder

// TODO find all image tags
// TODO replace with loading placeholder
// TODO on image load, check image, replace as necessary
// TODO replace placeholders

var imgs = document.images;
for (var i = 0, iLen = imgs.length; i < iLen; i++) {
  let img = imgs[i];
  //img.onload = function () {
    //let mat = cv.imread (img);
    //cv.imshow ('canvasOutput', mat);
    //mat.delete ();
    // if cv_src is not dick pic: return
    img.src = 'replacement.png';
    
  //  img.onload = function () {}
  //}
}
