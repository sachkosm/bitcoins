const wrtc = require('wrtc');
const Exchange = require('peer-exchange');
const p2p = new Exchange("Blockchain Demo 2.0", { wrtc: wrtc });
const net = require("net");

class PeerToPeer {
  constructor(blockchain) {
    this.peers = [];
    this.blockchain = blockchain;
  }

  startServer(port) {
    const server = net
      .createServer(socket =>
        p2p.accept(socket, (err, conn) => {
          if (err) {
            throw err;
          } else {
            this.initConnection.call(this, conn);
          }
        })
      )
      .listen(port);
  }
}
  
module.exports = PeerToPeer;
