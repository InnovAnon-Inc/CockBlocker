// runs globally in background
// adds/removes images to/from model

console.log ('cbt exec background.js');

browser.contextMenus.create ({
    id      : "register-dick-pic",
    title   : "Add Dick Pic to Registry",
    //contexts: ["selection"]
    //contexts: ["image"]
    contexts: ["all"]
});
browser.contextMenus.create ({
    id      : "unregister-dick-pic",
    title   : "Delete Dick Pic from Registry",
    //contexts: ["selection"]
    //contexts: ["image"]
    contexts: ["all"]
});
console.log ('cbt context menus created');

browser.contextMenus.onClicked.addListener (function (info, tab) {
  switch (info.menuItemId) {
    case "register-dick-pic":
      console.log ('cbt register dick pic');
      // TODO
      break;
    case "unregister-dick-pic":
      console.log ('cbt unregister dick pic');
      // TODO
      break;
  }
});

console.log ('cbt click listeners added');

// TODO separate page for managing app, including:
// - download/upload datasets
// - train AI to update model
// - download/upload model
