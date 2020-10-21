browser.contextMenus.create ({
    id: "register-dick-pic",
    title: "Add Dick Pic to Registry",
    contexts: ["image"],
});
browser.contextMenus.create ({
    id: "unregister-dick-pic",
    title: "Delete Dick Pic from Registry",
    contexts: ["image"],
});

browser.contextMenus.onClicked.addListener (function (info, tab) {
  switch (info.menuItemId) {
    case "register-dick-pic":
      
      break;
    case "unregister-dick-pic":
    
      break;
  }
});
