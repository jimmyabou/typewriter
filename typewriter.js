const sentence = "hello there from lighthouse labs";
let timer = 0;
let index = 0;

for (const char of sentence) {
  setTimeout(() => {process.stdout.write(char);
    if (index === sentence.length - 1) {
      process.stdout.write("\n");
    }index++;
  }, timer);
  timer += 50
  
}
