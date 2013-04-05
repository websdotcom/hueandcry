
// Game modes
var PLAYING = 0;
var ENDED = 1;

var startState = {
	mode: PLAYING,
	position: [1, 1, 1],
	velocity: [0, 0, 0],
	players: [false, false]
};

var gravityAcceleration = [-0.01, -0.01, -0.01];
var playerAccelerations = [
	[0.05, -0.02, -0.02],
	[-0.02, 0.05, -0.02],
	[-0.02, -0.02, 0.05]
];


function step(currentState){
	if(currentState.mode != PLAYING) return currentState;

	var newState = {};

	newState.position = addAllVectors(currentState.position, currentState.velocity);

	var activeAccelerations = playerAccelerations.filter(function(a, i){ return currentState.players[i]; });
	if(activeAccelerations.length > 1) debugger;
	newState.velocity = addAllVectors.apply(null, [currentState.velocity, gravityAcceleration].concat(activeAccelerations));
	newState.players = playerAccelerations.map(function(){ return false; });

	newState.mode = inPlay(newState.position) ? PLAYING : ENDED;

	return newState;
}

function inPlay(position){
	var outOfBounds = position.filter(function(x){ return x < 0 || x > 1; });
	return outOfBounds.length === 0;
}

// Helpers
function addAllVectors(v1){
	var vectors = [].slice.apply(arguments);
	return v1.map(function(item, i){
		return vectors.map(function(v){ return v[i]; }).reduce(add);
	});
}

function add(a,b){ return a+b; }


// set up browser game
function render(state){
	var rgb = state.position.map(function(x){ return parseInt(x*255, 10); });
	var color = "rgb("+ rgb.join(",") + ")";
	console.log(color);
	$("html").css({ backgroundColor: color });
}


var state = startState;
function run(){
	var i = setInterval(function(){
		state = step(state);
		render(state);
		if(state.mode !== PLAYING) clearInterval(i);
		console.log(state);
	}, 100);
}

$("body").on("keydown", function(e){
	console.log("hit", e.which);
	state.players[e.which-49] = true;
});

setTimeout(run, 1000);
