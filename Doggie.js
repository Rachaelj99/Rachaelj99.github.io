var multiply = 1;
function multiplyImage() {
  var x = '<table id="dog table" onclick="multiplyImage()">';
  var y = '<img src="https://67.media.tumblr.com/37de4133ab335b2c3f71774da72b8b6b/tumblr_nj8f46dQJJ1rmbujlo1_400.gif">';
  var cell = "<td>" + y + "</td>";
  var row = "<tr>" + cell + "</tr>";
  var table = "";
  for (i = 0; i<= multiply; i++){
    table = table + x;
    
  }
}
