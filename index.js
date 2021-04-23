const calculateTip = () => {
  let totalBill = document.getElementById('total-bill').value;
  let rating = document.getElementById('myrating').value;
  let share = document.getElementById('share').value;

  let tip;
  console.log(rating);
  if (rating === 'outstanding') {
    tip = (totalBill / 100) * 30;
  } else if (rating === 'good') {
    tip = (totalBill / 100) * 20;
  } else if (rating === 'ok') {
    tip = (totalBill / 100) * 15;
  } else if (rating === 'bad') {
    tip = (totalBill / 100) * 10;
  } else if (rating === 'terrible') {
    tip = (totalBill / 100) * 5;
  } else {
    console.log('Please choose a fuck.');
  }

  let totalTip = tip / share;
  totalTip = totalTip.toFixed(2);
  document.getElementById('tipAmount').innerHTML = totalTip + ' €';
};

const btn = document.getElementById('submit');

btn.addEventListener('click', calculateTip);
console.log('rock');
