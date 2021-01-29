document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    document.body.appendChild(button);
  
    button.addEventListener("click", newDiv);
  
    let contain = document.createElement("div");
    contain.classList = "container";
    document.body.appendChild(contain);
  
    let idNum = 1;
  
    let colors = ["#E27D60", "#85DCB", "#E8A87C", "#C28D9E", "#41B3A3"];
  
    function newDiv() {
      let boxes = document.createElement("div");
      boxes.classList = "boxes";
      contain.appendChild(boxes);
      boxes.setAttribute("id", idNum);
      idNum++;
      boxes.addEventListener("mouseenter", function () {
        boxes.textContent = boxes.id;
      });
      boxes.addEventListener("mouseleave", function () {
        boxes.textContent = "";
      });
      boxes.addEventListener("click", function () {
        boxes.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      });
      boxes.addEventListener("dblclick", function () {
        if (boxes.id % 2 == 0) {
          if (boxes.nextSibling) {
            boxes.nextSibling.remove();
          } else {
            alert("There are no more squares foward!");
          }
        } else if (boxes.id % 2 == 1) {
          if (boxes.previousSibling) {
            boxes.previousSibling.remove();
          } else {
            alert("There are no more squares backward!");
          }
        }
      });
    }
  });