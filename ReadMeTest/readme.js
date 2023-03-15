var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
let url = fetch("https://raw.githubusercontent.com/jiri132/EntitledEngine2/master/README.md",requestOptions);

url.then(response => { 
        response.text().then(readme => {
            document.getElementById('content').innerHTML = marked.parse(readme);
        });
     })
    .catch(error => console.log(`Couldn't Retrieve data from ${url} \nErr: ${error}`));