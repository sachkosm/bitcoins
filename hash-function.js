A hashing function takes data as input, and returns a unique hash.

f ( data ) = hash

Since the hash is a "digital fingerprint" of the entire block, the data is the combination of index, timestamp, previous hash, block data, and nonce.

f ( index + previous hash + timestamp + data + nonce ) = hash

Replace the values for our genesis block, we get:

f ( 0 + "0" + 1508270000000 + "Welcome to Blockchain Demo 2.0!" + 604 ) = 000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf



// const Block = require("./Block.js");
const crypto = require("crypto");

// class Blockchain {
  // constructor() { ... }
  // get() { ... }
  // get latestBlock() { ... }
  // isValidHashDifficulty(hash) { ... }

  calculateHashForBlock(block) {
    const { index, previousHash, timestamp, transactions, nonce } = block;
    return this.calculateHash(
      index,
      previousHash,
      timestamp,
      transactions,
      nonce
    );
  }

  calculateHash(index, previousHash, timestamp, data, nonce) {
    return crypto
      .createHash("sha256") // SHA256 Hash Function
      .update(index + previousHash + timestamp + data + nonce)
      .digest("hex");
  }
// };

// module.exports = Blockchain;
