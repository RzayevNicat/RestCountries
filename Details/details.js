const row = document.querySelector(".row")
let url = JSON.parse(localStorage.getItem("url"))

row.innerHTML = `
    <div class="col-6">
    <img
      class="shadow"
      src="${url.flags.png}"
      alt=""
      style="width: 500px"
    />
    </div>
    <div class="col-6">
    <h1 class="text-light">${url.name.common}</h1>
    <div class="d-flex flex-row" style="margin-top: 50px">
      <ul style="margin-left: -30px">
        <li class="list-unstyled text-light" style="line-height: 30px">
          Native Name :
          <span class="opacity-50">${url.name.official}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Population : <span class="opacity-50">${url.population}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Region : <span class="opacity-50">${url.region}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Sub Region : <span class="opacity-50">${url.subregion}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Capital : <span class="opacity-50">${url.capital}</span>
        </li>
      </ul>
      <ul style="margin-left: 120px">
        <li class="list-unstyled text-light" style="line-height: 30px">
            FIFA : <span class="opacity-50">${url.fifa}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Currencies : <span class="opacity-50">${Object.keys(url.currencies).map((key) => [url.currencies[key].name])}</span>
        </li>
        <li class="list-unstyled text-light" style="line-height: 30px">
          Languages : <span class="opacity-50">${Object.keys(url.languages).map((key) => [url.languages[key]])}</span>
        </li>
      </ul>
    </div>
    <div style="margin-top: 20px" class="d-flex flex-row">
      <p class="text-light p-2">Border Countries :</p>
      <p
        class="ms-2 text-light p-2 rounded-2"
        style="background-color: hsl(209, 23%, 22%)"
      >
        ${url.borders}
      </p>
    </div>
    </div>

`