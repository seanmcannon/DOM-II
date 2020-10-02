// Your code goes here

const headerBack = document.querySelector('header')

// const busImg = document.querySelector('.info img')

const clicky= document.querySelector('body')

const imgs = document.querySelectorAll('img')

const para = document.querySelectorAll('p')

// ckicking in the body changes text color
clicky.addEventListener('click', function (event){
    document.querySelector('body').style.color = 'blue'
    document.querySelector('body').style.color = 'green'.stopPropogation()
})


//double clcking in the body changes text color back
clicky.addEventListener('dblclick', function (event){
    document.querySelector('body').style.color = 'black'
})



//mouse over the header changes its color
headerBack.addEventListener('mouseover', function (event){
    document.querySelector('header').style.backgroundColor = "darkgrey";
    document.querySelector('header').style.backgroundColor = "orange".stopPropogationgit ;
})

//mouseout changes the color back
headerBack.addEventListener('mouseout', function (event){
    document.querySelector('header').style.backgroundColor = "white";
})




// escape key changes color, any other key changes back
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelector('body').style.backgroundColor = 'purple'
      document.querySelector('body').style.color = 'yellow'
      document.querySelector('header').style.backgroundColor = 'purple'
    }
    else{
        document.querySelector('body').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('h1').textContent = 'Fun Bus'

        

    }
  })

  // on load annoying popup
  window.addEventListener('load', (event) => {
    alert('This is very annoying, but your page is loaded!');
  });


  //wheel movement adds blur to imnages
  window.addEventListener('wheel', () => {
     imgs.forEach( blur => {
         blur.style.filter = 'blur(.5rem)'
     })
  })
  // scroll causes h2 to change message
  window.addEventListener('scroll', () => {
    document.querySelectorAll('h2').forEach( vanish => {
        vanish.textContent = 'You\'re scrolling!'
    })
 })




  // double click reset images to 0 blur
  document.querySelector('body').addEventListener('dblclick', () => {
     imgs.forEach( clear => {
         clear.style.filter = 'blur(0rem)'

     })
  })



//resize changes text in h1
window.addEventListener('resize', function(event){
    document.querySelector('h1').textContent = 'Not So Fun Bus'});
  

//prevent nav clicks from resetting page
    document.querySelector(".nav").addEventListener("click", function(event){

        event.preventDefault()
    });




