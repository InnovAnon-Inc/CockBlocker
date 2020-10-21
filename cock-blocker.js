// runs on each page
// for each image on page
// - check if dick pic
// - if not dick pic, then do nothing
// - else replace image with placeholder

// TODO find all image tags
// TODO replace with loading placeholder
// TODO on image load, check image, replace as necessary
// TODO replace placeholders

console.log ('cbt exec content.js');

// guard to prevent re-running
if (window.hasRun) { return; }
window.hasRun = true;

var imgs = document.images;
for (var i = 0, iLen = imgs.length; i < iLen; i++) {
  let img = imgs[i];
  console.log ('cbt replacing image ' + img.src);
  //let mat = cv.imread (img);
  //cv.imshow ('canvasOutput', mat);
  //mat.delete ();
  // if cv_src is not dick pic: return
  let repl = browser.extension.getURL ('replacement.png')
  img.setAttribute ('src', repl);
}

console.log ('cbt images replaced');
