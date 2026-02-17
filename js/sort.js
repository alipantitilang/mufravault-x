// ===============================
// ===== SORTING SYSTEM =====
// ===============================

const sortOption = document.getElementById("sortOption");
const filterCategory = document.getElementById("filterCategory");

// ===== MAIN SORT & FILTER FUNCTION =====
function applySortAndFilter() {

  let data = [...mufradatData];

  // ===== FILTER BY CATEGORY =====
  const selectedCategory = filterCategory.value;

  if (selectedCategory !== "all") {
    data = data.filter(word => word.category === selectedCategory);
  }

  // ===== SORTING =====
  const sortValue = sortOption.value;

  if (sortValue === "az") {
    data.sort((a, b) => a.latin.localeCompare(b.latin));
  }

  if (sortValue === "level") {

    const levelOrder = {
      "Basic": 1,
      "Intermediate": 2,
      "Advanced": 3
    };

    data.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
  }

  if (sortValue === "newest") {
    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  renderList(data);
}

// ===== EVENT LISTENERS =====
sortOption.addEventListener("change", applySortAndFilter);
filterCategory.addEventListener("change", applySortAndFilter);
