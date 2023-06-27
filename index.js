const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const { BotAccount } = require("sphinx-bc");

new BotAccount({token:process.env.token}).botbc({
    ownerID: [""], 
    prefix: "",
    embedReply: "Optional Option",
    mention: true,
    type: 'off'
});


/////////////////////////////////////////
// ملاحظه التوكن يكون في السيكريت               //
// Note: the token is in the secret    //
/////////////////////////////////////////
