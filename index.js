const countButton = 6;

for (let i = 1; i <= countButton; i++) {
    const btnElement = document.createElement('button');
    btnElement.textContent = i;
    document.body.append(btnElement)
}

const buttonEl = [...document.querySelectorAll('button')];

const buttonPromise = buttonEl.map(btnElement => new Promise(resolve => {
    btnElement.onclick = () => {
        btnElement.classList.add("shadow");
        resolve(+btnElement.textContent)
    }
}))

const pairedButtons = buttonPromise.filter((_, index) => index % 2 === 1);

const oddButtons = buttonPromise.filter((_, index) => index % 2 !== 1);

Promise.all(pairedButtons).then(() => {
    console.log('Натиснуті всі парні кнопки')

})

Promise.all(oddButtons).then(() => {
    console.log('Натиснуті всі непарні кнопки')

})
Promise.all(buttonPromise).then(() => {
    console.log('Всі кнопки натиснуті')

})