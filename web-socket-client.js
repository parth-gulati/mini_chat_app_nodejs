const WS = new WebSocket('ws://localhost:3232');

function dispmsg(msg)
{
    let h1 = document.createElement('h1');
    h1.innerHTML = msg;
    document.querySelector('div.messages').appendChild(h1);
}

WS.onmessage =(payload)=>{

    dispmsg(payload.data);
    console.log(payload.data + ' bro');

}

WS.onopen = ()=>{

    console.log("Bitch connection is open");
    display('Connection open');

}

WS.onclose = ()=>{

    console.log("Bitch I close");
    display('Connection close');

}

function display(title)
{
    document.querySelector('h1').innerHTML=title;
}


document.forms[0].onsubmit = ()=>{

    var msg = document.getElementById('message');
    //console.log(msg.value);

    WS.send(msg.value);

}