function multiplicationTable(number) {
  let table = '';
  
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}`;
    
    if (i < 10) {
      table += '\n';
    }
  }
  
  return table;
}

console.log(multiplicationTable(5778));
