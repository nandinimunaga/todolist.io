function createTextbox() {
    var container = document.getElementById("textboxContainer");
    var textboxDiv = document.createElement("div");
    textboxDiv.className = "textbox-container";
    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.className = "custom-textbox";
    textbox.placeholder = "Write your task here";
    var closeButton = document.createElement("span");
    closeButton.className = "close-button";
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", function() {
        container.removeChild(textboxDiv);
    });
    textboxDiv.appendChild(textbox);
    textboxDiv.appendChild(closeButton);
    container.appendChild(textboxDiv);
}

var button = document.getElementById("addbutton");
button.addEventListener("click", createTextbox);
