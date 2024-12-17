import styles from "../styles/NewReview.module.css";
import React, { useState, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
export default function NewReview() {
    const SubmitReview = () => {
        const [review, setReview] = useState("");
        const [rating, setRating] = useState("");
        const [reviewer, setReviewer] = useState("");
        const [item, setItem] = useState("");
        const [itemList, setItemList] = useState([]);

        const navigate = useNavigate();

        useEffect(() => {
            fetch("http://localhost:5000/items").then((response) =>
                response.json()).then((items) =>
                    setItemList(items)).catch((error) => {
                        console.log(error);
                    });
        }, []);

        const handleSubmit = (event) => {
            event.preventDefault();
            const reviewInfo = {
                review: review,
                rating: rating,
                reviewer: reviewer,
                item: item,
            };
            fetch("http://localhost:3000/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/JSON",
                },
                body: JSON.stringify(reviewInfo),
            })
                .then((respose) => respose.json())
                .then((newReview) => {
                    setReview("");
                    setRating("");
                    setReviewer("");
                    setItem("");
                    navigate("/Reviews");
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        return (
          <>
            <h1>Submit A Review</h1>
            <form action="">
              <input
                type="text"
                onChange={(event) => setReviewer(event.target.value)}
              />
              <textarea
                id=""
                name="review"
                onChange={(event) => setReview(event.target.value)}
              ></textarea>
            </form>
          </>
        );
    }
}
