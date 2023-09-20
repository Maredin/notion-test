const promoSliper = document.querySelectorAll('.slipers__slider'),
      slidesSliper = document.querySelectorAll('.slipers__slider-item'),
      colorSliper = document.querySelectorAll('#select__color option'),
      colorWrapper = document.querySelector('#select__color');

// Функция убирает активный класс
function hide() {
    slidesSliper.forEach(item => {
        item.classList.remove('slipers__slider-item-active');
    })
    promoSliper.forEach(item => {
        item.classList.remove('slipers__slider-active');
    })
}

// Обработчик клика на мини картинки, ставит актив классы по индексу и selected в options
slidesSliper.forEach( (item, i) => {
    item.addEventListener('click', () => {
        hide();
        item.classList.add('slipers__slider-item-active');
        promoSliper[i].classList.add('slipers__slider-active');
        colorSliper[i].selected = true;
    });
} );

// Событие на Select, ставит активные классы по индексу селекта
colorWrapper.addEventListener('change', () => {
    hide();
    colorSliper.forEach( (item, i) => {
        if(item.selected) {
            promoSliper[i].classList.add('slipers__slider-active');
            slidesSliper[i].classList.add('slipers__slider-item-active');
        }
    });
})


//Таймер Эмуляция без 
window.onload = function() {
    let hour = 4;
    let minute = 51;
    let sec = 16;
    const hourTime = document.querySelector('.hour'),
        minuteTime = document.querySelector('.min'),
        secTime = document.querySelector('.sec');
    
    //Запускаем сразу для построения блока таймера на сайте
    timer();

    function timer() {
        (hour < 10) ? hourTime.textContent = '0' + hour : hourTime.textContent = hour;
        (minute < 10) ? minuteTime.textContent = ':' + '0' + minute + ':' : minuteTime.textContent = ':' + minute + ':';
        (sec < 10) ? secTime.textContent = '0' + sec : secTime.textContent = sec;
        sec--;
        if (sec == 0) {
            minute--;
            sec = 59;

            if (minute == 0) {
                minute = 59;
                hour--;
            }
        }
    }

    //Каждую сек перезапускает таймер
    setInterval(timer, 1000);
  }