const countButton = 6;

//створюємо кнопки
for (let i = 1; i <= countButton; i++) {
    const btnElement = document.createElement('button');
    btnElement.textContent = i;
    document.body.append(btnElement)
}

const buttonEl = [...document.querySelectorAll('button')];

let pressed = false;
// Функція, яка перевіряє, чи всі непарні або парні кнопки були натиснуті
function checkButtons() {
    const promise = new Promise((resolve) => {

        let pressedPairButton = [];
        let pressedOddButton = [];

        buttonEl.forEach((button, number) => {

            if (number % 2 === 0 && button.dataset.pressed === "true") {
                pressedPairButton.push(button);
            }
            else if (number % 2 !== 0 && button.dataset.pressed === "true") {
                pressedOddButton.push(button)
            }
        });

        if (pressedOddButton.length === 3 && pressedPairButton.length === 3) {
            resolve("Натиснуті всі кнопки");
        }
        else if (pressedPairButton.length === 3 && pressed === false) {
            pressed = true;
            resolve("Натиснуті тільки непарні кнопки.");
        }
        else if (pressedOddButton.length === 3 && pressed === false) {
            pressed = true;
            resolve("Натиснуті тільки парні кнопки.");
        }

    })
    promise.then((value) => {
        alert(value);
    })
    return promise
}


buttonEl.forEach(btnElement => {
    btnElement.onclick = () => {
        btnElement.classList.add("shadow");
        btnElement.dataset.pressed = "true";

        checkButtons();
    }
})
