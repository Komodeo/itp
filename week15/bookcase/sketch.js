// populate bookcase with books
var bookcase = [["Later", "Echo", "The Outsider", "The Great Hunt (The Wheel of Time, #2)", "A Bridge To Light , A Study in Masonic Ritual & Philosophy", "The Institute", "One Night on the Island"], //shelf 0
["Giraffes on Horseback Salad", "The World as I See It", "Auschwitz Lullaby", "Marvel Comics: The Untold Story", "Gods of Jade and Shadow", "The Victory Garden", "In My Father's Basement", "Dark Halls", "Insatiable (Cloverleigh Farms, #3)", "Feeling Good: The New Mood Therapy", "The Corridors of Time"], //shelf 1
["Lock In (Lock In, #1)", "Outlander (Outlander, #1)", "The Help", "Girl with a Pearl Earring", "Fever 1793", "The Miniaturist (The Miniaturist, #1)", "The Secret Life of Bees", "Jonathan Strange & Mr Norrell", "It", "Misery"], //shelf 2
["I'm Glad You're Dead (The Preternatural Chronicles #1)", "Knight's Ransom (The First Argentines, #1)", "Scarlet Odyssey (Scarlet Odyssey, #1)", "The Queen's Poisoner (Kingfountain, #1)", "The Lord of Stariel (Stariel, #1)"], //shelf 3
["The Novel Life Of Coral Ambrose", "How to Win Friends and Influence People", "The Zombie Survival Guide: Complete Protection from the Living Dead", "Jennifer Government", "The Haunting of Hill House", "The Island of Doctor Moreau", "1984", "The Animal Wife", "The Shining"] //shelf 4
];

function setup() {
	createCanvas(800, 600);

	// Call functions to print to console
	firstBook();
	totalBooks();
	allTheBooks();
	particularShelf(floor(random() * bookcase.length)); //print books from a random shelf
}

function draw() {

}

// Print the first book on each shelf to the console
function firstBook() {
	console.log("// The first book on each shelf is:");
	for (shelf = 0; shelf < bookcase.length; shelf++) {
		console.log(bookcase[shelf][0]);
	}
}

// Print the total number of books to the console
function totalBooks() {
	console.log("// The total number of books is:");
	var total = 0;
	for (shelf = 0; shelf < bookcase.length; shelf++) {
		for (book = 0; book < bookcase[shelf].length; book++) {
			total++;
		}
	}
	console.log(total);
}

// Print all the books to the console
function allTheBooks() {
	console.log("// Here is a list of ALL THE BOOKS:");
	for (shelf = 0; shelf < bookcase.length; shelf++) {
		for (book = 0; book < bookcase[shelf].length; book++) {
			console.log(bookcase[shelf][book]);
		}
	}
}

// Print the books on a particular shelf to the console
function particularShelf(shelf) {
	console.log("// Here is a list of the books on shelf " + shelf + ":");
	for (book = 0; book < bookcase[shelf].length; book++) {
		console.log(bookcase[shelf][book]);
	}
}