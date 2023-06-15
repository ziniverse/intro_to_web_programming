import "./styles.css";

document.getElementById("my-button").addEventListener("Click", function () {
  console.log("Hello world");
});

document.getElementById("my-button").addEventListener("Click", function () {
  document.getElementById("heading").textContent = "My notebook";
});

document.getElementById("add-data").addEventListener("Click", function () {
  var text = document.getElementById("text-input").value;
  if (text.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    document.getElementById("list").appendChild(listItem);
    document.getElementById("text-input").value = "";
  }
});

document.getElementById("add-data").addEventListener("click", function () {
  var text = document.getElementById("text-input").value;
  if (text.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    document.getElementById("list").appendChild(listItem);
    document.getElementById("text-input").value = "";
  }
});
