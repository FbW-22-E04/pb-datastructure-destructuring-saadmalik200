// const fruit = "banana";
// const vegetable = "cucumber";
// const food = ["bread", "cakes", "pizza"];

const [fruit, vegetable, food] = [
  "banana",
  "cucumber",
  ["bread", "cakes", "pizza"],
];

console.log(fruit);
console.log(vegetable);
console.log(food);

console.log(`-------------------------------------`);

const dress = {
  fran: "witch",
  alan: "doctor",
  antonio: "pilot",
};

const { fran, alan, antonio } = dress;
console.log(fran, alan, antonio);

console.log(`-------------------------------------`);

const band = {
  name: "Roxen",
  hit: "To phir aao",
  nationality: "Pakistani",
  genre: "Pop",
};

function bandData({ name, nationality, genre, hit }) {
  console.log(
    `${name} is a ${nationality} singer/songwriter and pianist. The musician sings ${genre} and their greatest hit is "${hit}"`
  );
}

bandData(band);

console.log(`-------------------------------------`);
