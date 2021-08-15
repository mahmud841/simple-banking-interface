// Handle Deposit button Event 
document.getElementById('deposit-button').addEventListener('click', function (){
    // console.log('clicked button ');

    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const newAmountText = depositInput.value ;
    const newAmount =parseFloat(newAmountText);
    // console.log(depositAmount);
    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousAmountText =  depositTotal.innerText;
    const previousAmount = parseFloat(previousAmountText);

    const newDepositTotal = previousAmount + newAmount;


    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balancetTotal = document.getElementById('balance-total');
    const balanceTotalText = balancetTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newAmount;
    
    balancetTotal.innerText = newBalanceTotal;

    //clear the deposit input field 
    depositInput.value = '';
});
