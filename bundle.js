(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')
const fruitImage = document.querySelector('#fruitImageSection img')


fruitForm.addEventListener('submit', extractFruit) // e shows the event listener thats created

//fruitForm.addEventListener('click', removeFruit) // e shows the event listener thats created
let cal =0



function extractFruit(e) {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    fetchImageData(e.target.fruitInput.value)
    //alt way
    //console.log(e,target[0].value)
    e.target.fruitInput.value = ""
}

function addFruit(fruit){
    const li = document.createElement('li')
    //console.log(li)
    li.textContent = fruit.name//gets the bit in the middle text only, not tag
    li.addEventListener('click',removeFruit)
    // if ((/^[A-Za-z]+$/.test(fruit))) {
    fruitList.appendChild(li)
        //console.log(fruitList)
    //}
    cal += fruit.nutritions.calories
    fruitNutrition.textContent = cal


    //fruitList.appendChild(li) // adds to end of list

}
function removeFruit(e){
   e.target.remove() //gets the bit in the middle text only, not tag
}   

async function fetchFruitData(fruit) {
    try {
        const resp = await fetch(`https://fruit-api-5v0j.onrender.com/fruits/${fruit}`);

        if (resp.ok) {
            const data = await resp.json();
            addFruit(data);
        } else {
            throw "Error: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}


function processResponse(resp){
    if (resp.ok) {
        return resp.json()
    } else {
        throw "Wrror: http status code = "+ resp.status
    }
}

async function fetchImageData(fruit) {
    try {
        let API_KEY = '58058300-fc4e778c6bbf7bf43724f1320';
        const resp = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${fruit}`);

        if (resp.ok) {
            const data = await resp.json();
            //console.log(data)
            extractFruitImage(data);
        } else {
            throw "Error img: http status code = " + resp.status;
        }
    } catch (e) {
        console.log(e);
    }
}
// function fetchImageData(fruit){
//     let API_KEY = '58058300-fc4e778c6bbf7bf43724f1320';
//     let URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(fruit);
//     let banana
//     console.log(URL)
//     //console.log(banana = fruit.hits.webURL)
//     //extractFruitImage()      
// }

    function extractFruitImage(data){
        console.log(data.hits[0].previewURL)
        let img = data.hits[0].previewURL
        fruitImage.src = (img)
        //fruitImage.baseURI = data.hits[0].previewURL
    }


},{}]},{},[1]);
