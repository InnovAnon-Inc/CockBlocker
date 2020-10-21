// runs globally in background
// adds/removes images to/from model

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
      // TODO
      break;
    case "unregister-dick-pic":
      // TODO
      break;
  }
});

// TODO separate page for managing app, including:
// - download/upload datasets
// - train AI to update model
// - download/upload model
