// These two containers are siblings in the DOM
const container = document.querySelector('.container');
const title = document.querySelector('.title')
imageURL = ['./portifolio/img (1).png', './portifolio/img (2).png', './portifolio/img (3).png', './portifolio/img (4).png', './portifolio/img (5).png', './portifolio/img (6).png', './portifolio/img (7).png']

const load = () => {
    imageURL.forEach(element => {
        let imgHolder = document.createElement('img')
        imgHolder.src = element
        imgHolder.setAttribute('class', 'portifolio')
        imgHolder.setAttribute('loading', 'lazy')
        container.appendChild(imgHolder)
    });
}

// setTimeout(load, 1500)

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//     // Do something with the scroll position
//     scrollPos++
// }

// document.addEventListener('scroll', function (e) {
//     lastKnownScrollPosition = window.scrollY;

//     if (!ticking) {
//         window.requestAnimationFrame(function () {
//             doSomething(lastKnownScrollPosition);
//             ticking = false;
//         });

//         ticking = true;
//     }
// });