/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */



const myArray = [
{
    image : 'https://picsum.photos/1920/1080',
    titolo : 'Random',
    paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
},
{
    image : 'https://picsum.photos/1920/1080',
    luogo : 'Randomissimo',
    paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
},
{
    image : 'https://picsum.photos/1920/1080',
    titolo : 'Grazie',
    paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
},
{
    image : 'https://picsum.photos/1920/1080',
    titolo : 'Graziella',
    paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
},

];

// const carousellImgWrapper = document.getElementsByClassName('my-carousel-images');

// const thumbnailsContainer =  document.getElementsByClassName('my-thumbnails');
// console.log(thumbnailsContainer[0]);


let carouselContent ='';
let carouselImgList = '';
for(let i = 0; i < myArray.length; i++ ){

    console.log(myArray[i]['image']);
    console.log(myArray[i]['titolo']);
    console.log(myArray[i]['paragrafo']);

    carouselImgList +=`
        <div class="my-thumbnails-img my-brightness">
            <img  src="${myArray[i]['image']}" alt="">
        </div>
        
    `;
    carouselContent += `
    <div class="carousel-element">
        <img src="${myArray[i]['image']}" alt="">   
        <div id="my-img-description">
            <h5>${myArray[i]['titolo']}</h5>
            <p>${myArray[i]['paragrafo']}</p>
        </div>
    </div>
        
    `;
}

const carousellImgWrapper = document.querySelector('div.my-carousel-images');
carousellImgWrapper.innerHTML += carouselContent;

const carouselElement = document.getElementsByClassName('carousel-element');
carouselElement[0].classList.add('active');

const thumbnailsWrapper = document.querySelector('div.my-thumbnails');
thumbnailsWrapper.innerHTML +=carouselImgList;

const imagesThumbnails = document.getElementsByClassName('my-thumbnails-img');
imagesThumbnails[0].classList.add('my-padding-carousel');
imagesThumbnails[0].classList.remove('my-brightness');








