const form =  document.querySelector('form')

form.addEventListener('submit', function(r){
    e.preventDefault()

 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const results = document.querySelector('#result')

 if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = "please five a valid height"
 }

})