let arr = []
for(let i = 1; i <= 100; i++) {
    arr.push(i)
}

const body = document.querySelector('body');
const gridConteiner = document.querySelector('.gridContainer');

function renderGrid(){
    arr.forEach(item => {
        const div = `<div class="clickTarget" data-number="${item}">${item}</div>`
        gridConteiner.insertAdjacentHTML('beforeend', div);
    });

}


body.addEventListener('click', (e)=> {
    if(e.target.classList.contains('moved')){
        const number =  +e.target.textContent.match(/\d+/g).join('');
        console.log(number)
        const notMovedDivs = Array.from(document.querySelectorAll('.clickTarget:not(.moved)'), element => element.innerHTML);
        e.target.classList.remove('moved');
        const numberOfElementToInsertBefore = notMovedDivs.find((item)=> item > number);
        document.querySelector(`[data-number="${numberOfElementToInsertBefore}"]`).insertAdjacentElement('beforebegin', e.target)
    } else {
        e.target.classList.add('moved');
        gridConteiner.insertAdjacentElement('afterbegin', e.target)
    }

})

renderGrid();
