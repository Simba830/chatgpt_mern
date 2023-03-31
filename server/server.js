const express = require('express');
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser');
const {OpenAIApi, Configuration} = require('openai');

const app = express()
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

app.post('/ask',async(req,res)=>{
    const prompt = req.body.message;
    if(!prompt){
        return req.status(400).send({error:"Required"})
    }
    try{
        const answer = await  openai.createCompletion({
                    model:'gpt-3.5-turbo',
                    prompt:prompt,
                    temperature:0,
                    max_tokens:2000
                })
            res.send({data:answer.data.choices[0].text})
    }catch(err){
        console.log(err)
        res.status(500).send({err})
    }
})

app.listen(4000,()=>{
    console.log('Connected');
})