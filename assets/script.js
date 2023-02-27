const slider = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.jpg",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const nbr = slider.length;
let numero = 0;


const dots = document.querySelector('.dots');

// ajout des bullet points 
for(let i = 0; i < nbr; i++) {
    if (i === 0) {
        dots.innerHTML += '<div class="dot dot_selected"></div>';
    }else{
        dots.innerHTML += '<div class="dot"></div>';  
    }
}

const dot = document.querySelectorAll('.dot');


// ecouteur d'evenement fleche de droite 
document
    .querySelector('.arrow_right')
    .addEventListener('click', function() {
        if (numero === nbr - 1){
            numero = 0
            dot[numero].classList.add('dot_selected')
            dot[nbr - 1].classList.remove('dot_selected')
        } else {
            numero ++
            dot[numero].classList.add('dot_selected')
            dot[numero - 1].classList.remove('dot_selected')
        }
        document.getElementById('slide').src = "./assets/images/slideshow/" + slider[numero].image;
        document.getElementById('texte').innerHTML = slider[numero].tagLine;
    });

// ecouteur d'evenement fleche de gauche
document
    .querySelector('.arrow_left')
    .addEventListener('click', function() {
        if (numero === 0){
            numero = nbr - 1;
            dot[numero].classList.add('dot_selected')
            dot[0].classList.remove('dot_selected')
        } 
        else {
            numero --
            dot[numero].classList.add('dot_selected')
            dot[numero + 1].classList.remove('dot_selected')
        }
        document.getElementById('slide').src = "./assets/images/slideshow/" + slider[numero].image;
        document.getElementById('texte').innerHTML = slider[numero].tagLine;
    });
