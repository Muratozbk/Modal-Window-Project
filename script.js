'use strict';
console.log('hello');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(button => {
    button.addEventListener('click', openModal)
})

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//Keydown Functions--- v:81
document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal()
})

document.addEventListener('keydown', function (f) {
    if (f.key === 'q' && !modal.classList.contains('hidden'))
        closeModal()
})


// btnsOpenModal.forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelector('.modal').classList.remove('hidden')
//         document.querySelector('.overlay').classList.remove('hidden')
//     })
// })

// btnCloseModal.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });



