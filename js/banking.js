document.getElementById('deposit-button').addEventListener('click', function() {

    // get deposit input from html tag and convert it number
    const depositInputField = document.getElementById("deposit-input")
    const inputText = depositInputField.value;
    const newDepositAmmount = parseFloat(inputText);
    
    
    // get previous Deposit number and convert it number
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText)

    // add previous deposit with new deposit and update in previous deposit html tag
    const newDepositTotal = previousDepositAmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal

    // clear the input value
    depositInputField.value =''

    // update new balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmmount;
    previousBalanceTotal.innerText = newBalanceTotal;
})

document.getElementById("withdraw-button").addEventListener('click', function() {

    //get withdraw input from html tag and covert it number
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);

    // get previous withdraw number and convert it number
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmmount = parseFloat(withdrawTotalText)

    // add previous withdraw with new withdraw and update in previous withdraw html tag
    const newWithdrawTotal = previousWithdrawTotalAmmount + newWithdrawAmount
    withdrawTotal.innerText =  newWithdrawTotal




    // update new balance
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText)
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    previousBalanceTotal.innerText = newBalanceTotal;

    // clear the input value
    withdrawInputField.value = ''
    
    
})
    