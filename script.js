// Library Management System - Book Management module
function addBook() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;

  if (title === "" || author === "") {
    alert("Please enter book title and author");
    return;
  }

  var li = document.createElement("li");
  li.textContent = title + " by " + author + " ";

  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(delBtn);

  document.getElementById("bookList").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}