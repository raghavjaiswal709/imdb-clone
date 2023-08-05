let movieNameRef = document.getElementById("movie-name");
let SearchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");


let getMovie = () => {
    let movieName = movieNameRef.value;
    const Key="8ae5b048";
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${Key}`;
    
    if(movieName.length <=0){
        results.innerHTML = `<h3 class="msg">please enter the movie name</h3>`
    }
    else{
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => { 
            console.log(data);
                if(data.Response == 'True'){
                    results.innerHTML =`
                <div class ="info">
                    <img src=${data.Poster} class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                        <h4>${data.imdbRating}</h4></div>

                        
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                    </div>

                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                    </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Casts:<h3>
                    <p>${data.Actors}</p>


                
            `;
                }

                //if movie does not exosts in database

                else{
                    results.innerHTML= `<h3 class="msg">${data.Error}</h3> `;
                }
      })

      .catch(() => {
        results.innerHTML =`<h3 class="msg">ERROR Occured </h3>`;
      })
    }
};

SearchBtn.addEventListener("click",getMovie);

window.addEventListener("load",getMovie);


