var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'drunk', 'deployed', 'got', 'developed', 'built', 'invented', 'experienced', 'fought off', 'hardened', 'enjoyed', 'developed', 'consumed', 'debunked', 'drugged', 'doped', 'made', 'wrote', 'saw'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];


var users = [{
  name: "Toni Tralice",
  username: "@tonitralice",
  profile_pic: "https://avatars.slack-edge.com/2015-09-18/10977235269_2c26a93ae0105d154546_192.jpg"
}, {
  name: "Santi Scanlan",
  username: "@santiscanlan",
  profile_pic: "https://avatars.slack-edge.com/2015-12-28/17476816208_ae04c94897c6d65dc268_512.jpg",
}, {
  name: "Guille Aszyn",
  username: "@guilleasz",
  profile_pic: "https://avatars.slack-edge.com/2015-12-24/17359671927_16a0318a3ef5655ae10d_512.jpg",
}, {
  name: "Doge",
  username: "@dogethedog_ok",
  profile_pic: "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
}];

//Selecciona elementos random de los arreglos
var seleccionaUsuario = function(arregloUser) {
  var indiceUser = Math.floor(Math.random() * arregloUser.length)
  return arregloUser[indiceUser]
}
var arregloDepalabras = [opening, verbs, objects, nouns, tags]
var tweet = ""
///selector aleatorio de usuario

var seleccionaElemento = function(arreglo) {
  var numAleatorioPalabras = Math.floor(Math.random() * arreglo.length)

  while (numAleatorioPalabras > 0) {
    var i = Math.floor(Math.random() * arreglo.length)
    tweet += arreglo[i] && (arreglo[i] + " ")
    numAleatorioPalabras--
  }
}

var recorreArreglos = function(arregloDepalabras) {
  tweet = ""
  for (var i in arregloDepalabras) {
    seleccionaElemento(arregloDepalabras[i])

  }
  return (tweet)
}

///generador de objeto tweet



/////NEW DIV
var arregloTweets = []
var arregloTweets1 = []
var crearTweet = function(arreglo) {
  var tweetObject = {
    user: seleccionaUsuario(users), // un objeto 'user' con los datos del usuario,
    text: recorreArreglos(arregloDepalabras), // el contenido de texto del tweet,
    date: new Date(Date.now()).toLocaleString(), // la fecha en la que el tweet fue creado
  }
  arreglo.push(tweetObject)
}

//mostrar tweets
// var contador
// var mostrarTweets = function(arregloMostrar) {
//   for (var i = arregloMostrar.length - 1; i > arregloMostrar.length - 10; i--) {
//     var newDiv = $("<div class='newTweet'>")
//     newDiv.text(arregloMostrar[i].text)
//     $("#feed").prepend(newDiv)
//     contador = i
//   }
// }

var mostrarTweet = function(t) {
  var contenedor = $("<div class='contenedorTweet row'>").attr("class", "tweet");
  var img = $("<img class='imagenPerfil col-xs-3'>").attr("src", t.user.profile_pic);
  var tweet = $("<span class='textoTweet col-xs-9'>").text(t.text).attr("class", "texto");
  contenedor.append(img).append(tweet);
  $("#feed").append(contenedor);
}

function renderTweets(arr, b) {
  if (arr.length > 0) {
    for (var i = 0; i < b; i++) {
      mostrarTweet(arr.pop());
    }
  } else {
    alert("no hay más tweets")
  }
}

//TWEETS INICIALES
var tweetsIniciales = function() {
  for (var i = 0; i < 50; i++) {
    crearTweet(arregloTweets)
  }
}

tweetsIniciales()
// mostrarTweets(arregloTweets)
renderTweets(arregloTweets, 10)


//SCROLL MAS tWEEtS

var scroll = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      renderTweets(arregloTweets, 10);
    }
  })
}
scroll()

//NuEvo TWEET CADA 2 S

var tweet2seg = function() {
  setInterval(myTimer, 4000);

  function myTimer() {
    crearTweet(arregloTweets1)
    $("button").show()
    $("#but").text(arregloTweets1.length)
  }

}
tweet2seg()

// BOTON PARA MOStRAR MAS TWEETS
function renderTweets1(arr, b) {
  if (arr.length > 0) {
    for (var i = 0; i < b; i++) {
      mostrarTweet1(arr.pop());
    }
  } else {
    alert("no hay más tweets")
  }
}

var mostrarTweet1 = function(t) {
  var contenedor = $("<div>").attr("class", "tweet");
  var img = $("<img>").attr("src", t.user.profile_pic);
  var tweet = $("<span>").text(t.text).attr("class", "texto");
  contenedor.append(img).append(tweet);
  $("#feed").prepend(contenedor);
}


$("button").on("click", function(){
  renderTweets1(arregloTweets1, arregloTweets1.length)
  $("button").hide()
      })

//efecto hide
