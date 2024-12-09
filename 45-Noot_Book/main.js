function saveNote() {
  let noteText = document.getElementById("note").value.trim();
  if (noteText !== "") {
    let li = document.createElement("li");
    li.textContent = noteText;

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function () {
      let newText = prompt("Enter new text for the note:", li.textContent);
      if (newText !== null) {
        li.textContent = newText;
      }
    };

    let clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.onclick = function () {
      li.remove();
    };

    li.appendChild(editButton);
    li.appendChild(clearButton);

    document.getElementById("savedNotes").appendChild(li);
    document.getElementById("note").value = "";
  } else {
    alert("Please write something in the note!");
  }
}

function clearNote() {
  document.getElementById("note").value = "";
}
