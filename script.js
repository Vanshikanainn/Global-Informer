const API_KEY = "$YOUR_API_KEY_HERE$"; // Replace with your NewsAPI key
const url = "https://newsapi.org/v2/everything?q=";

const cardsContainer = document.getElementById("cardscontainer");
const newsCardTemplate = document.getElementById("template-news-card");
const loading = document.getElementById("loading");

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    fetchNews("Technology");
});

async function fetchNews(query) {
    loading.style.display = "block";
    cardsContainer.innerHTML = "";

    try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();

        if (!data.articles || data.articles.length === 0) {
            cardsContainer.innerHTML = "<p class='loading'>No articles found.</p>";
        } else {
            bindData(data.articles);
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        cardsContainer.innerHTML = "<p class='loading'>Failed to load news. Please try again later.</p>";
    } finally {
        loading.style.display = "none";
    }
}

function bindData(articles) {
    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsImg.alt = article.title || "News image";
    newsTitle.textContent = article.title.length > 60 ? `${article.title.slice(0, 60)}...` : article.title;
    newsDesc.textContent = article.description?.length > 150 ? `${article.description.slice(0, 150)}...` : article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    newsSource.textContent = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value.trim();
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme;
    document.body.dataset.theme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', document.body.dataset.theme);
    themeToggle.textContent = document.body.dataset.theme === 'light' ? '☀️' : '🌙';
});
