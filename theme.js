("use strict");

var count = 0;

document
  .getElementsByClassName("inner")[0]
  .addEventListener("click", function () {
    if (count % 2 === 0) {
      var toggle = document.getElementsByClassName("toggler");
      toggle[0].style.float = "right";
      toggle[0].style.backgroundColor = "#3B1767";
      document.getElementsByClassName("todo-app")[0].style.backgroundColor = "#1E1E1E";
      document.getElementsByClassName("row")[0].style.backgroundColor = "#333333";
      document.getElementsByTagName("input")[0].style.color = "#c0c6c6";
      document.getElementsByTagName("h2")[0].style.color = "white";
      document.getElementsByTagName("ul")[0].style.color = "#c0c6c6";
      count++;
    } 
    else {
      toggle = document.getElementsByClassName("toggler");
      toggle[0].style.float = "left";
      toggle[0].style.backgroundColor = "white";
      document.getElementsByClassName("todo-app")[0].style.backgroundColor = "white";
      document.getElementsByClassName("row")[0].style.backgroundColor = "#edeef0";
      document.getElementsByTagName("input")[0].style.color = "black";
      document.getElementsByTagName("h2")[0].style.color = "#002765";
      document.getElementsByTagName("ul")[0].style.color = "black";
      count++;
    }
  });


