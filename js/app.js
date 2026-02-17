// ===== GLOBAL STATE =====
let mufradatData = getData(); // dari data.js

const listContainer = document.getElementById("mufradatList");
const emptyState = document.getElementById("emptyState");

// ===== RENDER FUNCTION =====
function renderList(data = mufradatData) {

  listContainer.innerHTML = "";

  if (data.length === 0) {
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  data.forEach(word => {

    const card = document.createElement("div");
    card.className = "mufradat-card";

    card.innerHTML = `
      <h2>${word.arabic}</h2>
      <p class="meaning">${word.meaning}</p>
      <p><strong>Latin:</strong> ${word.latin}</p>
      <p><strong>Kategori:</strong> ${word.category}</p>
      <p><strong>Level:</strong> ${word.level}</p>
      <p><em>${word.example || ""}</em></p>

      <div class="card-actions">
        <button class="favorite-btn" onclick="toggleFavorite(${word.id})">
          ${word.favorite ? "⭐" : "☆"}
        </button>

        <button class="edit-btn" onclick="editWord(${word.id})">
          Edit
        </button>

        <button class="delete-btn" onclick="deleteWord(${word.id})">
          Hapus
        </button>
      </div>
    `;

    listContainer.appendChild(card);
  });

  updateStats();
}

// ===== DELETE =====
function deleteWord(id) {

  if (!confirm("Yakin mau hapus mufradat ini?")) return;

  mufradatData = mufradatData.filter(word => word.id !== id);

  saveData(mufradatData);
  renderList();
}

// ===== EDIT =====
function editWord(id) {

  const word = mufradatData.find(w => w.id === id);

  if (!word) return;

  document.getElementById("wordId").value = word.id;
  document.getElementById("arabic").value = word.arabic;
  document.getElementById("latin").value = word.latin;
  document.getElementById("meaning").value = word.meaning;
  document.getElementById("category").value = word.category;
  document.getElementById("level").value = word.level;
  document.getElementById("example").value = word.example;

  document.getElementById("submitBtn").textContent = "Update";
  document.getElementById("cancelEdit").style.display = "inline-block";
}

// ===== TOGGLE FAVORITE =====
function toggleFavorite(id) {

  mufradatData = mufradatData.map(word => {
    if (word.id === id) {
      word.favorite = !word.favorite;
    }
    return word;
  });

  saveData(mufradatData);
  renderList();
}

// ===== INITIAL LOAD =====
document.addEventListener("DOMContentLoaded", () => {
  renderList();
});
