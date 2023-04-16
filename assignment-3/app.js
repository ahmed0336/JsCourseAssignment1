(async function () {

    const response = await fetch('./data.json');
    const data = await response.json();

    let Genre = document.getElementById("genrediv")

    let serachId = document.getElementById("serachId")

    let btnId = document.getElementById("btnId")






    let SelectGenre = document.getElementById("selectidGenre")
    let moviediv = document.getElementById("moviediv")

    // console.log("genre==>", Genre)

    // console.log("SelectGenre", SelectGenre)



    console.log("response==>", data)
    // console.log("response==>", data[0].genres)

    function displayMovies(data) {

        moviediv.innerHTML = "";
        console.log("filter movies", data)


        data.map((data, index) => {

            console.log("result==>", data.release_date.split("-")[0])
            let createli = document.createElement('div')

            createli.classList.add('col-md-6','mb-4')
            const listItem = `         

            <div class="card mt-2"  >
            
            <div class="card-body">
              <h5 class="card-title">Title : ${data.title}</h5>
              
              <h6>Year : ${data.release_date.split("-")[0]}</h6>
              <h6 class="">Genres: ${data.certification}  ${data.genres.join(",")}</h6>
              <h6>RunTime : ${Math.floor(data.runtime / 60)} hours and ${127 % 60} minutes</h6>
              <h6>${data.tagline}</h6>
              <p>${data.overview}</p>
              <a href="#" class="btn btn-primary">Watch Now</a>
            </div>
          </div>        
        `;

            createli.innerHTML = listItem
            moviediv.appendChild(createli)
        })
    }


    function serachMovies() {

        let searchMovies = serachId.value
        console.log("search==>", serachId.value)

        let FindMovies = data.filter((a, index) => {
            return (a.title.toLowerCase().includes(searchMovies))

        })

        console.log("get", FindMovies)




        displayMovies(FindMovies)
        // document.addEventListener("click", displayMovies(FindMovies))






    }

    btnId.addEventListener("click", serachMovies)





})();