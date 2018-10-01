var insert = prompt('Vul een nummer in om uw tafel uit te rekenen.');
var tafelwhile = insert;
var tafelfor = insert;
var times = 0;

for (var i = 0; i < 10; i++){
	times++;
	var answer = tafelfor * times;
	document.writeln(times + ' x ' + tafelfor + ' =  ' + answer);
	if (times == 10){
		times = 0;
		console.log('Loaded for table');
	}
}

document.writeln('<br />');

while (times < 10){
	times++;
	var answer = tafelwhile * times;
	document.writeln(times + ' x ' + tafelwhile + ' =  ' + answer);
	if (times == 10){
		console.log('Loaded while table');
	}
}
