const url = `https://www.themealdb.com/api/json/v1/1/random.php`
fetch(url)
    .then((resp) => resp.text())
    .then((data) => {
        document.write(data)
    })