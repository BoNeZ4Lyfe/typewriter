const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (sentence.length - 1 === i) {
      process.stdout.write("\n");
    }
  }, 50 * i);
}

  
