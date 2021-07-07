function scuberGreetingForFeet(feet){
  if (feet < 399){
    return 'This one is on me!'}
  else if (feet > 2000 && feet < 2500){
    return 'I will gladly take your thirty bucks.'}
  else if ( feet > 2500){
    return 'No can do.'}
}

function ternaryCheckCity(city){
  if (city == "NYC" ) {
    return 'Ok, sounds good.'
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  if (tip == 'generous'){
      return 'Thank you so much.';}
  else if (tip == 'not as generous'){
      return 'Thank you.';}
  else{
      return 'Bye.';
  }
}