function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance >2500) {
    result = "No can do.";
  } else if (distance > 2000) {
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

function ternaryCheckCity(city){
  let output;
  city === 'NYC' ? output = "Ok, sounds good." : output = "No go.";
  return output;
}

function switchOnCharmFromTip(tip){
  let output
  switch (tip) {
    case "generous":
      output = "Thank you so much.";
      break;
    case "not as generous":
      output = "Thank you.";
      break;
    default:
      output = "Bye."
  }
  return output
}