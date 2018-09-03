

//TODO: Ask if instead of a map should receive an array of key-value pairs (as array) to allow repeated keys throght chaining.
//TODO: Aks if the hash requires to be sorted to iterate over it, or else sort might be pointless given hash access.
class MapSorter {
	constructor() {

	}

	sort(map, evaluation) {
		var i = 1;
		var orderedItems = [];

		for(var [key, value] of map.entries()) {
			
			var j;
			for(j = i - 1; j > 0 && evaluation(orderedItems[j - 1][1], value); j = j - 1) {}

			orderedItems.splice(j, 0, [ key, value ]);
			i = i + 1;
		}

		return new Map(orderedItems);
	}
}

//TODO: default should rise error?
function sortPeople(people, sortByProperty) {
	switch(sortByProperty) {
		case "age":
			return MapSorter.prototype.sort(people, (x, y) => { return (x ? x["age"] : null) > (y ? y["age"] : null); });
		break;
		case "name":
			return MapSorter.prototype.sort(people, (x, y) => { return (x ? x["name"] : null) > (y ? y["name"] : null); });
		break;
		default:
			return MapSorter.prototype.sort(people, (x, y) => { return x > y; });
		break;
	}
}


const map = new Map([
	[ "tommy",	{ "name":"Tommy",	"age":34 } ],
	[ "julian",	{ "name":"Julian",	"age":28 } ],
	[ "peter",	{ "name":"Peter",	"age":54 } ],
	[ "justin",	{ "name":"Justin",	"age":27 } ],
	[ "john",	{ "name":"John",	"age":20 } ],
	[ "marck",	{ "name":"Marck",	"age":32 } ],
	[ "peter",	{ "name":"Peter",	"age":22 } ],
	[ "steve",	{ "name":"Steve",	"age":38 } ],
	[ "bryan",	{ "name":"Bryan",	"age":24 } ]
]);
console.log(map);
console.log(sortPeople(map, "name"));

