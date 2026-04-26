const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const clearFavoritesButton = document.getElementById("clearFavoritesButton");
const resultsContainer = document.getElementById("results");
const favoritesContainer = document.getElementById("favoritesContainer");
const statusMessage = document.getElementById("statusMessage");
const loader = document.getElementById("loader");
const featuredSection = document.getElementById("featuredSection");
const featuredCard = document.getElementById("featuredCard");
const genreButtons = document.querySelectorAll(".genre-btn");

const FAVORITES_KEY = "tvverseFavorites";

function setStatus(message) {
  statusMessage.textContent = message;
}

function clearResults() {
  resultsContainer.innerHTML = "";
}

function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

function stripHtml(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString || "";
  return tempDiv.textContent || tempDiv.innerText || "";
}

function getFavorites() {
  try {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    console.error("Failed to read favorites:", error);
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Failed to save favorites:", error);
  }
}

function isFavorite(showId) {
  const favorites = getFavorites();
  return favorites.some((show) => show.id === showId);
}

function toggleFavorite(show) {
  const favorites = getFavorites();
  const existingIndex = favorites.findIndex((item) => item.id === show.id);

  if (existingIndex >= 0) {
    favorites.splice(existingIndex, 1);
    setStatus(`Removed "${show.name}" from favorites.`);
  } else {
    favorites.push({
      id: show.id,
      name: show.name,
      image: show.image?.medium || "",
      rating: show.rating?.average || "N/A",
      language: show.language || "Unknown",
      premiered: show.premiered || "Unknown",
      summary: stripHtml(show.summary) || "No summary available.",
      officialSite: show.officialSite || "",
      genres: Array.isArray(show.genres) ? show.genres : []
    });
    setStatus(`Added "${show.name}" to favorites.`);
  }

  saveFavorites(favorites);
  renderFavorites();
  rerenderCurrentResults();
}

function renderFeaturedShow(showData) {
  const show = showData.show;
  featuredSection.classList.remove("hidden");

  const imageHtml = show.image?.original
    ? `<img class="featured-image" src="${show.image.original}" alt="Poster of ${show.name}" />`
    : `<div class="featured-placeholder">No Image Available</div>`;

  const genresHtml = show.genres.length
    ? show.genres.map((genre) => `<span class="badge">${genre}</span>`).join("")
    : `<span class="badge">No genres</span>`;

  const officialSite = show.officialSite
    ? `<p class="meta"><a href="${show.officialSite}" target="_blank" rel="noopener noreferrer">Visit Official Site</a></p>`
    : "";

  const summary = stripHtml(show.summary) || "No summary available for this show.";

  featuredCard.innerHTML = `
    ${imageHtml}
    <div class="featured-content">
      <h3>${show.name}</h3>
      <p class="meta"><strong>Rating:</strong> ${show.rating?.average || "N/A"}</p>
      <p class="meta"><strong>Language:</strong> ${show.language || "Unknown"}</p>
      <p class="meta"><strong>Premiered:</strong> ${show.premiered || "Unknown"}</p>
      <div class="badges">${genresHtml}</div>
      ${officialSite}
      <p class="featured-summary">${summary}</p>
    </div>
  `;
}

function createShowCard(showData) {
  const show = showData.show;
  const card = document.createElement("article");
  card.className = "card";

  const imageHtml = show.image?.medium
    ? `<img src="${show.image.medium}" alt="Poster of ${show.name}" />`
    : `<div class="empty-image">No Image Available</div>`;

  const genresHtml = show.genres.length
    ? show.genres.map((genre) => `<span class="badge">${genre}</span>`).join("")
    : `<span class="badge">No genres</span>`;

  const officialSite = show.officialSite
    ? `<p class="meta">
         <a href="${show.officialSite}" target="_blank" rel="noopener noreferrer">
           Visit Official Site
         </a>
       </p>`
    : "";

  const favoriteLabel = isFavorite(show.id) ? "♥ Saved" : "♡ Save";

  card.innerHTML = `
    ${imageHtml}
    <div class="card-content">
      <h3>${show.name}</h3>
      <p class="meta"><strong>Rating:</strong> ${show.rating?.average || "N/A"}</p>
      <p class="meta"><strong>Language:</strong> ${show.language || "Unknown"}</p>
      <p class="meta"><strong>Premiered:</strong> ${show.premiered || "Unknown"}</p>
      <div class="badges">${genresHtml}</div>
      ${officialSite}
      <p class="summary">${stripHtml(show.summary) || "No summary available for this show."}</p>
      <div class="card-actions">
        <button class="action-btn favorite-btn">${favoriteLabel}</button>
      </div>
    </div>
  `;

  const favoriteButton = card.querySelector(".favorite-btn");
  favoriteButton.addEventListener("click", () => toggleFavorite(show));

  return card;
}

function createFavoriteCard(show) {
  const card = document.createElement("article");
  card.className = "card";

  const imageHtml = show.image
    ? `<img src="${show.image}" alt="Poster of ${show.name}" />`
    : `<div class="empty-image">No Image Available</div>`;

  const genresHtml = show.genres.length
    ? show.genres.map((genre) => `<span class="badge">${genre}</span>`).join("")
    : `<span class="badge">No genres</span>`;

  const officialSite = show.officialSite
    ? `<p class="meta">
         <a href="${show.officialSite}" target="_blank" rel="noopener noreferrer">
           Visit Official Site
         </a>
       </p>`
    : "";

  card.innerHTML = `
    ${imageHtml}
    <div class="card-content">
      <h3>${show.name}</h3>
      <p class="meta"><strong>Rating:</strong> ${show.rating}</p>
      <p class="meta"><strong>Language:</strong> ${show.language}</p>
      <p class="meta"><strong>Premiered:</strong> ${show.premiered}</p>
      <div class="badges">${genresHtml}</div>
      ${officialSite}
      <p class="summary">${show.summary}</p>
      <div class="card-actions">
        <button class="action-btn remove-favorite-btn">Remove</button>
      </div>
    </div>
  `;

  const removeButton = card.querySelector(".remove-favorite-btn");
  removeButton.addEventListener("click", () => toggleFavorite(show));

  return card;
}

function renderFavorites() {
  const favorites = getFavorites();
  favoritesContainer.innerHTML = "";

  if (favorites.length === 0) {
    favoritesContainer.innerHTML =
      `<div class="empty-favorites">You have no favorites yet. Save a few shows to make your app feel personal.</div>`;
    return;
  }

  favorites.forEach((show) => {
    favoritesContainer.appendChild(createFavoriteCard(show));
  });
}

let currentResults = [];

function rerenderCurrentResults() {
  resultsContainer.innerHTML = "";
  currentResults.forEach((showData) => {
    resultsContainer.appendChild(createShowCard(showData));
  });
}

function renderShows(data, limit = 12) {
  clearResults();
  currentResults = data.slice(0, limit);

  currentResults.forEach((showData) => {
    const card = createShowCard(showData);
    resultsContainer.appendChild(card);
  });
}

async function fetchShows(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch shows from API.");
  }

  return response.json();
}

async function runSearch(query) {
  if (!query) {
    setStatus("Please enter a TV show name.");
    searchInput.focus();
    return;
  }

  try {
    showLoader();
    setStatus(`🔄 Loading "${query}" shows...`);

    const data = await fetchShows(query);

    if (!Array.isArray(data) || data.length === 0) {
      clearResults();
      currentResults = [];
      setStatus("❌ No results found.");
      return;
    }

    renderShows(data, 12);
    setStatus(`✅ Found ${Math.min(data.length, 12)} result(s) for "${query}".`);
  } catch (error) {
    console.error("Error:", error);
    setStatus("⚠️ Something went wrong. Please try again later.");
  } finally {
    hideLoader();
  }
}

async function handleSearch(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  await runSearch(query);
}

searchForm.addEventListener("submit", handleSearch);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  clearResults();
  currentResults = [];
  setStatus("Results cleared.");
  searchInput.focus();
});

clearFavoritesButton.addEventListener("click", () => {
  saveFavorites([]);
  renderFavorites();
  rerenderCurrentResults();
  setStatus("All favorites cleared.");
});

genreButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const query = button.dataset.query;
    searchInput.value = query;
    await runSearch(query);
  });
});


window.addEventListener("DOMContentLoaded", async () => {
  renderFavorites();
  searchInput.value = "drama";
  setStatus("Loading featured shows...");
  showLoader();

  try {
    const data = await fetchShows("drama");

    if (Array.isArray(data) && data.length > 0) {
      renderFeaturedShow(data[0]);
      renderShows(data, 8);
      setStatus("Featured shows loaded.");
    } else {
      setStatus("Could not load featured shows.");
    }
  } catch (error) {
    console.error("Error loading featured shows:", error);
    setStatus("Could not load featured shows.");
  } finally {
    hideLoader();
  }
});