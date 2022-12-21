let colorArray ;


function fetchingData(){
    console.log('ddddd')
    colorArray = []

    const schemeMode = document.getElementById('scheme-mode').value
    const colorInput = document.getElementById('color-input').value.replace('#','')
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${schemeMode}`)
    .then(res => res.json())
    .then(data => {
        data.colors.forEach(color => 
            colorArray.push(color.hex)
            
        );
        displayColor() }
    )

   

}

function displayColor(){
    let colorArrayHtml = ''
    colorArrayHtml = colorArray.map(color => 
        `<div>
            <div class='color' style=' background:${color.value}'></div>
            <p style=' background:white'>#${color.clean}</p>
        </div>`)
    document.getElementById('scheme').innerHTML = colorArrayHtml.join('')
}
document.getElementById('get-btn').addEventListener('click',fetchingData)

