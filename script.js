const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('activetab')
        })
        tab.classList.add('activetab')
        target.classList.add('active')
    })
})

// const container = document.querySelector(".cont");
// const cards = document.querySelectorAll('.card')
// const card_item_size = container.querySelector('div').clientWidth;
// let cardsLength = cards.length;
// const lefty = document.querySelector(".lefty");
// let translate = 0;
// let check = 0;

// function changeCard(){


// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.tabTarget)
//         // tabContents.forEach(tabContent => {
//         //     tabContent.classList.remove('active')
//         // })
//         cards.forEach(tab => {
//             tab.classList.remove('activecard')
//         })
//         card.classList.add('activecard')
        
//     })
// })
// }


// lefty.addEventListener("click", function() {
    
//       container.scrollBy(card_item_size, 0)
//       console.log(cardsLength);
//       console.log("check" + check);
      
// });

// const righty = document.querySelector(".righty");
// righty.addEventListener("click", function() {
//     container.scrollBy(-card_item_size, 0)
      
// });


const gallery = document.querySelector('#paginated_gallery');
const gallery_scroller = gallery.querySelector('.cont');
const gallery_item_size = document.querySelector('.card').clientWidth;

document.querySelector('.next').addEventListener('click', scrollToNextPage);
document.querySelector('.prev').addEventListener('click', scrollToPrevPage);

// For paginated scrolling, simply scroll the gallery one item in the given
// direction and let css scroll snaping handle the specific alignment.
function scrollToNextPage() {
    console.log(gallery_item_size);
    
    document.querySelector('.cont').scrollRight += gallery_item_size;
}
function scrollToPrevPage() {
    document.querySelector('.cont').scrollLeft +=gallery_item_size ;
  console.log("no");
}
