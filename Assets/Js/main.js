let answer= prompt('Zehmet olmasa eded daxil edin:');
let result = (isNaN(answer)) ? 'Duzgun eded daxil edin!!' :(answer==0) ? "Daxil edilen deyer 0'dan boyuk olmalidir." : (answer>0) ? ('Daxil edilen eded Musbetdir' + ": " + answer ) : ('Daxil edilen eded Menfidir' + ": " + answer );
console.log(result);
