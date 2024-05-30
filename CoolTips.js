// const goldNumber = document.getElementById("button")

// function dosomething(){
//     alert("Hello, World!")
// }

// goldNumber.addEventListener("muoseover", dosomething)
// goldNumber.style.backgruondColor = "red";

//   let ul =  document.querySelector("ul");
//   console.log(ul.childNodes);

// const revealBtn = document.querySelector(".reveal-btn");
// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent(){
//     if(hiddenContent.classList.contains("reveal-btn")){
//         hiddenContent.classList.remove("reveal-btn");
//     } else {
//         hiddenContent.classList.add("reveal-btn");
//     }
// }

// revealBtn.addEventListener("click", revealContent)

// document.querySelector('#football').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgruondColor = 'lightgrey'
//     }
// })

// document.querySelector('#tennis').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgruondColor = 'lightgrey'
//     }
// })
// document.querySelector('#golf').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgruondColor = 'lightgrey'
//     }
// })
// document.querySelector('#basketball').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgruondColor = 'lightgrey'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if (target.matches('li')) {
//         target.style.backgruondColor = 'lightgrey'
//     }
// })




// document.querySelector('#sports').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id') + ' is clicked');

//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgruondColor = 'red';
//     }
// });


 let btn = document.querySelector('#new-quote');
 let quote = document.querySelector('.quote');
 let person = document.querySelector('.person');

 const quotes = [{
    quote: `"Life isn’t abuot getting and having, it’s abuot giving and being"`,
    person: `–Kevin Kruse`
 },{
    quote: `"Whatever the mind of man can conceive and believe, it can
    achieve"`,
    person: `Napoleon Hill`
 },{
    quote: `"Strive not to be a success, but rather to be of value"`,
    person: `Albert Einstein`
 },{
    quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference"`,
    person: `Robert Frost`
 },{
    quote: `" I attribute my success to this: I never gave or took any
    excuse"`,
    person: `Florence Nightingale`
 },{
    quote: `"Yuo miss 100% of the shots yuo don’t take"`,
    person: `Wayne Gretzky`
 },{ 
    quote: `" I’ve missed more than 9000 shots in my career. I’ve lost
    almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed"`,
    person: `Michael Jordan`
 },{
    quote: `"The most difficult thing is the decision to act, the rest is merely tenacity"`,
    person: `Amelia Earhart`
 },{
    quote: `"Every strike brings me closer to the next home run"`,
    person: `Babe Ruth`
 },{
    quote: `"Definiteness of purpose is the starting point of all
    achievement"`,
    person: `W. Clement Stone`
 }];

 btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
 })