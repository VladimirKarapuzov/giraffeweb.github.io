window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

function botToggleUp() {
    messages = document.querySelectorAll('.message');
    document.querySelector('.wrapWrapper').classList.add('botActive');
    document.querySelector('.mainButton').classList.add('buttonUp');
    document.querySelector('.mainButton').classList.remove('toucanAnime');
    document.querySelector('.background').classList.add('ing');
    document.querySelector('body').classList.add('noneScroll');
    setTimeout(backUp, 200);
    if (messages.length >= 1){
        setTimeout(deleteUp, 400);
    };
};
function botToggleDown() {
    document.querySelector('.wrapWrapper').classList.remove('botActive');
    document.querySelector('.mainButton').classList.remove('buttonUp');
    document.querySelector('.background').classList.remove('ing');
    document.querySelector('body').classList.remove('noneScroll');
    backDown();
    deleteDown();
};
function buttonClose() {
    document.querySelector('.mainButton').classList.add('buttonClose');
};




function backUp() {
    document.querySelector('.back').classList.add('backActive');
};
function backDown() {
    document.querySelector('.back').classList.remove('backActive');
};
function deleteUp() {
    document.querySelector('.delete').classList.add('backActive');
};
function deleteDown() {
    document.querySelector('.delete').classList.remove('backActive');
};



function key13(event) {
    input = document.querySelector('.botSender');
    button = document.querySelector('.botKey');
    if (input.value != '') {
        if (event.keyCode === 13) {
            event.preventDefault();
            button.click();
        };
    };
};



function deleteAll() {
    messages = document.querySelectorAll('.message');
    messages.forEach(function(item){
        item.parentNode.removeChild(item);
    });
    document.querySelector('.deleteAlert').classList.remove('aAlert');
    setTimeout(deleteDown, 200);
};
function alertDeleteUp() {
    document.querySelector('.deleteAlert').classList.add('aAlert');
};
function alertDeleteDown() {
    document.querySelector('.deleteAlert').classList.remove('aAlert');
};


function sendMessage() {
    input = document.querySelector('.botSender');
    if (input.value != '') {
        messageValue = document.querySelector('.botSender').value;
        field = document.querySelector('.field');
        message = document.createElement('div');
        messWrap = document.createElement('div');
        messageP = document.createElement('p');
        message.className = 'send message';
        messageP.innerHTML = messageValue;
        field.appendChild(message);
        message.appendChild(messWrap);
        messWrap.appendChild(messageP);
        field.scrollTop = field.scrollHeight;
        document.querySelector('.botSender').value = '';
        document.querySelector('.botSender').focus();
        setTimeout(deleteUp, 200);
        dir1 = ['привет', 'здра', 'здар', 'здор', 'hi', 'hello', 'hallo', 'хай'];
        dir2 = ['задниц', 'хрен', 'жоп', 'дау', 'дебил', 'соси', 'ху', 'чле', 'дур'];
        dir3 = ['заказ', 'куп', 'приобре', 'устано', 'работ', 'беспл'];
        dir4 = ['кто ты', 'кто вы', 'ты кто', 'вы кто', 'команд', 'список', 'помо', 'заним', 'что это'];
        dir5 = ['свидан', 'пока', 'до скорого', 'пасиб', 'прощай', 'встреч', 'благодар'];
        dir6 = ['дела', 'жизнь'];
        dir7 = ['связь', 'обратная связь', 'отзыв', 'связаться', 'номер телефона'];
        for (item of dir1) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Привет! Чем могу вам помочь?';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
            };
        };
        for (item of dir3) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Установка toucan.bot бесплатна, Вы можете заказать установку, возпользуясь формой ниже или написав нам на почту dmitriyhernov1@yandex.ru';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
            };
        };
        for (item of dir4) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Я ваш индивидуальный помощник Туканчик по данному сайту. Спросите меня, что вас конкректно интересует?';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
            };
        };
        for (item of dir5) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Рад помочь!';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
                setTimeout(botToggleDown, 3000);
            };
        };
        for (item of dir6) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Отлично, рад, что спросили!';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
            };
        };
        for (item of dir2) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Вы очень некультурный человек! Я не хочу с вами разговаривать! Тук-тук';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
                setTimeout(botToggleDown, 3000);
                setTimeout(buttonClose, 3500);
            };
        };
        for (item of dir7) {
            lowerValue = messageValue.toLowerCase();
            if (lowerValue.includes(item)) {    
                botMessage = document.createElement('div');
                botMessWrap = document.createElement('div');
                botMessageP = document.createElement('p');
                botMessage.className = 'reply message';
                botMessageP.innerHTML = 'Наши контакты доступны возле формы "обратной связи", будем рады вашему отклику.';
                field.appendChild(botMessage);
                botMessage.appendChild(botMessWrap);
                botMessWrap.appendChild(botMessageP);
                field.scrollTop = field.scrollHeight;
            };
        };
        sends = document.querySelectorAll('.message');
        lastSend = sends[sends.length - 1];
        lastClass = lastSend.getAttribute('class');
        if (lastClass == 'send message') {
            botMessage = document.createElement('div');
            botMessWrap = document.createElement('div');
            botMessageP = document.createElement('p');
            botMessage.className = 'reply message';
            botMessageP.innerHTML = 'Извините, я вас не понимаю!';
            field.appendChild(botMessage);
            botMessage.appendChild(botMessWrap);
            botMessWrap.appendChild(botMessageP);
            field.scrollTop = field.scrollHeight;
        };
    };
};
