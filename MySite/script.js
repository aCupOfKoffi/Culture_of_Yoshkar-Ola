

let attraction = document.querySelector('.attractions'),
    attractionbutton = document.querySelector('.attraction_button');

let historyhead = document.getElementById('history_head'),
historyimg = document.getElementById('history_img');


attractionbutton.onclick = function(){
    attraction.classList.toggle('active');
};

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    if (value > 50){
        historyhead.classList.add('active');
    }
    else {
        historyhead.classList.remove('active');
    }

    if (value > 300){
        historyimg.classList.add('active');
    }
    else {
        historyimg.classList.remove('active');
    }
});