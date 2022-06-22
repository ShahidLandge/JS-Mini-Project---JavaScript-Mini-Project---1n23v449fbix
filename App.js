//Fetching weather API
class Fetch {
  async getCurrent(input) {
    const myKey = "39a9a737b07b4b703e3d1cd1e231eedc";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q= ${input}&appid=${myKey}&units=metric `

    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}


class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");


  }

  populateUI(data) {


    this.uiContainer.innerHTML = `
        
        <div class="data" >
           
                <h2 class="card-title">${data.name}</h2>

                <h3 class="card-subtitle">Highest Temperature : ${data.main.temp_max}&#8451. <br> Lowest Temperature : ${data.main.temp_min}&#8451</h3>
                <br>

                <h4 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h4>
                <br>

                <div>

                <span class="close"  onclick="myFunction()">&times;</span>


                </div>

            </div>
        </div>
        
        
        `;

  }
}


function myFunction() {
  var x = document.getElementById("content");

  x.style.display = "none";

}




//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);

  });
});

