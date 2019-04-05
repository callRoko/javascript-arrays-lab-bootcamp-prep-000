var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
 return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
 kittens.pop()
 return kittens
  
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
 return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  kittens.slice(1, kittens.length - 1)
}

function removeFirstKitten(){
  kittens.slice(-2)
}