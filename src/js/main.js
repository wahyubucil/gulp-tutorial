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

var descriptionContentBtn = document.querySelector('.description-content__btn');
var descriptionContentTitle = document.querySelector('.description-content__title span');

descriptionContentBtn.addEventListener('click', function() {
    var descriptionContentTitleText = descriptionContentTitle.textContent;
    if (descriptionContentTitleText == 'Gorgeous') {
        descriptionContentTitle.textContent = 'Beautiful';
    } else {
        descriptionContentTitle.textContent = 'Gorgeous';
    }
});