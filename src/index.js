function wrapperFnLoop(start, end) {
  function recurse(i) {
    console.log(`looping from ${i} until ${end}`);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

function MemoFnLoop(i, end) {
  //1 is i, 3 is the end
  console.log(`looping from ${i} intil ${end}`);
  if (i < end) {
    MemoFnLoop(i + 1, end);
  }
}

console.log("~~ wrapperFNLopp``");
wrapperFnLoop(1, 5);
console.log("~~MemoFnLoop~~");
MemoFnLoop(1, 6);
