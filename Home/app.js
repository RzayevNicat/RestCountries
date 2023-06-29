const row = document.querySelector(".row");
const search = document.querySelector("#search");
axios.get("https://restcountries.com/v3.1/all").then((res) => {
    res.data.forEach(element => {
        row.innerHTML += `
        <div class="shadow card col-3 p-0 me-5 mb-5" style="cursor:pointer;width: 17rem; background-color: hsl(209, 23%, 22%)">
        <img src="${element.flags.png}" class="shadow card-img-top" style="height:10rem;" alt="..." />
        <div class="card-body text-light mb-4">
            <h5 class="card-title">${element.name.common}</h5>
            <p class="card-text mt-4" style="font-size: 14px">
                Populations: ${element.population}
            </p>
            <p class="card-text" style="font-size: 14px">Region: <span class="region">${element.region}</span></p>
            <p class="card-text" style="font-size: 14px">Capital: ${element.capital}</p>
            <a href="https://rest-countries-9n1j.vercel.app/" id="${element.name.common}" class="shadow btn btn-dark w-100">Details</a>
        </div>
    </div>
        `
    });
    let link = document.querySelectorAll(".btn-dark");
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", function() {
            let datas = res.data;
            for (let j = 0; j < datas.length; j++) {
                if (datas[j].name.common == link[i].id) {
                    localStorage.setItem("url", JSON.stringify(datas[j]))
                }

            }
        })

    }
})

search.addEventListener("keyup", function searchCountry(e) {
    let searchValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".card-title");
    listItems.forEach(function(listItem) {
        let text = listItem.textContent.toLowerCase();
        if (text.indexOf(searchValue) === -1) {
            listItem.parentElement.parentElement.setAttribute("style", "display: none !important;cursor:pointer;width: 17rem; background-color: hsl(209, 23%, 22%)");
        } else {
            listItem.parentElement.parentElement.setAttribute("style", "display: block;cursor:pointer;width: 17rem; background-color: hsl(209, 23%, 22%)");
        }

    })
})
let region = document.querySelectorAll(".dropdown-item");

for (let i = 0; i < region.length; i++) {
    region[i].addEventListener("click", function() {
        let regions = document.querySelectorAll(".region")
        for (let j = 0; j < regions.length; j++) {
            if (region[i].textContent != (regions[j].textContent)) {
                regions[j].parentElement.parentElement.parentElement.setAttribute("style", "display: none !important;cursor:pointer;width: 17rem; background-color: hsl(209, 23%, 22%)");
            } else {
                regions[j].parentElement.parentElement.parentElement.setAttribute("style", "display: block;cursor:pointer;width: 17rem; background-color: hsl(209, 23%, 22%)");

            }

        }
    })

}
