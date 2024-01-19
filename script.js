const accessKey = "H0bYNG2122cFK_Ss5MLegyGGuW5gtMkxdG56rF8AVug"

const formEl = document.querySelector("form")

const inputEl = document.getElementById("search-input")

const searchResults = document.querySelector(".search-results")

const showmore = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchimages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&clint_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()

    const results = data.results;

    if (page == 1) {
        searchResults.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.className.add("search-result");
        const image = document.createElement("img");
        image.src = result.url.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        imageWrapper.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
        showmore.style.display = "block";
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchimages();
});

showmore.addEventListener("click", () => {
    searchimages();
});


