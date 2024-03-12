import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Autori from "./pages/Autori";
import AddAuthor from "./pages/AddAuthor";
import UpdateAuthor from "./pages/UpdateAuthor";
import Home from "./pages/Home";
import SearchByAuthors from "./pages/SearchByAuthors";
import "./styles/style.css";
import Header from "./header";
import { Footer } from "./footer";
import Administration from "./pages/Administration";
import Books from "./pages/Books";
import UpdateBook from "./pages/UpdateBook";
import AddBook from "./pages/AddBook";
import ListByGenre from "./pages/ListByGenre";
import Reviews from "./pages/Reviews";
import ReviewsAverage from "./pages/ReviewsAverage";
import Orders from "./pages/Orders";
import ClientReviews from "./pages/ClientReviews";
import ListByAuthorCountry from "./pages/ListByAuthorCountry";
import SearchByClient from "./pages/SearchByClient";
import FullReview from "./pages/FullReview";
import BooksWithReviewsOverAverage from "./pages/BooksWithReviewsOverAverage";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Administration />} />
            <Route path="/admin/autori" element={<Autori />} />
            <Route path="/admin/updateauthor/:id" element={<UpdateAuthor />} />
            <Route path="/admin/searchbyauthor" element={<SearchByAuthors />} />
            <Route path="/admin/addauthor" element={<AddAuthor />} />
            <Route path="/admin/books" element={<Books />} />
            <Route path="/admin/updatebook/:id" element={<UpdateBook />} />
            <Route path="/admin/addbook" element={<AddBook />} />
            <Route path="/admin/listbygenre" element={<ListByGenre />} />
            <Route path="/admin/reviews" element={<Reviews />} />
            <Route path="/admin/reviewsaverage" element={<ReviewsAverage />} />
            <Route
              path="/admin/reviewsoveraverage"
              element={<BooksWithReviewsOverAverage />}
            />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/clientreviews" element={<ClientReviews />} />
            <Route path="/admin/searchbyclient" element={<SearchByClient />} />
            <Route
              path="/admin/listbyauthorcountry"
              element={<ListByAuthorCountry />}
            />
            <Route path="/admin/fullreview" element={<FullReview />} />
          </Routes>
        </BrowserRouter>{" "}
      </div>

      <Footer />
    </div>
  );
}

export default App;
