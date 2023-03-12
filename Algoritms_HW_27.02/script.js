let i = 1;
function han (a, from, box, to){
    if(a!==0){
  document.write(`${i++}: ${from} to ${to}<br>`);
    han(a - 1, box, to, from);
    }
}
han(4, 1, 3, 2)