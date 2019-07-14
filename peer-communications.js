// const wrtc = require('wrtc');
// const Exchange = require('peer-exchange');
// const p2p = new Exchange(...);
// const net = require("net");
// const messageType = { ... };
// const { ... } = messageType;

// class PeerToPeer {
  // constructor(blockchain) { ... }
  // startServer(port) { ... }
  // discoverPeers() { ... }
  // connectToPeer(host, port) { ... }
  // closeConnection() { ... }

  broadcastLatest() {
    this.broadcast(Messages.sendLatestBlock(this.blockchain.latestBlock));
  }

  broadcast(message) {
    this.peers.forEach(peer => this.write(peer, message));
  }

  write(peer, message) {
    peer.write(JSON.stringify(message));
  }

  initConnection(connection) {
    this.peers.push(connection);
    this.initMessageHandler(connection);
    this.initErrorHandler(connection);
    this.write(connection, Messages.getLatestBlock());
  }

  initMessageHandler(connection) {
    connection.on("data", data => {
      const message = JSON.parse(data.toString("utf8"));
      this.handleMessage(connection, message);
    });
  }

  initErrorHandler(connection) {
    connection.on("error", err => {
      throw err;
    });
  }

  handleMessage(peer, message) {
    switch (message.type) {
      case REQUEST_LATEST_BLOCK:
        this.write(peer, Messages.sendLatestBlock(this.blockchain.latestBlock));
        break;
      case REQUEST_BLOCKCHAIN:
        this.write(peer, Messages.sendBlockchain(this.blockchain.get()));
        break;
      case RECEIVE_LATEST_BLOCK:
        this.handleReceivedLatestBlock(message, peer);
        break;
      case RECEIVE_BLOCKCHAIN:
        this.handleReceivedBlockchain(message);
        break;
      default:
        throw "Received invalid message.";
    }
  }
// }

// module.exports = PeerToPeer;
// class Messages { ... }
