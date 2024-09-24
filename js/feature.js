function showInputValue(id){
    const showId = parseFloat(document.getElementById(id).value);
    return showId;
}

function showInputText(id){
    const showText = parseFloat(document.getElementById(id).innerText);
    return showText;
}

function showInputBalance(id){
    const showBalnce = parseFloat(document.getElementById(id).innerText);
    return showBalnce;
}


const historyBtn = document.getElementById('history');
historyBtn.addEventListener('click', function(){
    const donateSection = document.getElementById('donate');
    const mainDonateSsetction = document.getElementById('main-donated-section');
    mainDonateSsetction.classList.add('hidden');

    const historyShow = document.getElementById('history-section');
    historyShow.classList.remove('hidden')

    donateSection.classList.remove('bg-[#B4F461]');
    donateSection.classList.add('bg-[#fff]');

    historyBtn.classList.remove('bg-[#fff]');
    historyBtn.classList.add('bg-[#B4F461]');

})


const donateSection = document.getElementById('donate');
donateSection.addEventListener('click', function(){
    const historyBtn = document.getElementById('history');
    const mainDonateSsetction = document.getElementById('main-donated-section');
    mainDonateSsetction.classList.remove('hidden');
    
    const historyShow = document.getElementById('history-section');
    historyShow.classList.add('hidden')

    historyBtn.classList.remove('bg-[#B4F461]')
    historyBtn.classList.add('bg-[#fff]');

    donateSection.classList.remove('bg-[#fff]');
    donateSection.classList.add('bg-[#B4F461]');
    
})