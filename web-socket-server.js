const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});

console.log('Server up and running');

WSS.on('connection',(ws)=>{

    ws.on('message',(msg)=>{

        if(msg==='close'){
            ws.close();
        }
        else {
            WSS.clients.forEach((client) => {

                client.send(msg);

            });
        }

        console.log(msg);

    });



    console.log('We are connected');

});