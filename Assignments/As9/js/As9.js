/*
    Name: Hoang Do
    Email: Hoang_Do@student.uml.edu
    Major:Computer Science, School : UMass Lowell, Class:   91.61 GUI Programming I
    Date created: Dec 18,2019
    A9: Scrabble
    Description: Implementing a Bit of Scrabble with Drag-and-Drop
    Copyright [2019] by Hoang Do. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
*/
// learnt from
//https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/
//http://yongcho.github.io/GUI-Programming-1/assignment9.html
//http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range

"use strict";
//Tile setup, and images
// From https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};

// Setup for scrabbleBoard with image and property
// https://jesseheines.com/~heines/91.461/91.461-2015-16f/461-assn/
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
//row 1
scrabbleBoard.slots[0][0] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][1] = { "wordMultiplier": 2, "letterMultiplier": 1, "image": "img/double_word.png"};
scrabbleBoard.slots[0][2] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][3] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][4] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][5] = { "wordMultiplier": 1, "letterMultiplier": 3, "image": "img/triple_letter.png"};
scrabbleBoard.slots[0][6] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};

//row 2
scrabbleBoard.slots[1] = [];
scrabbleBoard.slots[1][0] = { "wordMultiplier": 1, "letterMultiplier": 2, "image": "img/double_letter.png"};
scrabbleBoard.slots[1][1] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[1][2] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[1][3] = { "wordMultiplier": 3, "letterMultiplier": 1, "image": "img/triple_word.png"};
scrabbleBoard.slots[1][4] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[1][5] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[1][6] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};

//row 3
scrabbleBoard.slots[2] = [];
scrabbleBoard.slots[2][0] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[2][1] = { "wordMultiplier": 3, "letterMultiplier": 1, "image": "img/triple_word.png"};
scrabbleBoard.slots[2][2] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[2][3] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[2][4] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[2][5] = { "wordMultiplier": 1, "letterMultiplier": 3, "image": "img/triple_letter.png"};
scrabbleBoard.slots[2][6] = { "wordMultiplier": 1, "letterMultiplier": 1, "image": "img/Scrabble_BlankSquare_81x87.jpg"};


// Globals to track current score.
var scrabbleScore = { "totalScore": 0, "score": 0};

// Calculates the score for each move and add up to total score.
scrabbleScore.calBS = function() {
  var eRow, eCol, letter, letterValue, wordMultiplier = 1, currentScore = 0;

  // Test word before update score
  if (!testWord()) {
    return 0;
  }

  // Mul the tile score  to the board multifier corresponding
  for (eRow = 0; eRow < 3; ++eRow) {
    for (eCol = 0; eCol < 7; ++eCol) {
      letter = scrabbleBoard.slots[eRow][eCol].letter;
      if (letter) {
        letterValue = scrabbleTiles[letter].value;
        currentScore += letterValue * scrabbleBoard.slots[eRow][eCol].letterMultiplier;
        wordMultiplier *= scrabbleBoard.slots[eRow][eCol].wordMultiplier;
      }
    }
  }
  currentScore *= wordMultiplier;

  //return the value after calculating
  return currentScore;
}

// update score to the ScoreBoard after calculating
scrabbleScore.refresh = function() {
  var currentScore = scrabbleScore.calBS();
  $("#score").css("color", "red");
  $("#score").html(currentScore);
  // if (currentScore > 0) {
  //   $("#currentScore").css("color", "green");
  // } else {
  //   $("#currentScore").css("color", "red");
  // }
}

// Add the score to the Total score and update new value
scrabbleScore.commit = function() {
  var currentScore = scrabbleScore.calBS();
  scrabbleScore.totalScore += currentScore;
  $("#tScore").html(scrabbleScore.totalScore);
  if (scrabbleScore.totalScore > 0) {
    $("#tScore").css("color", "green");
  }
}

// Restart the game, change the score and total score to 0
scrabbleScore.restart = function() {
  scrabbleScore.totalScore = 0;
  $("#score").html(0);
}

// Construct the board game
scrabbleBoard.makeBoard = function() {
  var row, col, imgPath, slot;

  // Set the board hight corresponding to row
  $("#ScarbbleBoard").css("height", 273);
  // Set the board hight corresponding to row
  $("#ScarbbleBoard").css("width", 595);

  // Lay down the board images.
  for (row = 0; row < 3; ++row) {
    for (col = 0; col < 7; ++col) {
      imgPath = scrabbleBoard.slots[row][col].image;
      slot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + imgPath + ")\" />");
      $("#ScarbbleBoard").append(slot);
      slot.css({"width": 81, "height": 87, "margin": 1, "border-width": 1});
    }
  }
}

  // Restart the game, remove all the tiles on the board
  scrabbleBoard.resetBoard = function() {
  var eRow, eCol;
  $("#ScarbbleBoard img").remove();

  // Reset the slot data structure.
  for (eRow = 0; eRow < 3; ++eRow) {
    for (eCol = 0; eCol < 7; ++eCol) {
      delete scrabbleBoard.slots[eRow][eCol].tileId;
      delete scrabbleBoard.slots[eRow][eCol].letter;
    }
  }
}

// get the ID of the tile from the slot
scrabbleBoard.tileID = function(row, col) {
  return scrabbleBoard.slots[row][col].tileId;
}

// Get the letter from the slot
scrabbleBoard.getLetter = function(row, col) {
  return scrabbleBoard.slots[row][col].letter;
}

// Check the slot is avilable or not
scrabbleBoard.isAvailable = function(row, col) {
  return typeof(scrabbleBoard.slots[row][col].tileId) === "undefined";
}

// Function add the tile to an available slot
scrabbleBoard.addTile = function(tileId, letter, row, col) {
  var eRow, eCol;

  // Move the tile to another slot
  for (eRow = 0; eRow < 3; ++eRow) {
    for (eCol = 0; eCol < 7; ++eCol) {
      if (scrabbleBoard.slots[eRow][eCol].tileId === tileId) {
        delete scrabbleBoard.slots[eRow][eCol].tileId;
        delete scrabbleBoard.slots[eRow][eCol].letter;
      }
    }
  }

  // Mark the slot that has the tile now
  scrabbleBoard.slots[row][col].letter = letter;
  scrabbleBoard.slots[row][col].tileId = tileId;
}

// Mark the slot that the tile has move out
scrabbleBoard.deleteFromSlot = function(row, col) {
  delete scrabbleBoard.slots[row][col].tileId;
  delete scrabbleBoard.slots[row][col].letter;
}

// Mark the position of the tile on the board
scrabbleBoard.findSlotFromTileId = function(tileId) {
  var eRow, eCol;
  for (eRow = 0; eRow < 3; ++eRow) {
    for (eCol = 0; eCol < 7; ++eCol) {
      if (scrabbleBoard.slots[eRow][eCol].tileId === tileId) {
        return [eRow, eCol];
      }
    }
  }
  return false;
}

// Get random n tile from deck and put it in the Deck. Decrease the number of Tile reamining in the Deck
function getFromDeck(n) {
  var pickTile = [];
  var allTiles = [];

  // Make an array of all remaining tiles for a random selection.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allTiles.push(key);
      }
    }
  }

  // Pick n tile or all the tile if the remaining tiles less than n
  for (var i = 0; i < n; ++i) {
    if (allTiles.length) {
      var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
      var randomLetter = allTiles[randomIndex];
      pickTile.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);
    }
  }
  // Update the remaining tiles on the page.
  $("#remainingTiles").html(allTiles.length);
  return pickTile;
}

// Total number of tile in Deck
function totalTile() {
  var numTotalTiles = 0;
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      numTotalTiles += scrabbleTiles[key]["number-remaining"];
    }
  }
  return numTotalTiles;
}

// Number of tile in the rack
function tileOnRack() {
  return $("#rack img").length;
}

// Restart the game
function restart() {
  // Clear the rack.
  $("#rack img").remove();

  // Remove all tiles from the board.
  scrabbleBoard.resetBoard();

  // Reset the number of tile
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }

  scrabbleScore.restart();

  submit();
}

// Add the score to the total score, remove all the tile from the board. Refill random tiles from the deck to the rack
function submit() {
  var i, key, tileImageId, newTile, pickTile;

  scrabbleScore.commit();

  // reset the board.
  scrabbleBoard.resetBoard();

  // Refill random tiles from the deck to the rack
  pickTile = getFromDeck(7 - tileOnRack());
  for (i = 0; i < pickTile.length; ++i) {
    key = pickTile[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"lTile\" letter=\"" + key + "\" />");
    if (key == "_") {
      newTile.addClass("blankTile");
    }
    // Add tile image.
    $("#rack").append(newTile);
    $("#score").html(0);
    // Apply CSS condition for the tile being on the rack. Apply CSS rule to this class to do minor position
    // adjustment to the tile image in order to make it sit naturally on the rack background image.
    newTile.addClass("tileRack");

    // Make the tile draggable.
    newTile.draggable({
      revertDuration: 200,  // msec
      start: function(event, ui) {
        // Tile should be on top of everything else when being dragged.
        $(this).css("z-index", 99);

        // Revert option needs to be manually reset because it may be modified by droppables
        // to force reverting after dropping has occured.
        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        // Once finished dragging, revert the z-index.
        $(this).css("z-index", "");
      }
    });
  }

  // Clear the current word display.
  $("#word").html("");

  // Clear the check marks next to the instruction texts as nothing has been played yet.
  // checkSingleWord(false);
  // checkTwoLettersAndMore(false);
  // checkDictionary(false);

  if (totalTile() == 0) {
    // We ran out of tiles to pickTile out. Disable moving on to the next word by switching 'next-word'
    // button to 'finish' button.
    document.getElementById("submitWord").disabled = false;
    $("#messages").css("color", "green");
    document.getElementById("messages").innerHTML = "Congratulation! You finish the whole game!!"
  } else {
    // Disable 'next Word' button initially. A valid word must be created in order to
    // proceed to the next word.
    document.getElementById("submitWord").disabled = true;
  }
}


// Generates a unique string to be used as a tile ID. This function generates a unique string
// as long as the page stays loaded.
function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

  return id;
}

// Returns a random integer between min (inclusive) and max (inclusive).
// Source:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if a string is a valid dictionary word.
// Source: Student note on Piazza (https://piazza.com/class/icm9jynacvn5kx?cid=43)
function isDictionaryWord(possibleWord) {
  if (possibleWord.length > 0 && isDictionaryWord.dict[possibleWord]) {
    return true;
  }

  return false;
}
// The dictionary lookup object
isDictionaryWord.dict = {};
// Do an ajax request for the dictionary file.
$.ajax({
  url: 'dictionary.txt',
  success: function(result) {
    // Get an array of all the words.
    var words = result.split("\n");

    // Add them as properties to the dictionary lookup object.
    // This will allow for fast lookups later. All words are converted to capital letters
    // to make things simple since Scrabble is case insensitive.
    for (var i = 0; i < words.length; ++i) {
      isDictionaryWord.dict[words[i].toUpperCase()] = true;
    }
  }
});

// Reads the letters on the board and checks if it is a valid Scrabble word.
// Updates the page contents based on the validation result.
// This function assumes we only have one horizontal line on the board. It needs to be
// changed if we're going to upgrade to 2D board.
// Returns
// The word: for a valid word
// false   : for an invalid word
function testWord() {
  var eRow,eCol , letter, errorCount, word = "", counter = [], marker =[];
  counter[0] = 0;
  counter[1]= 0;
  counter [2] = 0;
  errorCount = 0;
  // Read each letter from the board and append them to word string.
  for (eRow = 0; eRow < 3; ++eRow) {
    for (eCol = 0; eCol < 7; ++eCol) {
      letter = scrabbleBoard.getLetter(eRow, eCol);
      if (typeof(letter) === "undefined") {
        // Use special character to represent an empty slot.
        word += "\xB7";  // middle dot character
      } else {
        word += letter;
        counter[eRow]++;
        marker[eRow] = eCol;
      }
    }


    if (counter[0] == 1 && counter[1] == 0 && counter[2] == 1 || (counter[0] == 1 && counter[1] == 1 && counter[2] == 1 && (marker[0] != marker[1] || marker[1] != marker[2])) ||(counter[0] == 1 && counter[1] == 1 && counter[2] == 0 && marker[0] != marker[1]) || (counter[0] == 0 && counter[1] == 1 && counter[2] == 1 && marker[1] != marker[2]) ) {
      errorCount = 10;
      break;
    } else if ((counter[0] > 1 && (counter[1] > 0 || counter[2] > 0)) || (counter[1] > 1 && (counter[0] > 0 || counter[2] > 0)) || (counter[2] > 1 && (counter[0] > 0 || counter[1] > 0))) {
      errorCount = 9;
      break;
    } else if (counter[0] > 0 ||counter[1] > 0 || counter[2] > 0) {
      word = word.replace(/^\xB7+/, "");
      word = word.replace(/\xB7+$/, "");
    }
 }

  if ((counter[0] == 1 && counter[1] == 1 && counter[2] == 0 && marker[0] == marker[1]) || (counter[0] == 0 && counter[1] == 1 && counter[2] == 1 && marker[1] == marker[2]) || (counter[0] == 1 && counter[1] == 1 && counter[2] == 1  && marker[0] == marker[1] && marker[1] == marker[2])){
    word = word.replace(/\xB7/gi, "");
  }



  $("#word").html(word);

  // Now let's check for any errors in the word. Update the page contents as we check each condition.


  // Check if we have anything on the board.
  if (word == "") {
    checkSingleWord(false);
    errorCount = 8;
  } else {
    // Check if there is a gap within letters. Gap is not allowed.
    var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");
    if (rgxDisconnectedWord.test(word)) {
      // checkSingleWord(false);
      errorCount = 10;
    } else {
      // checkSingleWord(true);
    }
  }

  // Check if the word has at least 2 letters. Words with one letter may show up in an English dictinonary
  // but are not allowed in Scrabble.
  if (word.length > 1 && word.length < 21) {
    // checkTwoLettersAndMore(true);
  } else {
    // checkTwoLettersAndMore(false);
    errorCount = 6;
  }

  // Check if the word shows up in our dictionary.
  if(errorCount == 0) {
    if (isDictionaryWord(word)) {
      // checkDictionary(true);
    } else {
      // checkDictionary(false);
      errorCount = 7;
    }
  }

  if (errorCount == 0){
      $("#messages").css("color", "green");
      document.getElementById("messages").innerHTML = "Word is valid";
  }else if (errorCount == 6) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Need at least 2 letters to make a word";
  }else if (errorCount == 7) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Word is not in Dictionary. Please try another one!";
  }else if (errorCount == 8) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Nothing in the board!!";
  }else if (errorCount == 9) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Word should be in a line";
  }else if (errorCount == 10) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Letter need to place next to each other!";
  }

  if (errorCount) {
    document.getElementById("submitWord").disabled = true;
    $("#word").css("color", "red");
    return false;
  }

  $("#word").css("color", "green");
  document.getElementById("submitWord").disabled = false;

  if (errorCount == 0){
      $("#messages").css("color", "green");
      document.getElementById("messages").innerHTML = "Word is valid";
  }else if (errorCount == 6) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Need at least 2 letters";
  }else if (errorCount == 7) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Word is not in Dictionary. Please try another one!";
  }else if (errorCount == 8) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Nothing in the board!!";
  }else if (errorCount == 9) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Word should be in a line";
  }else if (errorCount == 10) {
    $("#messages").css("color", "red");
    document.getElementById("messages").innerHTML = "Letter need to place next to each other!";
  }
  return word;
}

// Make a jQuery object grayscale and semi-transparent making it look like it's 'deactivated'.
// CSS source: http://blog.nmsdvid.com/css-filter-property/
// function grayscaleAndFade(jQueryObject, yes) {
//   if (yes) {
//     jQueryObject.css({
//       "-webkit-filter": "grayscale(100%)",
//       "-moz-filter": "grayscale(100%)",
//       "-o-filter": "grayscale(100%)",
//       "-ms-filter": "grayscale(100%)",
//       "filter": "grayscale(100%)",
//       "opacity": 0.2
//     });
//   } else {
//     jQueryObject.css({
//       "-webkit-filter": "",
//       "-moz-filter": "",
//       "-o-filter": "",
//       "-ms-filter": "",
//       "filter": "",
//       "opacity": 1.0
//     });
//   }
// }

// Following three functions toggle the check (v) icon next to each instruction message on or off.
// function checkTwoLettersAndMore(check) {
//   if (check) {
//     grayscaleAndFade($("#minLengthIcon"), false);
//   } else {
//     grayscaleAndFade($("#minLengthIcon"), true);
//   }
// }
//
// function checkSingleWord(check) {
//   if (check) {
//     grayscaleAndFade($("#oneWordCheckIcon"), false);
//   } else {
//     grayscaleAndFade($("#oneWordCheckIcon"), true);
//   }
// }
//
// function checkDictionary(check) {
//   if (check) {
//     grayscaleAndFade($("#dictionaryCheckIcon"), false);
//   } else {
//     grayscaleAndFade($("#dictionaryCheckIcon"), true);
//   }
// }

// Opens up a dialog box asking to pick a letter for the blank tile played. When the user picks the letter,
// replaces the "letter" attribute of the blank tile draggable with the selected letter and then
// does everything else that needs to be done when a tile draggable is dropped on the board.
// Argument:
// blankTileDroppable: jQuery draggable blank tile object that was just dropped
// tileId: DOM ID of the above droppable element
// row, col: position on the board where the tile is dropped
function openBlankTileDialog(blankTileDraggable, tileId, row, col) {
  var tileSelectorDialog = $("<div id='blankTileDialog'></div>");
  var letterKey, newTile;
  for (letterKey in scrabbleTiles) {
    if (letterKey != "_") {
      // Add each tile image into the dialog so the user can click it to select the letter.
      newTile = $("<img src='" + scrabbleTiles[letterKey]["image"] + "' class='tileBox' letter='" + letterKey + "'>");

      // Register click event to the image. This callback must make sure everything gets processed
      // with the selected letter as if it was played normally.
      newTile.click(function() {
        var newLetter = $(this).attr("letter");

        // Replace the letter attribute and the image source of the draggable tile img.
        blankTileDraggable.attr("letter", newLetter);
        blankTileDraggable.attr("src", scrabbleTiles[newLetter]["image"]);

        // Update the board data structure.
        tileId = blankTileDraggable.attr("id");
        scrabbleBoard.addTile(tileId, newLetter, row, col);

        // Validate and display the word we have so far.
        testWord();

        // Update the score with the selected letter.
        scrabbleScore.refresh();

        tileSelectorDialog.dialog("close");
      });
      tileSelectorDialog.append(newTile);
    }
  }
  tileSelectorDialog.css("z-index", 100);
  tileSelectorDialog.dialog({
    modal: true,
    draggable: false,
    resizable: false
  });
}


$(window).on('load', function() {
  var row, col;

  scrabbleBoard.makeBoard();

  // Make the board slots droppable.
  $(".boardSlot").droppable({
    // This function determines whether the slot gets highlighted as an acceptable dropping zone
    // when a tile is being dragged.
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (scrabbleBoard.tileID(row, col) === draggable.attr("id")) {
        // The tile should be allowed to drop back in to the slot it was lifted out of.
        return true;
      } else if (scrabbleBoard.isAvailable(row, col)) {
        // The slot is empty.
        return true;
      } else {
        // The slot is already occupied.
        return false;
      }
    },
    activeClass: "dragh",
    hoverClass: "hovertile",
    drop: function(event, ui) {
      var row, col, letter, word, tileId, previousPositionOnBoard;

      ui.draggable.removeClass("tileRack");
      ui.draggable.addClass("tileBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tileId = ui.draggable.attr("id");

      // Make the dropped tile snap to the board image.
      // TODO: I think there is a built-in jQuery UI way of doing this.
      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tileId + ") on (" + row + ", " + col + ").");

      // When a blank tile is first placed on the board, open up a dialog and let the user
      // pick a letter for the blank tile. Otherwise move on.
      previousPositionOnBoard = scrabbleBoard.findSlotFromTileId(tileId);
      if ($(ui.draggable).hasClass("blankTile") && !previousPositionOnBoard) {
        // var newLetter = openBlankTileDialog();  // NOT POSSIBLE
        // We cannot have this function return the new letter selected from the dialog because
        // there is no way to make a blocking dialog. Everything that needs to happen
        // after the user picks the letter for the blank tile must happen in some kind of
        // callback function supplied to the dialog.
        openBlankTileDialog($(ui.draggable), tileId, row, col);
      } else {
        scrabbleBoard.addTile(tileId, letter, row, col);
        // Validate and display the word we have so far.
        testWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      }
    }
  });

  // Make the rack droppable so the tiles can be moved from the board to the rack.
  $("#rack").droppable({
    activeClass: "dragh",
    hoverClass: "hovertile",
    tolerance: "touch",
    drop: function(event, ui) {
      var tileId, word, pos;

      ui.draggable.removeClass("tileBoard");
      ui.draggable.addClass("tileRack");

      // When a blank tile comes back on to the rack, change its image back to the
      // blank tile image.
      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tileId = ui.draggable.attr("id");
      pos = scrabbleBoard.findSlotFromTileId(tileId);
      if (pos) {
        // The tile came from the board. Mark it off the board data structure.
        scrabbleBoard.deleteFromSlot(pos[0], pos[1]);  // pos[0]: row, pos[1]: column

        // Snap the tile image to the back of the rack.
        $("#rack").append(ui.draggable);
        ui.draggable.css({"position": "relative", "top": "", "left": ""});

        // Validate and display the word we have so far.
        word = testWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      } else {
        // User grabbed the tile and put it right back on the rack. Use the revert function
        // to put the tile in the same spot it came out of.
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });

  // Set the board and tiles. Start the first word.
  restart();
});
