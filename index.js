const mineflayer = require('mineflayer');
const express = require('express');

const app = express();


app.get('/', (req, res) => {
  const currentUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.send('Your Bot Is Ready!');
}); 

app.listen(3000);

function createBot () {
const bot = mineflayer.createBot({
  host: 'Nikhilxyt.aternos.me', 
  username: 'Alexe', 
  port: 32080, 
  version: false, 
});

bot.on('kicked', console.log) 
bot.on('error', console.log) 
bot.on('end', createBot)
}

createBot()
