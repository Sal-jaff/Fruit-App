const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')

fruitForm.addEventListener('submit', extractFruit) // e shows the event listener thats created




function extractFruit(e) {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    //alt way
    //console.log(e,target[0].value)
    e.target.fruitInput.value =""
}

function addFruit(fruit){
    const li = document.createElement('li')
    li.textContent = fruit //gets the bit in the middle text only, not tag
    if ( !(/^[A-Za-z]+$/.test(fruit) ){
        fruitList.appendChild(li)
    }
    //fruitList.appendChild(li) // adds to end of list

}

//no empty fruit
//click on fruit, removed from list