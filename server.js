let array = [{ name: 'harry', id: 1 },{ name: 'harry', id: 1 },
{ name: 'john', id: 2 },{ name: 'john', id: 2 },
{ 'name': 'trevor', id: 3  }]

let newArray = [...new Set(array.map(JSON.stringify))].map(JSON.parse);

console.log(newArray)
