

const form = document.querySelector('#searchForm');
const divimg = document.getElementById("imgflex")


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const fin = await res.json();

    makeImages(fin)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            divimg.append(img)

        }
    }
}