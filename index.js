function scuberGreetingForFeet(num){
  if(num <= 400) {
    return "This one is on me!";
  } else if (num < 2500 && num > 1999) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city){
  // if (city == "NYC") {
  //   return "Ok, sounds good."
  // } else {
  //   return "No go."
  // }
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}