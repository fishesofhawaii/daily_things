var g;

function calculate(){
	for (var i = 0; i < document.getElementsByTagName("input").length; i ++){
		document.getElementsByTagName("input")[i].style["background-color"] = "white";

	}

	// [[GAME 1's],[GAME 2's],...]

	var data = [[],[],[],[],[]]
	var counter = 0;
	for (var i = 1; i < 6; i++){
		class_ele = document.getElementsByClassName(i);
		for (var j = 0; j < 5; j++){
			counter += 1;
			class_ele[j].id = counter;
			var player = {
			    game: j+1, // The Game number theyre in
			    cost: i,  // The amount to use this player
				avg: parseFloat(class_ele[j].value),  // average points by this player

			}

			data[j].push(player)
		}
	}
	
	g1 = data[0]
	g2 = data[1]
	g3 = data[2]
	g4 = data[3]
	g5 = data[4]
	var max_total_avg = 0;
	var total_avg = 0;
	var total_cost = 0;
	var res_list = []

	for (var i = 0; i < 5; i++){
		for (var j = 0; j < 5; j++){
			for (var k = 0; k < 5; k++){
				for (var m = 0; m < 5; m++){
					for (var n = 0; n < 5; n++){
						total_cost = g1[i].cost + g2[j].cost + g3[k].cost + g4[m].cost + g5[n].cost
						total_avg = g1[i].avg + g2[j].avg + g3[k].avg + g4[m].avg + g5[n].avg

						if (total_cost > 15){
							continue
						}
						if (total_avg > max_total_avg) {
							max_total_avg = total_avg;
							console.log("NEW max_total_avg: ", max_total_avg, total_cost, "(", g1[i].cost, g2[j].cost, g3[k].cost, g4[m].cost, g5[n].cost,")");
							res_list = [i,j,k,m,n]
						}

					}
				}
			}

		}
	}

	document.getElementById((res_list[0] * 5) + 1).style["background-color"] = "lightgreen";
	document.getElementById((res_list[1] * 5) + 2).style["background-color"] = "lightgreen";
	document.getElementById((res_list[2] * 5) + 3).style["background-color"] = "lightgreen";
	document.getElementById((res_list[3] * 5) + 4).style["background-color"] = "lightgreen";
	document.getElementById((res_list[4] * 5) + 5).style["background-color"] = "lightgreen";



}





