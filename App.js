//Fetching weather API//
class Fetch {
  async getCurrent(input) {
    const myKey = "073ddcdfb43f7376762aa1c5229a06f0";

    //make request to url
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q= ${input}&appid=${myKey}&units=metric `
      );

      const data = await response.json();

      console.log(data);

      if (data.message == 'city not found') {
       
        console.log( data.message);
        var x = document.getElementById("content");
        x.style.display = "none";
       alert("Please enter a valid city ");
      } else {
        return data;
      }
    } catch (err) {
      console.log("invalid city" + err);
    }
  }
}
// UI Class //
class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
  }

  populateUI(data) {
  
    this.uiContainer.innerHTML = `
        
        <div class="data" >
           
                <h2 class="card-title"> ${data.name} ( ${data.sys.country} )</h2>
                <h3 class="card-subtitle">Temperature : ${data.main.temp}&#8451. <br> Wind Speed : ${data.wind.speed} m/h  <br> Pressure : ${data.main.pressure} hPa</h3>
                <br>
                <h3 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h3>
                <br>
                <div>
                <span class="close"  onclick="closeFunction()">&times;</span>
            
                </div>
            </div>
        </div>
        
        
        `;
  }
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
    //show only if name is valid
    if(data.name!=undefined){
       var x = document.getElementById("content");
       x.style.display = "block";
       console.log(data.name)
       //call a UI method//
       ui.populateUI(data);
      }
  
  });

   

});


//Toggling Function
function closeFunction() {
  var x = document.getElementById("content");

  x.style.display = "none";
}


