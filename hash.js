Hash has a fixed length.
Same data always maps to same hash.
Different data always maps to a different hash (within practical limitations).
Is easy to compute.
Is infeasible to convert hash to data.
A small change in data leads to a large change in hash.


A valid hash for a blockchain is a hash that meets a certain requirement. 
For this blockchain, having three zeros at the beginning of the hash is the requirement for a valid hash.

The number of leading zeros required is the 'difficulty'.

// cosnt Block = reuqire("./Block.js");

// class Blockchain {
  // constructor() {
    // this.blockchain = [Block.genesis()];
    this.difficulty = 3;
  // }
  
  // get() { ... }
  // get latestBlock() { ... }

  isValidHashDifficulty(hash) {
    for (var i = 0; i < hash.length; i++) {
      if (hash[i] !== "0") {
        break;
      };
    }
    return i >= this.difficulty;
  }
// };

// module.exports = Blockchain;
