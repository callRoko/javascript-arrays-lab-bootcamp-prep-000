var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
 return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
return kittens.slice(1,3)
  
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
 [kittens,...name]
  return kittens
}