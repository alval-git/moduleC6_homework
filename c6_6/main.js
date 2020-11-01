const wsUrl = "wss://echo.websocket.org/";
const btnSend = document.querySelector(".btn-send");
const btnGeo = document.querySelector(".btn-geo");
const input = document.querySelector("input");
const chat = document.querySelector(".chat");
const  websocket = new WebSocket(wsUrl);


function WriteServerMessage(message){
	const p = document.createElement(`p`)
	p.style.border = "3px solid #87CEEB";
	p.style.width = "35%";
	p.style["min-height"] = "30px";
	p.style["border-radius"] = "5px";
	p.style.wordWrap = "break-word";
	p.style["margin-left"] = "4%";
	p.innerHTML = message
	chat.appendChild(p);	
};
function WriteMyMessage(message){
	const p = document.createElement(`p`)
	p.style.border = "3px solid #87CEEB";
	p.style.width = "35%";
	p.style["min-height"] = "30px";
	p.style["border-radius"] = "5px";
	p.style.wordWrap = "break-word";
	p.style["margin-left"] = "60%";
	p.innerHTML = message
	chat.appendChild(p);	
};


btnSend.addEventListener('click',()=>{
	const message = document.querySelector("input").value;
	websocket.send(message);
	WriteMyMessage(`Me : ${message}`)
	websocket.onmessage = function(event){
		WriteServerMessage(`server : ${event.data}`);
	}
	document.querySelector("input").value = "";
}) ;
function WriteLink(message){
	const a = document.createElement("a");
	a.textContent = "геолокация";
	a.href = `${message}`;
	chat.appendChild(a);
}

const  success = (position) => {
	const mapLink = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
	websocket.send(mapLink);

};


btnGeo.addEventListener('click',()=>{
	navigator.geolocation.getCurrentPosition(success);
	websocket.onmessage = function(event){
		WriteLink(`${event.data}`);
		console.log(event.data)	
	}
});