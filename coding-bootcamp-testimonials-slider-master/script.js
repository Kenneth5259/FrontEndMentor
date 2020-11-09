let next = document.getElementById("next");
let prev = document.querySelector('#prev');
let image = document.querySelector('#photo');
let info = document.querySelector('.testimonial__info');
let title = document.querySelector('.testimonial__title');
let subtitle = document.querySelector('.testimonial__subtitle');
let index = 0;


let peopleArray = [
    {
        title: 'Tanya Sinclair',
        subtitle: 'UX Engineer',
        info: '“ I’ve been interested in coding for a while but never taken the jump, until now.\nI couldn’t recommend this course enough. I’m now in the job of my dreams and so \nexcited about the future. ”',
        picture: 'images/image-tanya.jpg'
    }, 
    {
        title: 'John Tarkpor',
        subtitle: 'Junior Front-end Developer',
        info: '“ If you want to lay the best foundation possible I’d recommend taking this course. \nThe depth the instructors go into is incredible. I now feel so confident about \nstarting up as a professional developer. ”',
        picture: 'images/image-john.jpg'
    }
];

function changeIndex() {
    if(index >= peopleArray.length - 1) {
        index = 0;
    } else {
        index++;
    }
    let person = peopleArray[index];
    title.innerHTML = person.title;
    subtitle.innerHTML = person.subtitle
    info.innerHTML = person.info;
    image.src = person.picture;
}

let person = peopleArray[index];
title.innerHTML = person.title;
subtitle.innerHTML = person.subtitle
info.innerHTML = person.info;
image.src = person.picture;