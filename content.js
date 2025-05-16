// Create a flex container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.id = 'azimuth-button-container';

// Create the image
const img = document.createElement('img');
let widthOfImage = 512;
let rotationAngle = 0;
img.src = chrome.runtime.getURL('360w.png');
img.style.top = '50%';
img.style.left = '50%';
img.style.width = widthOfImage + 'px';
img.style.zIndex = '999';
img.setAttribute("id","azimuthazimuthazimuth");

img.style.display = 'none';

// Create the + button
const plusButton = document.createElement('button');
plusButton.textContent = '+';
plusButton.id = 'azimuth-plus-button';

// Create the - button
const minusButton = document.createElement('button');
minusButton.textContent = '-';
minusButton.id = 'azimuth-minus-button';

// Create the Rotate Left button
const rotateLeftButton = document.createElement('button');
rotateLeftButton.textContent = '⟲';
rotateLeftButton.id = 'azimuth-rotate-left-button';

// Create the Rotate Right button
const rotateRightButton = document.createElement('button');
rotateRightButton.textContent = '⟳';
rotateRightButton.id = 'azimuth-rotate-right-button';

// Create the Show/Hide button
const toggleImageButton = document.createElement('button');
toggleImageButton.textContent = "👁";
toggleImageButton.id = 'azimuth-toggle-button';

// Create the Show/Hide button
//⬜
//⬛
//26AB	⚫	Medium Black Circle	26AA	⚪	Medium White Circle
const colorButton = document.createElement('button');
colorButton.textContent = "⚫";
colorButton.id = 'azimuth-color';

// Appending buttons to the container
buttonContainer.appendChild(plusButton);
buttonContainer.appendChild(minusButton);
buttonContainer.appendChild(rotateLeftButton);
buttonContainer.appendChild(rotateRightButton);
buttonContainer.appendChild(toggleImageButton);
buttonContainer.appendChild(colorButton);

// Appending elements to the body
document.body.appendChild(img);
document.body.appendChild(buttonContainer);

// Increasing the image
plusButton.addEventListener('click', () => {
    widthOfImage += 20;
    img.style.width = `${widthOfImage}px`;
});

// Decreasing the image
minusButton.addEventListener('click', () => {
    widthOfImage -= 20;
    if (widthOfImage < 256) widthOfImage = 256;
    img.style.width = `${widthOfImage}px`;
});

// Rotating the image to the left
rotateLeftButton.addEventListener('click', () => {
    rotationAngle -= 90;
    img.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
});

// Rotating the image to the right
rotateRightButton.addEventListener('click', () => {
    rotationAngle += 90;
    img.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
});

// Show/Hide the image
toggleImageButton.addEventListener('click', () => {
    img.style.display = img.style.display === 'none' ? 'block' : 'none';
});


// Show/Hide the image
colorButton.addEventListener('click', () => {

    let array = img.src.split('/');
    let lastElement = array[array.length -1];
    let nameOfImage = lastElement === '360b.png' ? '360w.png' : '360b.png'; 

    img.src = chrome.runtime.getURL(nameOfImage);

});

// Move image on CTRL + click
document.addEventListener('click', (e) => {
    if (e.ctrlKey) {
        img.style.left = `${e.pageX}px`;
        img.style.top = `${e.pageY}px`;
    }
});

