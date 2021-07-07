function scuberGreetingForFeet(num){
  let message;
  if (num < 401) {
    message = 'This one is on me!';
  }
  else if  (num > 2000 && num < 2500) {
    message = 'I will gladly take your thirty bucks.';
  }
  else if (num > 2500) {
    message = 'No can do.';
  }
  return message

}

function ternaryCheckCity(city){
    return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
  // Write your code here!
}