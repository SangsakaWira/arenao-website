(function(C, U) {
  const pageState = U.initialisePopupSelector({
    cookieconsent: C,
    selector: document.querySelector(".example-selector-custom-css"),
    popups: {
      "Click me": {
        theme: "custom"
      }
    }
  });
})(window.cookieconsent, window.cookieconsent_example_util);
