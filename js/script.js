const optionOne = document.getElementById('one');
const optionTwo = document.getElementById('two');
const optionThree = document.getElementById('three');
const optionFour = document.getElementById('four');
const optionFive = document.getElementById('five');
const firstDivCard = document.getElementById('content');
const secondDivCard = document.getElementById('content-message')

let messageParagraph= document.getElementById('section-message');


optionOne.addEventListener('click', ()=>{
    firstDivCard.classList.add('card-message');
    secondDivCard.classList.remove('card-message');
    messageParagraph.innerText= "";
    getMessage(`You selected ${optionOne.textContent} out of 5`);
});

optionTwo.addEventListener('click', ()=>{
    firstDivCard.classList.add('card-message');
    secondDivCard.classList.remove('card-message');
    messageParagraph.innerText= "";
    getMessage(`You selected ${optionTwo.textContent} out of 5`);
})

optionThree.addEventListener('click', ()=>{
    firstDivCard.classList.add('card-message');
    secondDivCard.classList.remove('card-message');
    messageParagraph.innerText= "";
    getMessage(`You selected ${optionThree.textContent} out of 5`);
});

optionFour.addEventListener('click', ()=>{
    firstDivCard.classList.add('card-message');
    secondDivCard.classList.remove('card-message');
    messageParagraph.innerText= "";
    getMessage(`You selected ${optionFour.textContent} out of 5`);
});

optionFive.addEventListener('click', ()=>{
    firstDivCard.classList.add('card-message');
    secondDivCard.classList.remove('card-message');
    messageParagraph.innerText= "";
    getMessage(`You selected ${optionFive.textContent} out of 5`);
});


const getMessage = (message)=>{
    let mensaje = document.createElement('p');
    mensaje.innerHTML = `${message}`;
    messageParagraph.append(mensaje);
   
}