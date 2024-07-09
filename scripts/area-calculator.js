function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText); 

    // get height value

                       
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    
    
}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width)
    // get rectangle length 

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length)

    const area = width * length;
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    const areaSpan = setTextFieldText('parallelogram-area', area);

    console.log(base, height)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    // console.log(majorRadius)
    const minorRadius = getInputValue('ellipse-minor-radius');
    // console.log(minorRadius)
    const area = 3.14 * majorRadius * minorRadius;
    setTextFieldText('ellipse-area', area);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setTextFieldText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

