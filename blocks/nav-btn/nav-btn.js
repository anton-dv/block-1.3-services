const menuButtons = document.querySelectorAll('.nav-btn');
const articles = document.querySelectorAll('.article')

menuButtons.forEach(menuButton => {
    menuButton.onfocus = function () {
        menuButtons.forEach(Button => {
            Button.classList.remove('active');
        });

        menuButton.classList.add('active');

        const key = menuButton.dataset.key;
        let isArticleSet = false;

        articles.forEach(article => {
            console.log(article.dataset.value)
            if (article.dataset.value == key) {
                article.classList.remove('hidden');
                isArticleSet = true;
            }
            else {
                article.classList.add('hidden');
            }
        })

        if(!isArticleSet) {
            articles.forEach(article => {
                if(article.dataset.value == 'none') article.classList.remove('hidden');
            })
        }
    };
});


