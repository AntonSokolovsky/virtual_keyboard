//output file for code
const body = document.querySelector('body');
const container = document.createElement('div');
body.append(container);
container.classList.add('container');
const containerKeyboard = document.createElement('div');
container.append(containerKeyboard);
containerKeyboard.classList.add('keyboard');


const arrSymbolKeys = [['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '&#10229'],
                       ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
                       ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
                       ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift'],
                       ['Fn', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '&#9664', '&#9660', '&#9654', '&#9776']];

function createAllKeys (arrSymbolKeys) {
    arrSymbolKeys.forEach((rowKey, i) => createRowKeys(rowKey, i));
};



function createRowKeys(rowKey, i) {
    const rowKeys = document.createElement('div');
    containerKeyboard.append(rowKeys);
    rowKeys.classList.add('row');
    rowKeys.classList.add(`row-${i}`);
    rowKey.forEach((elKey) => {
        const digital = document.createElement('div');
        rowKeys.append(digital);
        digital.classList.add('key')
        digital.innerHTML = `${elKey}`
        addSpecClass(digital);
    });
       
}

function addSpecClass(digital) {
    if (digital.innerHTML === '⟵') {
        digital.classList.add('backspace')
    } else if (digital.innerHTML === 'Esc') {
        digital.classList.add('esc')
    } else if (digital.innerHTML === 'Tab') {
        digital.classList.add('tab') 
    } else if (digital.innerHTML === 'Del') {
        digital.classList.add('del') 
    } else if (digital.innerHTML === 'Caps') {
        digital.classList.add('caps') 
    } else if (digital.innerHTML === 'Enter') {
        digital.classList.add('enter') 
    } else if (digital.innerHTML === 'Shift') {
        digital.classList.add('shift')
    } else if (digital.innerHTML === 'Fn') {
        digital.classList.add('fn')
    } else if (digital.innerHTML === 'Ctrl') {
        digital.classList.add('ctrl')
    } else if (digital.innerHTML === 'Win') {
        digital.classList.add('win')   
    } else if (digital.innerHTML === 'Alt') {
        digital.classList.add('alt')  
    } else if (digital.innerHTML === '&#9776') {
        digital.classList.add('menu') 
    } else if (digital.innerHTML === '▲') {
        digital.classList.add('arrow-up') 
    } else if (digital.innerHTML === '◀') {
        digital.classList.add('arrow-left') 
    } else if (digital.innerHTML === '▼') {
        digital.classList.add('arrow-down') 
    } else if (digital.innerHTML === '▶') {
        digital.classList.add('arrow-right') 
    } else if (digital.innerHTML === ' ') {
        digital.classList.add('space') 
    }
}

createAllKeys(arrSymbolKeys);
    


