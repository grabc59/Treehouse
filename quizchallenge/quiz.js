var quiz = function() {

 score = 0;

  var answer1 = prompt('What kingdom does Bubblegum princess live in?');
  var answer2 = prompt('What is the Ice King\'s penguin\'s name?');
  var answer3 = prompt('What sound does the Ice King\'s penguin make?');
  var answer4 = prompt('What is the Ice King\'s real first name?');
  var answer5 = prompt('What friend of Jake\'s is a vampire?');

  if (answer1.toLowerCase() === 'candy') {
  	score += 1;
  }
  if (answer2.toLowerCase() === 'gunter') {
  	score += 1;
  }
  if (answer3.toLowerCase() === 'wenk') {
  	score += 1;
  }
  if (answer4.toLowerCase() === 'simon') {
  	score += 1;
  }
  if (answer5.toLowerCase() === 'marcelline') {
  	score += 1;
  }



var prize = '';
if (score === 5) {
	prize = 'a gold crown!';
} else if (score >= 3) {
	prize = 'a silver crown!';
} else if (score >= 1) {
	prize = 'a bronze crown!';
} else {
	prize = 'nothing!';
}

alert('You got ' + score + ' questions correct, you get ' + prize);

}

quiz();
