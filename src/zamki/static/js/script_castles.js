let draw = document.getElementById("draw_id");
let result = document.getElementById("result_id");

let zamek = document.getElementById("zamek");
let bastion = document.getElementById("bastion");
let forteca = document.getElementById("forteca");
let inferno = document.getElementById("inferno");
let nekropolia = document.getElementById("nekropolia");
let lochy = document.getElementById("lochy");
let twierdza = document.getElementById("twierdza");
let cytadela = document.getElementById("cytadela");
let wrotazywiolow = document.getElementById("wrotazywiolow");
let przystan = document.getElementById("przystan");


draw.addEventListener("click", animation);


function which_castle(value){
    switch(value){
        //zamek
        case 1:
            result.innerHTML = "zamek";
            result.style.backgroundImage = "url('/static/images/zamek.jpg')";
            break;
        case 2:
            result.innerHTML = "bastion";
            result.style.backgroundImage = "url('/static/images/bastion.jpg')";
            break;
        case 3:
            result.innerHTML = "forteca";
            result.style.backgroundImage = "url('/static/images/forteca.jpg)";
            break;
        case 4:
            result.innerHTML = "inferno";
            result.style.backgroundImage = "url('/static/images/inferno.jpg')";
            break;
        case 5:
            result.innerHTML = "nekropolia";
            result.style.backgroundImage = "url('/static/images/nekropolia.jpg')";
            break;
        case 6:
            result.innerHTML = "lochy";
            result.style.backgroundImage = "url('/static/images/lochy.jpg')";
            break;
        case 7:
            result.innerHTML = "twierdza";
            result.style.backgroundImage = "url('/static/images/twierdza.jpg')";
            break;
        case 8:
            result.innerHTML = "cytadela";
            result.style.backgroundImage = "url('/static/images/cytadela.jpg')";
            break;
        case 9:
            result.innerHTML = "wrotazywiolow";
            result.style.backgroundImage = "url('/static/images/wrotazywiolow.jpg')";
            break;
        case 10:
            result.innerHTML = "przystan";
            result.style.backgroundImage = "url('/static/images/przystan.jpg')";
            break;
    }
}

async function animation(){
    let value;
    let oldValue = 0;
    let max = 20;

    reset();

    for(let i = 0; i < max; i++){
        value = Math.floor(Math.random() * (11 - 1)) + 1;
        
        while(value == oldValue){
            value = Math.floor(Math.random() * (11 - 1)) + 1; 
        }

        sleep_time = (i + 1) * 20;

        switch(value){
            case 1:
                zamek.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    zamek.style.boxShadow = "0 0 1em black";
                }
                break;
            case 2:
                bastion.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    bastion.style.boxShadow = "0 0 1em black";
                }
                break;
            case 3:
                forteca.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    forteca.style.boxShadow = "0 0 1em black";
                }
                break;
            case 4:
                inferno.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    inferno.style.boxShadow = "0 0 1em black";
                }
                break;
            case 5:
                nekropolia.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    nekropolia.style.boxShadow = "0 0 1em black";
                }
                break;
            case 6:
                lochy.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    lochy.style.boxShadow = "0 0 1em black";
                }
                break;
            case 7:
                twierdza.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    twierdza.style.boxShadow = "0 0 1em black";
                }
                break;
            case 8:
                cytadela.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    cytadela.style.boxShadow = "0 0 1em black";
                }
                break;
            case 9:
                wrotazywiolow.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    wrotazywiolow.style.boxShadow = "0 0 1em black";
                }
                break;
            case 10:
                przystan.style.boxShadow = "0 0 1em yellow";
                if(i+1 != max){
                    await sleep(sleep_time);
                    przystan.style.boxShadow = "0 0 1em black";
                }
                break;
        }
        oldValue = value;
    }
    which_castle(value);
}

function reset(){
    zamek.style.boxShadow = "0 0 1em black";
    bastion.style.boxShadow = "0 0 1em black";
    forteca.style.boxShadow = "0 0 1em black";
    inferno.style.boxShadow = "0 0 1em black";
    nekropolia.style.boxShadow = "0 0 1em black";
    lochy.style.boxShadow = "0 0 1em black";
    twierdza.style.boxShadow = "0 0 1em black";
    cytadela.style.boxShadow = "0 0 1em black";
    wrotazywiolow.style.boxShadow = "0 0 1em black";
    przystan.style.boxShadow = "0 0 1em black";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

