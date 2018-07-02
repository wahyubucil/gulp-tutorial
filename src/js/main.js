var mainHeroBtn = document.querySelector('.main-hero__btn');
var mainHeroTitle = document.querySelector('.main-hero__title span');

mainHeroBtn.addEventListener('click', function() {
    var mainHeroTitleText = mainHeroTitle.textContent;
    if (mainHeroTitleText == 'Awesome') {
        mainHeroTitle.textContent = 'Cool';
    } else {
        mainHeroTitle.textContent = 'Awesome';
    }
});