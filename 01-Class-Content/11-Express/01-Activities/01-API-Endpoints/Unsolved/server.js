// TODO: Import express

// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable

// Add a static route for index.html
app.get('/html', (req, res) => {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + '/index.html');
});

// TODO: Create a route for a GET request that will return the content of our `termData.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
