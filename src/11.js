// Example of how to use a switch statement in JavaScript
function getFood(food) {
  let foodArray = ["apple", "banana", "orange"];
  let result;
  switch (food) {
    case "apple":
      result = "I love apples!";
      break;
    case "banana":
      result = "Yum, bananas are my favorite.";
      break;
    case "orange":
      result = "Sunshine and orange juice, that's all I need.";
      break;
    default:
      result = "Hmm, I don't recognize that food. Maybe you can try some of these other options?";
  }
  return result;
}
