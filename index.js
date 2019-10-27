const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json({}));
app.use(morgan('[:date[iso]] :method :url :status :response-time ms - :res[content-length]'));
app.post('/x/server/apk', (req, res) => res.status(200).json({ as: 'xxx', cp: 'yyy', mas: 'zzz', status: 'success' }));

const server = app.listen(process.env.PORT || 40000, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});
