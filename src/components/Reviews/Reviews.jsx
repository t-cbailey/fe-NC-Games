import { fetchReviews, fetchCategories } from "../../../Utils/fetchUtils";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Filters from "./Filters/Filters";
import { useParams } from "react-router-dom";



function Reviews() {
  const [allReviews, SetAllReviews] = useState([]);
  const [categoryName, SetCategoryName] = useState('')
  const [categories, SetCategories] = useState([])
  const { category } = useParams();




  useEffect(() => {
    fetchCategories()
      .then(({ categories }) => {
        return categories.map((category) => {

          return category.slug;
        });
      })
      .then((categories) => {
        SetCategories(categories);

        categories.indexOf(category) >= 0 ? SetCategoryName(category) : null
      });
  }, []);






  useEffect(() => {

    fetchReviews(categoryName).then(({ reviews }) => {
      SetAllReviews(reviews);
      setIsLoading(false);
    });
  }, [categoryName]);






  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Filters SetCategoryName={SetCategoryName} SetCategories={SetCategories} categories={categories} categoryName={categoryName} />
      <h2>{category} reviews</h2>
      <ul className="reviewList">
        {isLoading ? (
          <p className="loading">loading...</p>
        ) : (
          allReviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })
        )}
      </ul>
    </>
  );
}
export default Reviews;
