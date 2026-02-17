// ===============================
// ===== FORM HANDLER SYSTEM =====
// ===============================

const form = document.getElementById("mufradatForm");
const wordIdInput = document.getElementById("wordId");
const arabicInput = document.getElementById("arabic");
const latinInput = document.getElementById("latin");
const meaningInput = document.getElementById("meaning");
const categoryInput = document.getElementById("category");
const levelInput = document.getElementById("level");
const exampleInput = document.getElementById("example");

const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEdit");

// ===== SUBMIT FORM =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = wordIdInput.value;

  const wordData = {
    id: id ? Number(id) : Date.now(),
    arabic: arabicInput.value.trim(),
    latin: latinInput.value.trim(),
    meaning: meaningInput.value.trim(),
    category: categoryInput.value,
    level: levelInput.value,
    example: exampleInput.value.trim(),
    favorite: false,
    createdAt: id
      ? mufradatData.find(w => w.id === Number(id))?.createdAt
      : new Date().toISOString()
  };

  if (id) {
    // UPDATE MODE
    wordData.favorite =
      mufradatData.find(w => w.id === Number(id))?.favorite || false;

    updateWord(wordData);

    mufradatData = getData();
    renderList();
  } else {
    // ADD MODE
    addWord(wordData);

    mufradatData = getData();
    renderList();
  }

  resetForm();
});

// ===== RESET FORM =====
function resetForm() {
  form.reset();
  wordIdInput.value = "";
  submitBtn.textContent = "Tambah";
  cancelEditBtn.style.display = "none";
}

// ===== CANCEL EDIT =====
cancelEditBtn.addEventListener("click", function () {
  resetForm();
});
