"use strict";

function init() {}

function enable() {
  log("Alt-Tab Active Windows Setup: enabling...");
  imports.ui.altTab._at4db_getWindows = imports.ui.altTab.getWindows;
  imports.ui.altTab.getWindows = function (workspace) {
    return imports.ui.altTab
      ._at4db_getWindows(workspace)
      .filter((w) => w.showing_on_its_workspace());
  };
  log("Alt-Tab Active Windows Setup: enabled");
}

function disable() {
  log("Alt-Tab Active Windows Setup: disabling...");
  imports.ui.altTab.getWindows = imports.ui.altTab._at4db_getWindows;
  delete imports.ui.altTab._at4db_getWindows;
  log("Alt-Tab Active Windows Setup: disabled");
}
