let draw_heroes = document.getElementById("draw_heroes_id")
let heroes_amount = document.getElementById("heroes_amount")

draw_heroes.addEventListener("click", anim);

h_size = parseInt(heroes_amount.innerHTML, 10);
let heroes_arr = []

function which_hero(value){
   
}

async function anim(){
    for(let i = 0; i < h_size; i++){
        let heroes = "heroes_";
    
        heroes += i.toString();
        heroes_arr.push(document.getElementById(heroes));
    }

    let value;
    let oldValue = 0;
    let max = 20;

    res();

    for(let i = 0; i < max; i++){
        value = Math.floor(Math.random() * (h_size));
        
        while(value == oldValue){
            value = Math.floor(Math.random() * (h_size)); 
        }

        sleep_time = (i + 1) * 20;

        heroes_arr[value].style.boxShadow = "0 0 1em yellow";
        if(i+1 != max){
            await sleep(sleep_time);
            heroes_arr[value].style.boxShadow = "0 0 1em black";
        }
      
        oldValue = value;
    }
    which_hero(value);
}

function res(){
    for(let i = 0; i < h_size; i++){
        heroes_arr[i].style.boxShadow = "0 0 1em black";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

