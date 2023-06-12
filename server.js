const cors = require('cors');
const express = require('express');

const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);
app.get('/events', sendServerEvent);

app.listen(5000, () => {
  console.log('Server running at http://127.0.0.1:5000/');
});

function sendServerEvent(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000', //or the specific origin you want to give access to,
    'Access-Control-Allow-Credentials': true,
  });

  var id = new Date().toLocaleTimeString();

  // Sending data event to display time after every 5 seconds to client.
  setInterval(function () {
    constructServerSentEvent(res, id, new Date().toLocaleTimeString());
  }, 5000);

  constructServerSentEvent(res, id, new Date().toLocaleTimeString());
}

function constructServerSentEvent(res, id, data) {
  res.write('event: child_updated\n');
  res.write('id: ' + id + '\n');
  res.write(`data:{ "time": ${JSON.stringify(data)} }`);
  res.write('\n\n');
}
