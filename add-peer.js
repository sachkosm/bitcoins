// const wrtc = require('wrtc');
// const Exchange = require('peer-exchange');
// const p2p = new Exchange(...);
// const net = require("net");

// class PeerToPeer {
  // constructor(blockchain) { ... }
  // startServer(port) { ... }
  
  discoverPeers() {
    p2p.getNewPeer((err, conn) => {
      if (err) {
        throw err;
      } else {
        this.initConnection.call(this, conn);
      }
    });
  }
// }
  
// module.exports = PeerToPeer;
