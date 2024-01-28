//Social Media Profile

//1. User Information
const userName = "Pacool84";
const fullName = "Paco Lopez";
const age = 39;
const isStudent = true;

//2. Address
const address = {
  street: "Av Nextengo",
  city: "Azcapotzalco",
  state: "CD MX",
  zipCode: 54120,
};

//3. Hobbies
const hobbies = ["Coding", "Gamer", "Reading"];

//4. Generating Personalized BIO
const personalizedBio = `Hola!! Mi nombre es ${fullName} y quiero agradecerte el tiempo que tomaste
para poder leer este repo en donde reflejo uno de mis más amados hobbies, que es ${
  hobbies[0]
}, Además
esto es algo para que un futuro mi hijo tenga algo que pueda ver de su padre.
El siempre le gusto decirme por mi nickname, que es ${userName} y al parecer le transmiti el gusto por el 
mismo hobbie, la edad que tengo es ${age} y por lo cual me llegan este tipo de ideas en donde quiero
que por medio de este tipo de cosas mi hijo encuentre pistas de lo que fue su padre.
Y para eso dejo una dirección que el solo va a poder entender, recuerda esto hijo:
${address.street + " " + address.city + " " + address.zipCode}
`;

//Print Personilized BIO
console.log(personalizedBio);
