fetch('https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });