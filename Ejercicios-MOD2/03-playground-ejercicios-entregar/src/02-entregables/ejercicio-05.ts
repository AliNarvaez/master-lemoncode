console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  public coins: number;

  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const result: boolean[] = [];
    for (let i = 0; i < 3; i++) {
      result.push(Math.random() > 0.5);
    }
    if (result.every(val => val)) {
      console.log(`Congratulations! You won ${this.coins} coins!`);
      this.coins = 0;
    } else {
      console.log(`Good luck next time!`);
    }
  }
}

const machine1 = new SlotMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 

