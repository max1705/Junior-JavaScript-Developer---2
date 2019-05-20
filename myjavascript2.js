var arr = []; //массив шахматной доски
var alph = "00ABCDEFGH00";  // строка, для обозначения координат шахматной доски
for(var i=0; i < alph.length; i++) { //создаётся двумерный массив, представляющий шахматное поле
	arr.push([]);
	arr[i].push(new Array(12));
	for(var j=1; j < 13; j++) {
		arr[i][j-1] = [alph.charAt(i)+(j-2)];

	}
}

var moveCombination = function() { //фукнция определяющая возможные ходы коня и удаляющая ходы, которые выходят за границы шахматного поля
	for(i=0; i < 12; i++) {
		for(j=0; j < 12; j++) {
			if ((document.getElementById("position").value == arr[i][j]) ) {
				var steps = [arr[i-1][j-2], arr[i+1][j-2], arr[i+2][j-1], arr[i+2][j+1], arr[i+1][j+2], arr[i-1][j+2], arr[i-2][j-1], arr[i-2][j+1]];
				if ((i-1<2) || (i-2<2) || (i+1>9) || (i+2>9) || (j-1<2) || (j-2<2) || (j+1>9) || (j+2>9)) {
					
					if (i-2<2) {
						delete steps[6];
						delete steps[7];
						if (i-1<2) {
							delete steps[0];
							delete steps[5];
						}
					}

					if (j-2<2) {
						delete steps [0];
						delete steps[1];
						if (j-1<2) {
							delete steps[2];
							delete steps[6];
						}
					}

					if (i+2>9) {
						delete steps[2];
						delete steps[3];
						if (i+1>9) {
							delete steps [1];
							delete steps[4];
						}
					}
					
					if (j+2>9) {
						delete steps [4];
						delete steps[5];
						if (j+1>9) {
							delete steps [3];
							delete steps[7];
						}
					}
				}
				alert (steps.join(' '));
			}
		}
	}
}

button.addEventListener('click', moveCombination);