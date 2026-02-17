// ===============================
// ===== STATS & XP SYSTEM =====
// ===============================

const totalWordsEl = document.getElementById("totalWords");
const totalFavoritesEl = document.getElementById("totalFavorites");
const userLevelEl = document.getElementById("userLevel");
const xpProgressEl = document.getElementById("xpProgress");

// Konfigurasi XP
const XP_PER_WORD = 5;
const XP_PER_LEVEL = 50;

// ===== UPDATE STATS =====
function updateStats() {

  const data = mufradatData;

  // Total kata
  const totalWords = data.length;
  totalWordsEl.textContent = totalWords;

  // Total favorit
  const totalFavorites = data.filter(word => word.favorite).length;
  totalFavoritesEl.textContent = totalFavorites;

  // Hitung XP
  const totalXP = totalWords * XP_PER_WORD;

  // Hitung Level
  const level = Math.floor(totalXP / XP_PER_LEVEL) + 1;
  userLevelEl.textContent = level;

  // Hitung Progress ke level berikutnya
  const xpInCurrentLevel = totalXP % XP_PER_LEVEL;
  const progressPercent = (xpInCurrentLevel / XP_PER_LEVEL) * 100;

  xpProgressEl.style.width = progressPercent + "%";
}
