const expenseReason = document.querySelector('#reason');
const expenseAmount = document.querySelector('#amount');
const cancelButton = document.querySelector('#cancel');
const confirmButton = document.querySelector('#confirm');
const elementsList = document.querySelector('#elementList');
const totalExpense= document.querySelector('#totalExpense');
var total=0;
function clearData(){
    expenseAmount.value='';
    expenseReason.value='';
}

function confirmAmt(){
    const reason = expenseReason.value;
    const amt = expenseAmount.value;
    if(reason.trim().length<=0 || amt<=0 || amt.trim().length<=0){
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Input';
        alert.message = 'Enter Valid Input for Reason and Amount';
        alert.buttons = ['OK'];
        document.body.appendChild(alert);
        alert.present();
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = reason + ': Rs' + amt;
    elementsList.appendChild(newItem);
    total+= parseInt(amt);
    totalExpense.textContent=total;
    clearData();
}

function cancelAmt(){
    clearData();
}
