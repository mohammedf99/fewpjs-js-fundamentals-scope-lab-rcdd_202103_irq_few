let animal = "dog";

function myAnimal() {
  return animal;

}
  function yourAnimal() {
    animal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

let two;

function add2(n) {
    two = 2;
  return n + two;

  // Feel free to move things around!

}