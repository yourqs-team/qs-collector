$(function() {

  $('#address').keyup(function(){ // every change on address form
    $this = $(this);

    // do ajax autocomplete
    $.ajax({
      url: 'https://api.addy.co.nz/search?key='+a_key+ '&s=' + $this.val(),
      success: function(data){
        let address = []; 

        for (var i in data.addresses){
          address.push(data.addresses[i].a)
        }

        $this.autocomplete({
          appendTo: $this.parent(),
          open: function(event, ui) {
            $(".ui-autocomplete").css("position", "relative");
            $(".ui-autocomplete").css("top", "0px");
            $(".ui-autocomplete").css("left", "0px");
          },
          source: address,
          minLength: 2,
          delay: 100
        });
      }
    }); 
  });

  $('.dashboard-address').keyup(function(){ // every change on address form
    $this = $(this);

    // do ajax autocomplete
    $.ajax({
      url: 'https://api.addy.co.nz/search?key='+a_key+ '&s=' + $this.val(),
      success: function(data){
        let address = []; 

        for (var i in data.addresses){
          address.push(data.addresses[i].a)
        }

        $this.autocomplete({
          appendTo: $this.parent(),
          source: address,
          minLength: 2,
          delay: 100
        });
      }
    }); 
  });

  $('.numeric-only').on('input', function (event) { 
    this.value = this.value.replace(/[^0-9]/g, '');
  });

});