const fs = require('fs');
const getbooks =(req,res)=>{
    const data = fs.readFileSync("./booktrips.json");
    const books = JSON.parse(data);
    res.send(books);
}

const gethistorybooks = (req,res) =>{
    const data = fs.readFileSync("./booktrips.json");
    const books = JSON.parse(data);
    const rider = req.params.ridername;
    const bookshistory = books.filter(book=>book.ridername === rider);
    res.send(bookshistory);
}

const booktrip = (req, res) =>{
    const data = fs.readFileSync('./booktrips.json');
    const books = JSON.parse(data);
    const idbook = Math.floor(Math.random() * (10000 - 50 + 1)) + 50;
    const dateb = new Date();
    var dateoff = dateb.getDate() + "/" + (dateb.getMonth()+1) + "/" + dateb.getFullYear();
    const rider = req.params.ridername;
    const lib = req.body.tripLib;
    const newbook = {"id_book" : idbook, "ridername": rider, "tripLib": lib, "date_book": dateoff  };
    books.push(newbook);
    savebooktrip(books);
    res.send(books);
}
const savebooktrip = (data)=>{
    const stringify = JSON.stringify(data);
    fs.writeFileSync("bookTrips.json", stringify);
}

module.exports = { getbooks, gethistorybooks, booktrip};