// These two containers are siblings in the DOM
const container = document.querySelector('.container');
const title = document.querySelector('.title')
imageURL = [
    { src: './portifolio/img (1).png', url: 'https://renanurata.github.io/' },
    { src: './portifolio/img (3).png', url: 'https://renanurata.github.io/whatsmyip' },
    { src: './portifolio/img (4).png', url: 'https://renanurata.github.io/keyboardDelay/' },
    { src: './portifolio/img (5).png', url: 'https://renanurata.github.io/maxClickOneSecond/' },
    { src: './portifolio/img (6).png', url: 'https://renanurata.github.io/mousePollingRate/' },
    { src: './portifolio/img (7).png', url: 'https://renanurata.github.io/humanreactiontime/' },
    { src: './portifolio/img (2).png', url: 'https://renanurata.github.io/' },
    { src: './portifolio/img (8).png', url: 'https://renanurata.github.io/keyCodeCheck/' },
    { src: './portifolio/img (9).png', url: 'https://renanurata.github.io/flashKeys/' },
]

const load = () => {
    imageURL.forEach(element => {
        let imgHolder = document.createElement('img')
        let imgLink = document.createElement('a')
        imgLink.href = element.url
        imgLink.appendChild(imgHolder)
        imgHolder.src = element.src

        imgHolder.setAttribute('class', 'portifolio')
        imgHolder.setAttribute('loading', 'lazy')
        container.appendChild(imgLink)
    });
}

setTimeout(load, 1500)

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