function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let result

  if (someNumber < 401) {
    result = 'This one is on me!';
  } else if (someNumber > 2000 && someNumber < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (someNumber > 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!l
  let answer

  city === 'NYC' ? (answer = 'Ok, sounds good.') : (answer = 'No go.')

  return answer;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let answer

  switch(tip) {
    case 'generous':
      answer = 'Thank you so much.';
      break;
    case 'not as generous':
      answer = 'Thank you.';
      break;
    case 'thanks for everything':
      answer = 'Bye.';
      break;
  }
  return answer
}