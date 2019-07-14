Peers have three states:

Currently Active
Connected
Disconnected

//======================
// const wrtc = require('wrtc');
// const Exchange = require('peer-exchange');
// const p2p = new Exchange(...);
// const net = require("net");

// class PeerToPeer {
  // constructor(blockchain) { ... }
  // startServer(port) { ... }
  // discoverPeers() { ... }

  connectToPeer(host, port) {
    const socket = net.connect(port, host, () =>
      p2p.connect(socket, (err, conn) => {
        if (err) {
          throw err;
        } else {
          this.initConnection.call(this, conn);
        }
      })
    );
  }

  closeConnection() {
    p2p.close(err => {
      throw err;
    })
  }
// }

// module.exports = PeerToPeer;
