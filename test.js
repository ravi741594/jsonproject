const card = document.getElementById('card');
let url = "first.json";
fetch(url).then((response) => {
  return response.json()
}).then((data) => {
  let html = "";
  data.forEach(el => {
    html += `<div class="card1 col-4 card mt-5 mb-5 bg-light">
                   <div class="ml-3 pl-4">
                      <div class="">
                        <img class="image" src=${el.image} alt="imag">
                      </div>
                      <div>
                        <h2>${el.name}</h2>
                      </div>
                      <div>
                        
                        <h4> Model :- ${el.model}</h4>
                      </div>
                      <div>
                        <h4>$${el.price}</h4>
                      </div>
                      <div>
                        <h3>Description :- </h3>
                        <h4>${el.description}</h4>
                      </div>
                    </div>

                </div>`
  });
  card.classList.remove('notFound');
  card.innerHTML = html;
})
