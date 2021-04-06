function conditions(animal){
  if(animal == "skunk"){
    return("Skunks can be stinky");
  }
  else if(animal == "tiger"){
    return("Tigers are big");
  }
  else if(animal == "cat"){
    return("Cats are pretty");
  }
  else if(animal == "dog"){
    return("Dogs are energetic");
  }
  else{
    return("I don't know what animal that is")
  }
}

console.log(conditions("skunk"));
console.log(conditions("tiger"));
console.log(conditions("cat"));
console.log(conditions("dog"));
console.log(conditions("horse"));
