const qutaBtn = document.getElementById('quta-btn');
qutaBtn.addEventListener('click', function(){
    const qutaInput = showInputValue('quta-input');
    const qutaBalance = showInputText('quita-balace');
    const balanceAccount = showInputBalance('account-balance');
    
    if(qutaInput > balanceAccount){
        return alert('not enough money for donation');
    }

    if(isNaN(qutaInput) || qutaInput <= 0){
        return alert('invalid donation try again')
    }

    const qutaNewBalance = qutaBalance + qutaInput;
    const qutaBalanceNew = balanceAccount - qutaInput;


    document.getElementById('account-balance').innerText = qutaBalanceNew.toFixed(2);
    document.getElementById('quita-balace').innerText = qutaNewBalance.toFixed(2);
    document.getElementById('quta-input').value = '';


    const addHistory = document.getElementById('history-section');
    const adInput = document.getElementById('input-text-third').innerText;
    const dateTime = new Date();
    const createHistory = document.createElement('div');
    createHistory.className = "border border-gray-400 rounded, p-4 mb-4";
    createHistory.innerHTML = `
        <p class="text-xl font-bold">${qutaInput} Taka is ${adInput} </p>
        <p>${dateTime}</p>
    `;
    addHistory.appendChild(createHistory);
})