// function setBackgroundColorById(elementID) {

//     const elemnt = document.getElementsById(elementID);
//     elemnt.classList.add('bg-Orange-500');
// }

function getElementsTextById(elementId){

    const element = document.getElementById(elementId);
    const elementsText = element.innerText;
    return elementsText;

}

function setBackgroundColorById(idName) {

    const element = document.getElementById(idName);
    element.classList.add('bg-[#1DD100]','text-white')
}

function getTextElemenValueById(elementId) {
    const element = document.getElementById(elementId);

    const elementValueText = element.innerText;

    const value = parseInt(elementValueText);

    return value;
}


function setElementById(elementId, value) {

    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementsValueById(elementId){

    const element = document.getElementById(elementId);
    const elementValue = element.value;
    return elementValue;
}


function hideElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId) {

    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}