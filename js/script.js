var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var changeDinosaur = text.replace('Velociraptor', dinosaurUpperCased);
var halfText = changeDinosaur.slice(0,changeDinosaur.length/2);

console.log(halfText);