const wakeUp = (callback) => {
  console.log("Please wake up mf!");
  setTimeout(() => {
    console.log("I am awake✅");
    callback();
  }, 2000);
};

function brushTeeth() {
  console.log("I am brush my teeth!");
}
wakeUp(brushTeeth);
