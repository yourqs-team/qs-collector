(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(
    e
  ) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on("scroll", function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function(e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1000,
        "easeInOutExpo"
      );
    e.preventDefault();
  });

  (function(url) {
    // Create a new `Image` instance
    var image = new Image();

    image.onload = function() {
      // Inside here we already have the dimensions of the loaded image
      var style = [
        // Hacky way of forcing image's viewport using `font-size` and `line-height`
        "font-size: 1px;",
        "line-height: " + this.height + "px;",

        // Hacky way of forcing a middle/center anchor point for the image
        "padding: " + this.height * 0.001 + "px " + this.width * 0.5 + "px;",

        // Set image dimensions
        "background-size: " + this.width + "px " + this.height + "px;",

        // Set image URL
        "background: url(" + url + ");"
      ].join(" ");
      // notice the space after %c
      console.log("%c ", style);
    };

    // Actually loads the image
    image.src = url;
  })("https://i.imgur.com/RjlZjYJ.gif");
})(jQuery); // End of use strict

$(document).ready(function() {

  $(".deleteProject").click(function(e){
    e.preventDefault(); // prevent to trigger href
    
    //1. Open the modal
    $("#deleteProjectModal").modal("show");

    //2. Retrieve the data from data-attr
    const proj_name = $(this).data("proj-name");
    const proj_code = $(this).data("proj-code");
    const proj_owner = $(this).data("proj-owner");
    const proj_date = $(this).data("proj-date");
    const proj_url = "/project/" + proj_code + "/delete";
  
    //3. Put inside the table
    $('#projName').html(proj_name);
    $('#projCode').html(proj_code);
    $('#projOwner').html(proj_owner);
    $('#projDate').html(proj_date);

    //4. Put inside button trigger
    $("#deleteTrigger").attr("href", proj_url);
  });

  //select all the selects
  const selects = $(".other_option");

  // when on change event
  selects.change(function(e) {    
    // check if the select value equals to other
    if($(this).val() === "Other") {
      // then enable input
      // $(this).closest(".other_parent").find(".other").attr('disabled', false);
      $(this).closest(".other_parent").find(".other").closest('.col').css('display', 'block');

    } else {
      // otherwise disable input
      // $(this).closest(".other_parent").find(".other").attr('disabled', false);
      $(this).closest(".other_parent").find(".other").closest('.col').css('display', 'none');
      $(this).closest(".other_parent").find(".other").val('');
    }
  });

  // Loop through each element as well on initial load
  selects.each(function(){
    if ($(this).val() === "Other"){
      // $(this).closest(".other_parent").find(".other").attr('disabled', false);
      $(this).closest(".other_parent").find(".other").closest('.col').css('display', 'block');
      
    } else{
      // $(this).closest(".other_parent").find(".other").attr('disabled', true);
      $(this).closest(".other_parent").find(".other").closest('.col').css('display', 'none');
      $(this).closest(".other_parent").find(".other").val('');
    }
  });
  
});


