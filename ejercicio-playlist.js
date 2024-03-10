//Ejercicio Manejando una PLAYLIST
/* 
-Crear una funcion para manejar una playlist.
-La funcion debe de obtener un arreglo con la playlist.
-Debe de tener una funcion para remover la primer cancion de la playlist.
usando el metodo shift.
-Debe de tener una funcion para agregar una cancion al principio de la lista 
usando el metodo unshift.
-Devolver la playlist actualizada para ser visualizada.
*/

const initialPlayList = ["One Last Song", "Crawling"];
const newSongToAdd = "La pelota se enamoro";

function managePlayList(playList, newSong) {
  playList.shift();
  playList.unshift(newSong);
  return playList;
}

const updatedPlayList = managePlayList(initialPlayList, newSongToAdd);

console.log(initialPlayList);
console.log(newSongToAdd);
console.log(updatedPlayList);

//Otra forma de resolver el ejercicio

const SpotifyList = ["Tu recuerdo divino", "La pelota se enamoro"];

let optionMenu = 2;

function manageSpotifyList(keyMenu) {
  switch (keyMenu) {
    case 1:
      let sonToADD = "As Long as you love me";
      addSongToPlayList(sonToADD);
      break;

    case 2:
      removeFirstSongFromPlayList();
      break;

    default:
      break;
  }
}

function addSongToPlayList(newSongToPlayList) {
  SpotifyList.unshift(newSongToPlayList);
  console.log(SpotifyList);
}

function removeFirstSongFromPlayList() {
  SpotifyList.shift();
  console.log(SpotifyList);
}

manageSpotifyList(optionMenu);
