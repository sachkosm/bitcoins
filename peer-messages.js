Peers ask for each other's blocks to determine who has the most up-to-date blockchain

// const wrtc = require('wrtc');
// const Exchange = require('peer-exchange');
// const p2p = new Exchange(...);
// const net = require("net");
const messageType = {
  REQUEST_LATEST_BLOCK: 0,
  RECEIVE_LATEST_BLOCK: 1,
  REQUEST_BLOCKCHAIN: 2,
  RECEIVE_BLOCKCHAIN: 3,
};
const {
  REQUEST_LATEST_BLOCK,
  RECEIVE_LATEST_BLOCK,
  REQUEST_BLOCKCHAIN,
  RECEIVE_BLOCKCHAIN,
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS
} = messageType;

// class PeerToPeer { ... }
// module.exports = PeerToPeer;

class Messages {
  static getLatestBlock() {
    return {
      type: REQUEST_LATEST_BLOCK
    };
  }

  static sendLatestBlock(block) {
    return {
      type: RECEIVE_LATEST_BLOCK,
      data: block
    };
  }

  static getBlockchain() {
    return {
      type: REQUEST_BLOCKCHAIN
    };
  }

  static sendBlockchain(blockchain) {
    return {
      type: RECEIVE_BLOCKCHAIN,
      data: blockchain
    };
  }
}
