const express = require('express')
const cors = require('cors');
const http = require('http');
const app = express()
const port = 3000
http.globalAgent.maxSockets = 10;

app.use(cors());
let access = 0;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));
app.get('/api/:id', (req, res) => {
	console.log(`Access!`, req.params.id);
	delay(1000).then(() => {
		console.log(`Access done!`);
		res.send(`${Date.now()}`);
	});
	console.log('Waiting for delay to finish');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});