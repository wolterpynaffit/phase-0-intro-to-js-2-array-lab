const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
]

function destructivelyAppendCat(name) {
    let addLast = cats.push(name)
    return addLast
}

function destructivelyPrependCat(name){
    let addFront = cats.unshift(name)
    return addFront
}

function destructivelyRemoveLastCat(name){
    let removeLast = cats.pop()
    return removeLast
}

function destructivelyRemoveFirstCat(name){
    let removeFront = cats.shift()
    return removeFront
}

function appendCat(name){
    let copyCat = [...cats, name]
    return copyCat
    
  }


  function prependCat(name){
    let copyCat = [name,...cats]
    return copyCat
    
  }


  function removeLastCat(){
    const copyCat = [...cats]
    let removeLast = copyCat.pop()
    return copyCat

  }

  function removeFirstCat(){
    const copyCat = [...cats]
    let removeFirst = copyCat.shift()
    return copyCat
  }

