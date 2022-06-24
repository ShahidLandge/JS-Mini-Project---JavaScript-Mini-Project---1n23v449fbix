//Fetching weather API
class Fetch {
  async getCurrent(input) {
    const myKey =  "073ddcdfb43f7376762aa1c5229a06f0";

    //make request to url
try{
    const response =  await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q= ${input}&appid=${myKey}&units=metric `

    );

    const data = await response.json();

    console.log(data);

     if(data.name==null){
    console.log("Data not found");
    console.log("Data.name" +data.name);
    data.name = null;

    alert("Please enter a valid city ");

      }
  
    
      else{
        return data;
      }
    
   
}

catch(err){
  console.log("invalid city" +err);
 
  }
}
}


class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");


  }

  populateUI(data) {


    this.uiContainer.innerHTML = `
        
        <div class="data" >
           
                <h2 class="card-title"> ${data.name} ( ${data.sys.country} )</h2>

                <h3 class="card-subtitle">Highest Temperature : ${data.main.temp_max}&#8451. <br> Lowest Temperature : ${data.main.temp_min}&#8451</h3>
                <br>

                <h4 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h4>
                <br>

                <div>

                <span class="close"  onclick="closeFunction()">&times;</span>
            


                </div>

            </div>
        </div>
        
        
        `;

  }
}


function closeFunction() {
  var x = document.getElementById("content");

  x.style.display = "none";

}
function openFunction(data) {
  var x = document.getElementById("content");

  x.style.display = "block";

}
 




//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
  const currentVal = search.value;

  openFunction();

  ft.getCurrent(currentVal).then((data) => {
    //call a UI method//
    ui.populateUI(data);

  });
});

