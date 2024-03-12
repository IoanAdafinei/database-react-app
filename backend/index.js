import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dbpassword from "./db_passwd.cjs";
import dbname from "./db_name.cjs";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbpassword,
  database: dbname,
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/autori", (req, res) => {
  const q = "SELECT * FROM autori";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/autori", (req, res) => {
  const q =
    "INSERT INTO autori (`NumeAutor`, `PrenumeAutor`, `DataNasteriiAutor`, `Tara`) VALUES (?)";

  const values = [
    req.body.NumeAutor,
    req.body.PrenumeAutor,
    req.body.DataNasteriiAutor,
    req.body.Tara,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Autor has been created");
  });
});

app.delete("/autori/:id", (req, res) => {
  const AutorID = req.params.id;
  const q = "DELETE FROM autori WHERE IDAutor = ?";

  db.query(q, [AutorID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Autor has been deleted");
  });
});

app.get("/q/:Nume", (req, res) => {
  const result = req.params.Nume.split(/(?=[A-Z])/);
  const nume = result[0];
  const prenume = result[1];
  console.log(req.params.Nume);
  const q =
    "SELECT c.Titlu FROM carti c, autori_carti ac, autori a WHERE ac.IDCarte = c.IDCarte AND a.IDAutor = ac.IDAutor AND a.NumeAutor = ? AND a.PrenumeAutor = ?";

  const values = [nume, prenume];

  console.log(values);

  db.query(q, [...values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/autori/:id", (req, res) => {
  const AutorID = req.params.id;
  const q =
    "UPDATE autori SET `NumeAutor` = ?, `PrenumeAutor` = ?,`DataNasteriiAutor` = ?,`Tara` = ? WHERE IDAutor = ?";

  const values = [
    req.body.NumeAutor,
    req.body.PrenumeAutor,
    req.body.DataNasteriiAutor,
    req.body.Tara,
  ];

  db.query(q, [...values, AutorID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Autor has been updated");
  });
});

app.get("/avgorder", (req, res) => {
  const q = "SELECT AVG(PretComanda) as pret FROM comenzi";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/highestorder", (req, res) => {
  const q = "SELECT MAX(PretComanda) as pret1 FROM comenzi";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/mostsold", (req, res) => {
  const q =
    "SELECT c.Titlu AS MostSoldBookTitle, TotalSold FROM (SELECT IDCarte, SUM(Cantitate) AS TotalSold FROM Carti_comenzi GROUP BY IDCarte ORDER BY TotalSold DESC LIMIT 3) AS MostSold JOIN Carti AS c ON MostSold.IDCarte = c.IDCarte;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books", (req, res) => {
  const q =
    "SELECT c.IDCarte ,c.Titlu AS Title, GROUP_CONCAT(CONCAT(a.PrenumeAutor, ' ', a.NumeAutor) ORDER BY a.IDAutor SEPARATOR ', ') AS Authors, g.NumeGen AS Genre, c.AnPublicare, c.Limba, c.PretCarte FROM carti AS c JOIN gen AS g ON c.IDGen = g.IDGen JOIN autori_carti AS ac ON ac.IDCarte = c.IDCarte JOIN autori AS a ON ac.IDAutor = a.IDAutor GROUP BY c.IDCarte, c.Titlu, g.NumeGen;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const BookID = req.params.id;
  const q = "SELECT * FROM carti WHERE IDCarte = ?";
  db.query(q, BookID, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO carti (`Titlu`, `AnPublicare`, `Limba`, `IDGen`, `PretCarte`) VALUES (?)";
  const values = [
    req.body.Titlu,
    req.body.AnPublicare,
    req.body.Limba,
    req.body.IDGen,
    req.body.PretCarte,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    console.log("Book was added fine");
    return res.json("Book has been created");
  });
});

app.delete("/books/:id", (req, res) => {
  const CarteID = req.params.id;
  const q = "DELETE FROM carti WHERE IDCarte = ?";

  db.query(q, [CarteID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted");
  });
});

app.put("/books/:id", (req, res) => {
  const BookID = req.params.id;
  const q =
    "UPDATE carti SET `Titlu` = ?, `AnPublicare` = ?, `Limba` = ?, `IDGen` = ?, `PretCarte` = ? where IDCarte = ?";

  const values = [
    req.body.Titlu,
    req.body.AnPublicare,
    req.body.Limba,
    req.body.IDGen,
    req.body.PretCarte,
  ];

  db.query(q, [...values, BookID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated");
  });
});

app.get("/autoricarti", (req, res) => {
  const q = "select IDCarte from carti order by IDCarte desc limit 1";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    console.log("got the last book id fine");
    return res.json(data);
  });
});

app.post("/autoricarti", (req, res) => {
  const q = "INSERT INTO autori_carti (`IDCarte`,`IDAutor`) VALUES (?)";
  const values = [req.body[0], req.body[1]];
  // const values = [req.body.IDCarte, req.body.IDAutor];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    console.log("The link has been created");
    return res.json("Book has been created");
  });
});

app.delete("/autoricarti/:id", (req, res) => {
  const CarteID = req.params.id;
  const q = "DELETE FROM autori_carti WHERE IDCarte = ?";

  db.query(q, [CarteID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Link has been deleted");
  });
});

app.put("/autoricarti/:id", (req, res) => {
  const BookID = req.params.id;
  const q = "UPDATE autori_carti SET `IDAutor` = ? where IDCarte = ?";

  const values = req.body.IDAutor;
  console.log(req.body.IDAutor);

  db.query(q, [values, BookID], (err, data) => {
    if (err) return res.json(err);
    return res.json("Link has been updated");
  });
});

app.get("/genres", (req, res) => {
  const q = "SELECT * FROM gen";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/booksbygenre/:id", (req, res) => {
  const GenreID = req.params.id;
  const q =
    "SELECT \
    c.IDCarte,\
    c.Titlu AS Title,\
    c.Limba, \
    GROUP_CONCAT(CONCAT(a.PrenumeAutor, ' ', a.NumeAutor) ORDER BY a.IDAutor SEPARATOR ', ') AS Authors \
    FROM \
        carti AS c \
    JOIN \
        autori_carti AS ac ON ac.IDCarte = c.IDCarte \
    JOIN \
        autori AS a ON ac.IDAutor = a.IDAutor \
    WHERE c.IDGen = ? \
    GROUP BY c.IDCarte, c.Titlu;";
  db.query(q, GenreID, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/reviews", (req, res) => {
  const q =
    "select c.Titlu, r.NotaRecenzie, r.TextRecenzie\
    from carti c join recenzii r on c.IDCarte = r.IDCarte\
    order by c.IDCarte";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/reviewsaverage", (req, res) => {
  const q =
    "select c.Titlu, average_table.medie\
    from (\
      select r.IDCarte, avg(r.NotaRecenzie) as medie\
        from recenzii r\
        group by r.IDCarte\
        order by medie desc\
    ) average_table join carti c on average_table.IDCarte = c.IDCarte";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/orders", (req, res) => {
  const q =
    "SELECT \
        cli.NumeClient,\
        cli.PrenumeClient,\
        com.IDComanda,\
        com.PretComanda,\
        GROUP_CONCAT(c.Titlu) AS TitluriCarti,\
        SUM(cc.Cantitate) AS CantitateTotala\
    FROM \
        clienti cli \
    JOIN \
        comenzi com ON cli.IDClient = com.IDClient \
    JOIN \
        carti_comenzi cc ON cc.IDComanda = com.IDComanda \
    JOIN \
        carti c ON c.IDCarte = cc.IDCarte\
    GROUP BY \
        cli.NumeClient,\
        cli.PrenumeClient,\
        com.IDComanda,\
        com.PretComanda";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/clientreviews", (req, res) => {
  const q =
    "select c.NumeClient, c.PrenumeClient, r.TextRecenzie, r.NotaRecenzie\
    from recenzii r join clienti c on r.IDClient = c.IDClient\
    order by c.IDClient";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/countries", (req, res) => {
  const q =
    "select distinct Tara\
    from autori";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/listbyauthorcountry/:nume", (req, res) => {
  const Country = req.params.nume;
  const q =
    "select c.Titlu, c.IDCarte\
    from (\
      select a.IDAutor\
        from autori a\
        where a.Tara like ?\
    ) authors join autori_carti ac on ac.IDAutor = authors.IDAutor join carti c on ac.IDCarte = c.IDCarte";
  db.query(q, Country, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/searchbyclient/:Nume", (req, res) => {
  const result = req.params.Nume.split(/(?=[A-Z])/);
  const nume = result[0];
  const prenume = result[1];
  console.log(req.params.Nume);
  const q =
    "select car.IDCarte, car.Titlu\
    from (\
      select cli.IDClient\
        from clienti cli\
        where cli.NumeClient like ? and cli.PrenumeClient like ?\
    ) searched_client join comenzi com on searched_client.IDClient = com.IDClient join carti_comenzi cc on cc.IDComanda = com.IDComanda join carti car on car.IDCarte = cc.IDCarte";

  const values = [nume, prenume];

  console.log(values);

  db.query(q, [...values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/fullreview", (req, res) => {
  const q =
    "SELECT\
    c.IDCarte,\
    c.Titlu,\
    cl.NumeClient ,\
    cl.PrenumeClient ,\
    r.TextRecenzie ,\
    r.NotaRecenzie \
    FROM\
        carti c\
    JOIN\
        recenzii r ON c.IDCarte = r.IDCarte\
    JOIN\
        clienti cl ON r.IDClient = cl.IDClient;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/overaveragereview", (req, res) => {
  const q =
    "SELECT\
    c.Titlu,\
    AVG(r.NotaRecenzie) AS AverageRating\
    FROM\
    carti c\
    JOIN\
    recenzii r ON c.IDCarte = r.IDCarte\
    GROUP BY\
    c.IDCarte, c.Titlu\
    HAVING\
    AVG(r.NotaRecenzie) >= (SELECT AVG(NotaRecenzie) FROM recenzii); ";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
