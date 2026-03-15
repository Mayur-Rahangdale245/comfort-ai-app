async function sendMessage(){

let message=document.getElementById("userInput").value

document.getElementById("chatBox").innerText="Soch raha hoon..."

const response=await fetch("http://localhost:3000/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
})

const data=await response.json()

document.getElementById("chatBox").innerText=data.reply

}

function hug(){

const overlay=document.getElementById("hugOverlay")

overlay.style.opacity="1"
overlay.style.pointerEvents="auto"

setTimeout(()=>{
overlay.style.opacity="0"
overlay.style.pointerEvents="none"
},4000)

}

function loveNote(){

let notes=[
"Tum strong ho jitna tum sochti ho usse bhi zyada.",
"Mujhe tum par bohot proud feel hota hai.",
"Tum mere liye bohot special ho.",
"Paani pilo aur thoda relax karo.",
"Main hamesha tumhari side hoon."
]

let random=notes[Math.floor(Math.random()*notes.length)]

document.getElementById("chatBox").innerText=random

}

function createHeart(){

let heart=document.createElement("div")

heart.className="heart"

heart.style.left=Math.random()*100+"vw"

heart.innerText="❤️"

heart.style.fontSize=(Math.random()*20+10)+"px"

document.getElementById("hearts").appendChild(heart)

setTimeout(()=>{
heart.remove()
},6000)

}

setInterval(createHeart,500)