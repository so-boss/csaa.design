/*
  Hacky McHackerson

  TODO: Refactor to use syntax that is less disruptive than GROUP::
        Explore unicode arrow icon?
*/


var menukey = "> > "
var wrap = false,
  $wrap = null;

$("div[class$='-Menu-Menu'] > ul li > a").each(function() {
  var content = $(this).text().split(menukey),
    href = $(this).attr("href");

  if(content.length>1) {
    if(!wrap) {
      wrap = href;
      $wrap = $("<div menu='sub'></div>").appendTo($(this).parent());

      $(this).text(content[1])
    }
  }

  if(wrap) {
    if(href.split(wrap).length>1) {
      if($wrap.children().length<2) {
        $wrap = $("<div items></div>").appendTo($wrap);
      }
      $($(this)).appendTo($wrap).wrap("<div></div>")
    } else {
      wrap = false;
      $wrap = null;
    }
  }
});

$("h1[class$='-PageHeader-PageHeader']").each(function() {
  var content = $(this).text().split(menukey);

  if(content.length>1) {
    $(this).text(content[1])
  }
})

