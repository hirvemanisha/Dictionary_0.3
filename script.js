const inputField = document.getElementById('searchInput');
const inputBtn = document.getElementById('btn')

const getData=async(serchValue)=>{
    let data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`);
    let jsonData=await data.json();

    document.getElementById('Result').innerHTML=""
    let div=document.createElement('div');
    div.innerHTML=`
   <h2>Word : <span>${jsonData[0].word}<span><h2>
   <h2>${jsonData[0].meanings[0].partOfSpeech}<h2>
   <h4>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}<span><h4>
   <h4>Synonyms: <span>${jsonData[0].meanings[0].synonyms}<span><h4>`;
   document.getElementById('Result').appendChild(div)    
}


inputBtn.addEventListener('click',function(){
    let serchValue=inputField.value;
    if (serchValue==''){
        alert('First Enter Word')
    }else{
        getData(serchValue)

    }

})



   



















