const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const totalTask = document.getElementById("totalTask");
const doneTask = document.getElementById("doneTask");

// update jumlah tugas
function updateCount() {
  const allTask = taskList.children.length;
  const done = document.querySelectorAll(".done").length;

  totalTask.textContent = allTask;
  doneTask.textContent = done;
}

// tombol tambah ditekan
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // validasi biar ga kosong
  if (taskText === "") {
    alert("Tugas jangan kosong");
    return;
  }

  // bikin elemen list
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  // tombol selesai
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    updateCount();
  });

  // tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCount();
});
