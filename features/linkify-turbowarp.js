document.querySelector("body").innerHTML = document.querySelector("body").innerHTML.replaceAll(
  /[^>"'](http|https)?:\/\/turbowarp\.org\/#?[0-9]*\/?(?:editor)?/ig/* This is a regex to find turbowarp uris that aren't links*/,
  "<a href=$&>$&</a>");
