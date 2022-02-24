"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var CHARACTERS = [{
  id: 1,
  name: "Android 16"
}, {
  id: 2,
  name: "Andeoid 17"
}, {
  id: 3,
  name: "Android 18"
}, {
  id: 4,
  name: "Android 21"
}, {
  id: 5,
  name: "Android 21 (lab coat)"
}, {
  id: 6,
  name: "Bardock"
}, {
  id: 7,
  name: "Beerus"
}, {
  id: 8,
  name: "Broly"
}, {
  id: 9,
  name: "Broly (Super)"
}, {
  id: 10,
  name: "Buu"
}, {
  id: 11,
  name: "Captain Ginyu"
}, {
  id: 12,
  name: "Cell"
}, {
  id: 13,
  name: "Cooler"
}, {
  id: 14,
  name: "Frieza"
}, {
  id: 15,
  name: "Zamasu (Fused)"
}, {
  id: 16,
  name: "Gohan (Adult)"
}, {
  id: 17,
  name: "Goku (GT)"
}, {
  id: 18,
  name: "Goku Black"
}, {
  id: 19,
  name: "Goku"
}, {
  id: 20,
  name: "Gotenks"
}, {
  id: 21,
  name: "Hit"
}, {
  id: 22,
  name: "Janemba"
}, {
  id: 23,
  name: "Jiren"
}, {
  id: 24,
  name: "Kefla"
}, {
  id: 25,
  name: "Kid Buu"
}, {
  id: 26,
  name: "Krillin"
}, {
  id: 27,
  name: "Master Roshi"
}, {
  id: 28,
  name: "Nappa"
}, {
  id: 29,
  name: "Piccolo"
}, {
  id: 30,
  name: "Gogeta (SS4)"
}, {
  id: 31,
  name: "Super Baby 2"
}, {
  id: 32,
  name: "Gogeta (SSGSS)"
}, {
  id: 33,
  name: "Goku (SSGSS)"
}, {
  id: 34,
  name: "Vegeta (SSGSS)"
}, {
  id: 35,
  name: "Vegito (SSGSS)"
}, {
  id: 36,
  name: "Goku (Super Saiyan)"
}, {
  id: 37,
  name: "Vegeta (Super Saiyan)"
}, {
  id: 38,
  name: "Gohan (Teen)"
}, {
  id: 39,
  name: "Tien"
}, {
  id: 40,
  name: "Trunks"
}, {
  id: 41,
  name: "Goku (Ultra Instinct)"
}, {
  id: 42,
  name: "Vegeta"
}, {
  id: 43,
  name: "Videl"
}, {
  id: 44,
  name: "Yamcha"
}];
var player1 = [];
var player2 = [];
var NUMBER_OF_CHARACTERS = 44;

var generateRandomCharacters = function generateRandomCharacters(player) {
  var roster = [];

  for (i = 0; i < 3; i++) {
    var _character = void 0;

    if (player instanceof Array) {
      while (true) {
        _character = Math.ceil(Math.random() * NUMBER_OF_CHARACTERS);
        if (roster.includes(_character)) continue;
        roster.push(_character);
        break;
      }
    }
  }

  console.log(roster);
  player = roster.map(function (id) {
    return CHARACTERS.find(function (character) {
      return character.id === id;
    });
  });
  console.log(player);
  return player;
};

player1 = generateRandomCharacters(player1);
player2 = generateRandomCharacters(player2); // console.log(player1, player2);

var displayCharacters = function displayCharacters(player, side) {
  var _document$querySelect, _document$querySelect2;

  var section = [];

  for (i = 0; i < 3; i++) {
    character = {};
    if (!player instanceof Array) return;

    var _char = document.createElement('div');

    var image = document.createElement('div');
    var name = document.createElement('h4');
    image.classList.add('image');
    image.style.backgroundImage = "url(@resources/Characters/".concat(player[i].id, ".png)");
    name.classList.add('name');
    name.innerText = player[i].name;

    _char.classList.add('character');

    _char.appendChild(image);

    _char.appendChild(name);

    section.push(_char);
    console.log(section);
  }

  switch (side) {
    case 'left':
      (_document$querySelect = document.querySelector('.left')).append.apply(_document$querySelect, _toConsumableArray(section.map(function (character) {
        return character;
      })));

      break;

    case 'right':
      (_document$querySelect2 = document.querySelector('.right')).append.apply(_document$querySelect2, _toConsumableArray(section.map(function (character) {
        return character;
      })));

      break;
  }
};

displayCharacters(player1, 'left');
displayCharacters(player2, 'right');