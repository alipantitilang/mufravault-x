// ===============================
// ===== MUFRAVAULT DATABASE =====
// ===============================

const STORAGE_KEY = "mufraVaultData";

// ===== GET DATA =====
function getData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// ===== SAVE DATA =====
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ===== ADD WORD =====
function addWord(word) {
  const data = getData();
  data.push(word);
  saveData(data);
}

// ===== UPDATE WORD =====
function updateWord(updatedWord) {
  let data = getData();

  data = data.map(word =>
    word.id === updatedWord.id ? updatedWord : word
  );

  saveData(data);
}

// ===== DELETE WORD (UTILITY) =====
function removeWord(id) {
  let data = getData();
  data = data.filter(word => word.id !== id);
  saveData(data);
}

// ===== CLEAR ALL DATA =====
function clearAllData() {
  localStorage.removeItem(STORAGE_KEY);
}

// ===== EXPORT JSON =====
function exportData() {
  const data = getData();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mufravault-backup.json";
  a.click();

  URL.revokeObjectURL(url);
}

// ===== IMPORT JSON =====
function importData(file) {

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const importedData = JSON.parse(e.target.result);

      if (!Array.isArray(importedData)) {
        alert("Format file tidak valid.");
        return;
      }

      saveData(importedData);
      alert("Data berhasil diimport!");
      location.reload();

    } catch (error) {
      alert("Terjadi kesalahan saat membaca file.");
    }
  };

  reader.readAsText(file);
}
