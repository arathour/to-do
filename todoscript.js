//CLOSE BUTTON
var closeButton = document.getElementsByClassName("close")

//Creating to-do function
function createNewElement() {
    var li = document.createElement('li');
    var theInputValue = document.getElementById("the-input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);

    if (theInputValue === '') {
        alert("Field cant be empty")

    } else {
        document.getElementById("the-ul").appendChild(li);
    }

    document.getElementById("the-input").value = "";
    var thePanTag = document.createElement("span")
    var txt = document.createTextNode("*");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);

    //Removing items when clicked
    for (let i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}

var ulList = document.querySelector('ul');
ulList.addEventListener('click', function(event) {
    if (event.target.tagName === "LI")
        event.target.classList.toggle('checked');
})
createNewElement();