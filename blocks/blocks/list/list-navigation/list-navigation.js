const navControls = document.querySelectorAll('.list-navigation__control');
const articles    = document.querySelectorAll('.article')

const arrControls = Array.from(navControls.values());
const arrArticles = Array.from(articles.values());

const classActive = 'active';

navControls.forEach(actualControl => {
    actualControl.onfocus = () => {
        const currentControl = getCurrent(arrControls);
        if(currentControl == actualControl) return;

        switchItem(currentControl, actualControl)

        const index = actualControl.dataset.index;
        const currentArticle = getCurrent(arrArticles);

        if(!currentArticle) return;
        let actualArticle = arrArticles.find((e) => e.dataset.index == index);

        if(!actualArticle) actualArticle = arrArticles.find((e) => e.dataset.index == 'none');
        switchItem(currentArticle, actualArticle)
    };
});


function getCurrent (arr) {
    return arr?.find((e) => e.classList.contains(classActive));
}

function switchItem (current, actual) {
    current.classList.remove(classActive);
    actual.classList.add(classActive);
}