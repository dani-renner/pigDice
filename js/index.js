// business logic
function Player (total, roll) {
  this.total = total;
  this.roll = roll;
  this.message = ""
}

Player.prototype.diceRoll = function(){
  this.roll = Math.floor(Math.random() * 6) + 1;
  console.log("Dice roll! We got: ", this.roll);
}

Player.prototype.scorekeeper = function(){
  this.diceRoll();
  if (this.roll > 1) {
    this.total += this.roll;
    console.log("This updated total: ", this.total);
    // return this.total;
  }
  else {
    this.total = 0;
    this.message = "Bust!";
  }
}


// user Logic
$(document).ready(function() {
  let playerOne = new Player(0,0);
  $("#btn").click(function() {
    playerOne.scorekeeper();
    $("output#userRoll").show();
    $(".output").show();
    $("#userRoll").show();
    $("#userScore").show();
  });
});


