const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './build')));
app.get('/.well-known/acme-challenge/KkF72TfZq0TO47vj8AR0h3ey-8iWLFuB6DfJ3SxoGBM', (req, res) => {
    res.send('KkF72TfZq0TO47vj8AR0h3ey-8iWLFuB6DfJ3SxoGBM.vHLn0LStE7CnyM_FasQhpmNRI9rK8uiwpFN6TcUF3Ck');
})

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
    console.error(`Node server: listening on port ${PORT}`);
});