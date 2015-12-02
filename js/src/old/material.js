/* globals jQuery */

(function($) {
  // Selector to select only not already processed elements
  //$.expr[":"].notmdproc = function(obj){
  //  if ($(obj).data("mdproc")) {
  //    return false;
  //  } else {
  //    return true;
  //  }
  //};
  //
  //function isChar(evt) {
  //  if (typeof evt.which == "undefined") {
  //    return true;
  //  } else if (typeof evt.which == "number" && evt.which > 0) {
  //    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8 && evt.which != 9;
  //  }
  //  return false;
  //}
  //
  //function addFormGroupFocus(formGroup){
  //  formGroup.addClass("is-focused");
  //}
  //
  //function removeFormGroupFocus(formGroup){
  //  formGroup.removeClass("is-focused"); // remove class from form-group
  //}

  $.material =  {
    "options": {
      // These options set what will be started by $.material.init()
      "input": true,
      "ripples": true,
      "checkbox": true,
      "togglebutton": true,
      "radio": true,
      "arrive": true,
      "autofill": false,

      "withRipples": [
        ".btn:not(.btn-link)",
        ".card-image",
        ".navbar a:not(.ripple-none)",
        ".dropdown-menu a",
        ".nav-tabs a:not(.ripple-none)",
        ".withripple",
        ".pagination li:not(.active):not(.disabled) a:not(.ripple-none)"
      ].join(","),
      "inputElements": "input.form-control, textarea.form-control, select.form-control",
      "checkboxElements": ".checkbox > label > input[type=checkbox]",
      "togglebuttonElements": ".togglebutton > label > input[type=checkbox]",
      "radioElements": ".radio > label > input[type=radio]" ,
      "fileInputElements": 'input[type=file]'
    },
    //"checkbox": function(selector) {
    //  // Add fake-checkbox to material checkboxes
    //  $((selector) ? selector : this.options.checkboxElements)
    //  .filter(":notmdproc")
    //  .data("mdproc", true)
    //  .after("<span class='checkbox-material'><span class='check'></span></span>");
    //},
    //"togglebutton": function(selector) {
    //  $((selector) ? selector : this.options.togglebuttonElements)
    //  .filter(":notmdproc")
    //  .data("mdproc", true)
    //  .after("<span class='toggle'></span>");
    //},
    //"radio": function(selector) {
    //  // Add fake-radio to material radios
    //  $((selector) ? selector : this.options.radioElements)
    //  .filter(":notmdproc")
    //  .data("mdproc", true)
    //  .after("<span class='circle'></span><span class='check'></span>");
    //},
    //"input": function(selector) {
    //  $((selector) ? selector : this.options.inputElements)
    //    .filter(":notmdproc")
    //  .data("mdproc", true)
    //  .each( () => {
    //    var $input = $(this);
    //
    //    // Requires form-group standard markup (will add it if necessary)
    //    var $formGroup = $input.closest(".form-group"); // note that form-group may be grandparent in the case of an input-group
    //    if($formGroup.length === 0){
    //      $input.wrap("<div class='form-group'></div>");
    //      $formGroup = $input.closest(".form-group"); // find node after attached (otherwise additional attachments don't work)
    //    }
    //
    //    // Modification - Change input-sm/lg to form-group-sm/lg instead (preferred standard and simpler css/less variants)
    //    var legacySizes = {
    //      "input-lg": "form-group-lg",
    //      "input-sm": "form-group-sm"
    //    };
    //    $.each( legacySizes, function( legacySize, standardSize ) {
    //      if ($input.hasClass(legacySize)) {
    //        $input.removeClass(legacySize);
    //        $formGroup.addClass(standardSize);
    //      }
    //    }); // TODO: determine if we want to keep meddling this much.
    //
    //    // Set as empty if is empty (damn I must improve this...)
    //    if ($input.val() === null || $input.val() == "undefined" || $input.val() === "") {
    //      $formGroup.addClass("is-empty");
    //    }
    //
    //      // Add at the end of the form-group
    //    $formGroup.append("<span class='material-input'></span>");
    //
    //    // Support for file input
    //    if ($formGroup.find("input[type=file]").length > 0) {
    //      $formGroup.addClass("is-fileinput");
    //    }
    //  });
    //},
    //"attachInputEventHandlers": () => {
    //
      //// checkboxes didn't appear to bubble to the document, so we'll bind these directly
      //$(".form-group .checkbox label").hover(() => {
      //  Util.addFormGroupFocus(this);
      //}, () => {
      //  Util.removeFormGroupFocus(this);
      //});
      //
      //$(document)
      //.on("change", ".checkbox input[type=checkbox]", () => { $(this).blur(); })
      //.on("keydown paste", ".form-control", function(e) {
      //  if(Util.isChar(e)) {
      //    $(this).closest(".form-group").removeClass("is-empty");
      //  }
      //})
      //.on("keyup change", ".form-control", () => {
      //  var $input = $(this);
      //  var $formGroup = $input.closest(".form-group");
      //  var isValid = (typeof $input[0].checkValidity === "undefined" || $input[0].checkValidity());
      //
      //  if ($input.val() === "" && isValid) {
      //    $formGroup.addClass("is-empty");
      //  }
      //  else {
      //    $formGroup.removeClass("is-empty");
      //  }
      //
      //  // Validation events do not bubble, so they must be attached directly to the input: http://jsfiddle.net/PEpRM/1/
      //  //  Further, even the bind method is being caught, but since we are already calling #checkValidity here, just alter
      //  //  the form-group on change.
      //  //
      //  // NOTE: I'm not sure we should be intervening regarding validation, this seems better as a README and snippet of code.
      //  //        BUT, I've left it here for backwards compatibility.
      //  if(isValid){
      //    $formGroup.removeClass("has-error");
      //  }
      //  else{
      //    $formGroup.addClass("has-error");
      //  }
      //})
      //.on("focus", ".form-control, .form-group.is-fileinput", () => {
      //  Util.addFormGroupFocus(this.formGroup);
      //})
      //.on("blur", ".form-control, .form-group.is-fileinput", () => {
      //  Util.removeFormGroupFocus(this.formGroup);
      //})
      //// make sure empty is added back when there is a programmatic value change.
      ////  NOTE: programmatic changing of value using $.val() must trigger the change event i.e. $.val('x').trigger('change')
      //.on("change", ".form-group input", () => {
      //  var $input = $(this);
      //  if($input.attr("type") == "file") {
      //    return;
      //  }
      //
      //  var $formGroup = $input.closest(".form-group");
      //  var value = $input.val();
      //  if (value) {
      //    $formGroup.removeClass("is-empty");
      //  } else {
      //    $formGroup.addClass("is-empty");
      //  }
      //})
      //// set the fileinput readonly field with the name of the file
      //.on("change", ".form-group.is-fileinput input[type='file']", () => {
      //  var $input = $(this);
      //  var $formGroup = $input.closest(".form-group");
      //  var value = "";
      //  $.each(this.files, function(i, file) {
      //    value += file.name + ", ";
      //  });
      //  value = value.substring(0, value.length - 2);
      //  if (value) {
      //    $formGroup.removeClass("is-empty");
      //  } else {
      //    $formGroup.addClass("is-empty");
      //  }
      //  $formGroup.find("input.form-control[readonly]").val(value);
      //});
    //},
    //"ripples": function(selector) {
    //  $((selector) ? selector : this.options.withRipples).ripples();
    //},
    //"autofill": () => {
    //  // This part of code will detect autofill when the page is loading (username and password inputs for example)
    //  var loading = setInterval(() => {
    //    $("input[type!=checkbox]").each(() => {
    //      var $this = $(this);
    //      if ($this.val() && $this.val() !== $this.attr("value")) {
    //        $this.triggerStart("change");
    //      }
    //    });
    //  }, 100);
    //
    //  // After 10 seconds we are quite sure all the needed inputs are autofilled then we can stop checking them
    //  setTimeout(() => {
    //    clearInterval(loading);
    //  }, 10000);
    //},
    //"attachAutofillEventHandlers": () => {
    //  // Listen on inputs of the focused form (because user can select from the autofill dropdown only when the input has focus)
    //  var focused;
    //  $(document)
    //  .on("focus", "input", () => {
    //    var $inputs = $(this).parents("form").find("input").not("[type=file]");
    //    focused = setInterval(() => {
    //      $inputs.each(() => {
    //        var $this = $(this);
    //        if ($this.val() !== $this.attr("value")) {
    //          $this.triggerStart("change");
    //        }
    //      });
    //    }, 100);
    //  })
    //  .on("blur", ".form-group input", () => {
    //    clearInterval(focused);
    //  });
    //},
    "init": () => {
      var $document = $(document);

      if ($.fn.ripples && this.options.ripples) {
        //this.ripples();
        $(this.options.withRipples).ripples()
      }
      if (this.options.input) {
        this.input();
        this.attachInputEventHandlers();

        $(this.options.inputElements).input()
      }
      if (this.options.checkbox) {
        //this.checkbox();
        $(this.options.checkboxElements).checkbox()
      }
      if (this.options.togglebutton) {
        //this.togglebutton();
        $(this.options.togglebuttonElements).togglebutton()
      }
      if (this.options.radio) {
        //this.radio();
        $(this.options.radioElements).radio()
      }
      if (this.options.autofill) {
        //this.autofill();
        //this.attachAutofillEventHandlers();
        new Autofill()  // FIXME: if this is the best way to invoke, perhaps it shouldn't be a jquery fn as well?
      }

      $(this.options.fileInputElements).fileInput()

      if (document.arrive && this.options.arrive) {
        if ($.fn.ripples && this.options.ripples) {
          $document.arrive(this.options.withRipples, () => {
            $(this).ripples()
          });
        }
        if (this.options.input) {
          $document.arrive(this.options.inputElements, () => {
            $(this).input()
          });
        }
        if (this.options.checkbox) {
          $document.arrive(this.options.checkboxElements, () => {
            $(this).checkbox();
          });
        }
        if (this.options.radio) {
          $document.arrive(this.options.radioElements, () => {
            $(this).radio();
          });
        }
        if (this.options.togglebutton) {
          $document.arrive(this.options.togglebuttonElements, () => {
            $(this).togglebutton();
          });
        }

        $document.arrive(this.options.fileInputElements, () => {
          $(this).fileInput();
        });
      }
    }
  };

})(jQuery);