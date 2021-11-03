introduction();
console.log(introduction("Alabi", "software engineer", "Lekki"));

function introduction(name, occupation, town = "Ikeja") {
  //   let sentence =
  //     "My name is " + name + " I live in " + town + " and I am a " + occupation;
  let sentence = `My name is ${name} I live in ${town} and I am a ${occupation}`;
  return sentence;
}
