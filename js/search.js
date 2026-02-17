// ===============================
// ===== SEARCH SYSTEM =====
// ===============================

const searchInput = document.getElementById("searchInput");

// ===== SEARCH FUNCTION =====
function filterData() {

  const keyword = searchInput.value.toLowerCase().trim();

  let filtered = mufradatData.filter(word => {

    return (
      word.arabic.toLowerCase().includes(keyword) ||
      word.latin.toLowerCase().includes(keyword) ||
      word.meaning.toLowerCase().includes(keyword) ||
      word.category.toLowerCase().includes(keyword) ||
      word.level.toLowerCase().includes(keyword)
    );
  });

  renderList(filtered);
}

// ===== LIVE SEARCH =====
searchInput.addEventListener("input", filterData);
