//Objeto global window
//Este objeto tiene sus propias propiedades o se le pueden agregar

window.name = "Batman";

function favoriteCharacter() {
  console.log(this.name);
}

favoriteCharacter();

//Importante hacer notar que este codigo se ejecuta de manera correcta directamente en el navegador

//Ahora haremos que el this no sea el objeto global window

("use strict"); //Aqui le quitamos lo permisivo a javaScript y dejamos de usar el objeto global window

window.sideKick = "Robin";

function favoriteSideKick() {
  console.log(this.sideKick); //El resultado en consola sera un error
}

favoriteSideKick();
