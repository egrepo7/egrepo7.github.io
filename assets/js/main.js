
$(document).ready(function() {   
  
  var booksTop = 10;
  hidebooks = "Show Less";
  showbooks = "Show More";

  $(".archive-top").html( showbooks );
  $(".book-top:not(:lt("+booksTop+"))").hide();

  $(".archive-top").click(function (e) {
    e.preventDefault();
        if ($(".book-top:eq("+booksTop+")").is(":hidden")) {
            $(".book-top:hidden").show();
            $(".archive-top").html( hidebooks );
        } else {
            $(".book-top:not(:lt("+booksTop+"))").hide();
            $(".archive-top").html( showbooks );
        }
    });


    var booksBot = 10;
    hidebooks = "Show Less";
    showbooks = "Show More";

    $(".archive-bot").html( showbooks );
    $(".book-bot:not(:lt("+booksBot+"))").hide();

    $(".archive-bot").click(function (e) {
      e.preventDefault();
          if ($(".book-bot:eq("+booksBot+")").is(":hidden")) {
              $(".book-bot:hidden").show();
              $(".archive-bot").html( hidebooks );
          } else {
              $(".book-bot:not(:lt("+booksBot+"))").hide();
              $(".archive-bot").html( showbooks );
          }
      });

      $(".fancybox-button").fancybox({
        prevEffect		: 'none',
        nextEffect		: 'none',
        closeBtn		: false,
        helpers		: {
          title	: { type : 'inside' },
          buttons	: {}
        }
      });

});
