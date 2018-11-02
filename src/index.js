document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  var pokemonContainer = document.querySelector('#pokemon-container')
  pokemonContainer.style.display = 'grid'
  pokemonContainer.style.gridTemplateColumns = 'auto auto auto auto'
  pokemonContainer.style.padding = '30px'
  searchWord = ""

 input = document.querySelector('#pokemon-search-form')
 input.addEventListener('keydown', showSearchResults)

  //YOUR CODE HERE
//array.forEach(function(currentValue, index, arr), thisValue)
  POKEMON.forEach(function(element,index){

    var clicked = false

    //created new div
    var newRow =  document.createElement('div');
    //created class and id for new div
    newRow.className = `pokemon-obj`
    newRow.id = `pokemon_${index}`

    //found existing container and appended new outer div to container
    var pokemonContainer = document.querySelector('#pokemon-container')
    pokemonContainer.appendChild(newRow)
    // var outerBox = document.getElementById(newRow.id)
    // console.log(newRow.id)

    //style outer box
    var pokemonElement = document.querySelector(`#${newRow.id}`);
    pokemonElement.style.width = '230px'
    pokemonElement.style.height = '159px'
    pokemonElement.style.background = '#fecd2f'
    // pokemonElement.style.display = 'grid'
    pokemonElement.style.gridAutoFlow = 'column'
    pokemonElement.style.margin = '10px '


    //create class for title
    var titleClass = document.createElement('h1')
    titleClass.className = 'title'
    pokemonElement.appendChild(titleClass)
    titleClass.innerText = `${element.name}`
    titleClass.style.color = "#2d72fc"
    titleClass.style.textAlign = "center"

    //create class for img
    var imgClass = document.createElement('div')
    imgClass.className = 'img'
    imgClass.style.paddingBottom = '10px'
    pokemonElement.appendChild(imgClass)

    var frontImage = `<img src = ${element.sprites.front}>`
    var backImage = `<img src = ${element.sprites.back}>`

    pokemonElement.addEventListener('click', function(){
      console.log('hi dustin!')
      clicked = !clicked
      setBackgroundImage()
    })

    function setBackgroundImage() {
      if (!clicked) {
        imgClass.innerHTML = frontImage}
      else {
        imgClass.innerHTML= backImage
      }
    }

    setBackgroundImage()

    imgClass.style.textAlign = "center"


    //create class for image


    // found new div and updated innerTEXT and HTML with pokemon data


    //style each div
    //height
    //style title


    //width
    //background color
    //center title
    //add color to title
  } )

  //pokemon-container needs name...sprites{front and back}

})

function showSearchResults(event) {
 console.log(event.key)
   if (event.key == 'Backspace') {
     return searchWord = searchWord.slice(0, -1) }
  pokemonClasses = document.querySelectorAll('.pokemon-obj')
 searchWord += event.key
 comparison()
 function comparison(){
   pokemonClasses.forEach(function(pokemonClass){
    if (!(pokemonClass.firstChild.innerText.includes(searchWord))) {
      document.getElementById(pokemonClass.id).remove()
    }
   })
 }
}




 // table = document.getElementById("myTable");
 // tr = table.getElementsByTagName("tr");
 // for (i = 0; i < tr.length; i++) {
 //   td = tr[i].getElementsByTagName("td")[0];
 //   if (td) {
 //     if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
 //       tr[i].style.display = "";
 //     } else {
 //       tr[i].style.display = "none";
 //     }
 //   }
 // }










      // pokemonElement.dataset.id = `pokemon_${index}`;
      // pokemonElement.dataset.name = `${element.name}`;
      // pokemonElement.dataset.front = `${element.sprites.front}`;
      // pokemonElement.dataset.back = `${element.sprites.back}`;
// el.id == 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''
