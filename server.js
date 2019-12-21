const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './build')));
app.get('/.well-known/acme-challenge/KC0RObiEKlwwKOt9fWTFgXYxooQ7H6WyBOQ5FLMeXH8', (req, res) => {
    res.send('KC0RObiEKlwwKOt9fWTFgXYxooQ7H6WyBOQ5FLMeXH8.vHLn0LStE7CnyM_FasQhpmNRI9rK8uiwpFN6TcUF3Ck');
})

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
    console.error(`Node server: listening on port ${PORT}`);
});