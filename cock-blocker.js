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
//if (window.hasRun) { return; }
//window.hasRun = true;

function replaceImages () {
  console.log ('cbt replaceImages ()');
  var imgs = document.images;
  var repl = browser.extension.getURL ('replacement.png')
  for (var i = 0, iLen = imgs.length; i < iLen; i++) {
    let img = imgs[i];
    console.log ('cbt checking image 1 ' + img.src);
    if (img.src == repl) { continue; }
    console.log ('cbt checking image 2');
    let mat = cv.imread (img);
    console.log ('opencv read img');
    //cv.imshow ('canvasOutput', mat);
    if (true) { // is a dick pic
      console.log ('cbt dick pic detected');
      img.setAttribute ('src', repl);
      console.log ('cbt image replaced');
    }
    mat.delete ();
    console.log ('opencv free mem');
  }
}
replaceImages ();

//browser.onStateChanged ()

console.log ('cbt images replaced');
