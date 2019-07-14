When adding a new block to the blockchain, the new block needs to meet these requirements.

Block index one greater than latest block index.
Block previous hash equal to latest block hash.
Block hash meets difficulty requirement.
Block hash is correctly calculated.
Other peers on the network will be adding blocks to the blockchain, so new blocks need to be validated.

//=============================================

// const Block = require("./Block.js");
// const crypto = require("crypto");

// class Blockchain {
  // constructor() { ... }
  // get() { ... }
  // get latestBlock() { ... }
  // isValidHashDifficulty(hash) { ... }
  // calculateHashForBlock(block) { ... }
  // calculateHash(...) { ... }
  // mine(data) { ... }
  // generateNextBlock(data) { ... }
  // addBlock(newBlock) { ... }

  isValidNextBlock(nextBlock, previousBlock) {
    const nextBlockHash = this.calculateHashForBlock(nextBlock);

    if (previousBlock.index + 1 !== nextBlock.index) {
      return false;
    } else if (previousBlock.hash !== nextBlock.previousHash) {
      return false;
    } else if (nextBlockHash !== nextBlock.hash) {
      return false;
    } else if (!this.isValidHashDifficulty(nextBlockHash)) {
      return false;
    } else {
      return true;
    }
  }
// };

// module.exports = Blockchain
