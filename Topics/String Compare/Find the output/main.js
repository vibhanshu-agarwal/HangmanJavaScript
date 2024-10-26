// You can experiment here, it won’t be checked
const str = "No need to light a night-light on a light night like tonight";

// Regex is passed as an argument
let lightRegExp = /light/;
str.search(lightRegExp); // 11

// String will be converted to regexp internally
let night = "night";
str.search(night); // 19

// Passed argument is not present in str
let day = "day";
str.search(day); // -1