const inputText = document.getElementById('input-txt');
const outputText = document.getElementById('output-txt');
const translateBtn = document.getElementById('translate-btn');

function error(){
    outputText.innerText ="some server error occured this might be you send too many request.. try again some time";
}

function translateToPirateLang(){
   
    if(inputText.value){
        const url= `https://api.funtranslations.com/translate/pirate.json?text=${inputText.value}`;
        fetch(url)
        .then(data => data.json())
        .then((data)=>{
        outputText.innerText = data.contents.translated
        console.log(data)
    }).catch(error)
   }else{

        alert('Please enter some text..')
    }
}

translateBtn.addEventListener('click',translateToPirateLang)