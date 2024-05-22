function changeLanguage() {
    const elements = document.querySelectorAll('[data-ru],[data-en]');
    const lang = localStorage.getItem('lang');
    if (lang === 'ru') {
        elements.forEach(element => {
            if (element.dataset.ru) {
                element.textContent = element.dataset.ru;
            }
        });
    } else {
        elements.forEach(element => {
            if (element.dataset.en) {
                element.textContent = element.dataset.en;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    changeLanguage();
    document.querySelector('#language-toggle-button').addEventListener('click', function () {
        const lang = localStorage.getItem('lang');
        if (lang === 'ru') {
            localStorage.setItem('lang', 'en');
        } else {
            localStorage.setItem('lang', 'ru');
        }
        changeLanguage();
    });
});


document.getElementById('menu-toggle-button').addEventListener('click', function () {
    document.getElementById('menu-list').classList.toggle('open'); // Добавление/удаление класса "open" для показа/скрытия меню
    document.querySelector('.ml-auto.w-full.flex-grow.pt-6.lg\\:flex.lg\\:w-auto.lg\\:items-center.lg\\:pt-0').classList.remove('hidden');
});