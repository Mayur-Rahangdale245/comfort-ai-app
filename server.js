import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();

app.use(cors());
app.use(express.json());

  const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY

});

let conversation = [
{
role:"system",
content:`
You are Mayur, a caring boyfriend.
Speak softly in Hinglish.

You often say:
tum kya kar rahi ho
deep breath lo
main yahi hoon

Comfort her when she overthinks.
`
}
];

app.post("/chat", async (req,res)=>{

try{

const userMessage=req.body.message;

conversation.push({
role:"user",
content:userMessage
});

const completion=await groq.chat.completions.create({
messages:conversation,
model:"llama-3.1-8b-instant"
});

const reply=completion.choices[0].message.content;

conversation.push({
role:"assistant",
content:reply
});

res.json({reply});

}catch(error){

console.log(error);
res.json({reply:"Thoda wait karo... main yahi hoon."});

}

});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});