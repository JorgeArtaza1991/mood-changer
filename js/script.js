function moodChanger(value) {
    let message = document.querySelector('h1');
    text = 'How do you feel Today? ';
    let liTired = document.querySelector('.tired');
    let liConfused = document.querySelector('.confused');
    let liProud = document.querySelector('.proud');
    let liAfraid = document.querySelector('.afraid');
    let liEmbarrassed = document.querySelector('.embarrassed');
    let liHurt = document.querySelector('.hurt');
    let liHungary = document.querySelector('.hungary');
    let liShy = document.querySelector('.shy');

    if(value == 1) {
        text += 'I feel Tired';
        liTired.classList.add('grayBorder');
    } else {
        liTired.classList.remove('grayBorder');
    }

    if(value == 2){
        text += 'I feel Confused';
         liConfused.classList.add('darkGrey');
    } else {
        liConfused.classList.remove('darkGrey');
    }

    if (value == 3) {
        text += 'I feel Proud';
        liProud.classList.add('purpleBorder');
    } else {
        liProud.classList.remove('purpleBorder');
    }

    if(value == 4) {
        text += 'I feel Afraid';
        liAfraid.classList.add('redBorder');
    } else {
        liAfraid.classList.remove('redBorder');
    }

    if (value == 5) {
        text += 'I feel Embarrassed';
        liEmbarrassed.classList.add('lightRed');
    } else {
        liEmbarrassed.classList.remove('lightRed');
    }

    if(value == 6) {
        text += 'I feel Hurt';
        liHurt.classList.add('darkRed');
    } else {
        liHurt.classList.remove('darkRed');
    }

    if (value == 7){
        text += 'I feel Hungary';
        liHungary.classList.add('orangeBorder');
    } else {
        liHungary.classList.remove('orangeBorder');
    }

    if (value == 8) {
        text += 'I feel Shy';
        liShy.classList.add('blueBorder');
    } else {
        liShy.classList.remove('blueBorder');
    }

    message.innerHTML = text;
}
moodChanger();
