function scuberGreetingForFeet(someNumber){
  if (someNumber < 200) {
    return "This one is on me!";
  }
  else if (someNumber > 2000 && someNumber < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }

}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.';
  }
}