// Create PowerfullGirl objects

function PowerPuffGirl(name, color, superpower) {
  this.name = name;
  this.color = color;
  this.superpower = superpower;
  this.isLeader = false;

  //Metodo de la funcion constructora
  this.displayInfo = function () {
    console.log(`PowerPuffGirl Information:
    Name: ${this.name}
    Color: ${this.color}
    Superpower: ${this.superpower}
    ${this.isLeader ? "Leader: Yes" : "Leader: No"}
    `);
  };
  //Otro metodo de la funcion constructora
  this.becomeaLeader = function () {
    this.isLeader = true;
    console.log(`${this.name} has become the leader of the Power Puff Girls`);
  };
}

//Estas son las instancias
const blossom = new PowerPuffGirl("Blossom", "Pink", "Ice Breath");
const buttercup = new PowerPuffGirl("ButterCup", "Green", "Strength");
const bubbles = new PowerPuffGirl("Bubbles", "Blue", "Fly");

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeaLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
