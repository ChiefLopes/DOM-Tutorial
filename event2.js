const revealBtn = document.querySelector(".reveal-btn1");

const hiddenContent = document.querySelector('.hidden-content');

const revealContent = () => {
    if (hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }
}
