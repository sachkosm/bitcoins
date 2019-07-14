The process of determining this nonce is called mining.

We start with a nonce of 0 and keep incrementing it by 1 until we find a valid hash.

nonce.gif
As difficulty increases, the number of possible valid hashes decreases. With fewer possible valid hashes, it takes more processing power to find a valid hash.

If the hash on the block is invalid, click on the tool button to mine the genesis block!


//==================

// const Block = require("./Block.js");
// const crypto = require("crypto");

// class Blockchain {
  // constructor() { ... }
  // get() { ... }
  // get latestBlock() { ... }
  // isValidHashDifficulty(hash) { ... }
  // calculateHashForBlock(block) { ... }
  // calculateHash(...) { ... }

  mine(data) {
    const newBlock = this.generateNextBlock(data);
    try {
      this.addBlock(newBlock);
    } catch (err) {
      throw err;
    };
  }
// };

// module.exports = Blockchain;
