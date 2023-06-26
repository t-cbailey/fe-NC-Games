import { fetchReviews, fetchCategories } from "../../../Utils/fetchUtils";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Filters from "./Filters/Filters";
import { useParams, useNavigate } from "react-router-dom";



function Reviews() {
  const [allReviews, SetAllReviews] = useState([]);
  const [categories, SetCategories] = useState([])
  const [categoryName, SetCategoryName] = useState(null)
  const [sortParam, SetSortParam] = useState(null)
  const [orderParam, SetOrderParam] = useState(null)
  const { category } = useParams();


  const navigate = useNavigate()

  useEffect(() => {
    fetchCategories()
      .then(({ categories }) => {
        return categories.map((category) => {
          return category.slug;
        });
      })
      .then((categories) => {

        SetCategories(["All Categories", ...categories]);

        categories.indexOf(category) >= 0 ? SetCategoryName(category) : SetCategoryName('')
      });
  }, []);


  useEffect(() => {

    fetchReviews(categoryName, sortParam, orderParam).then(({ reviews }) => {
      SetAllReviews(reviews);
      setIsLoading(false);
    }).then(() => {
      if (categoryName) {
        navigate(`/reviews/categories/${categoryName}`);
      } else { navigate(`/reviews`); }
    }
    );
  }, [categoryName, sortParam, orderParam]);


  const [isLoading, setIsLoading] = useState(true);

  function capitaliseCategoryName(categoryName) {
    if (categoryName) {
      let tempStr = categoryName.slice()
      return tempStr.charAt(0).toUpperCase() + tempStr.slice(1)
    }
  }




  return (
    <>
      <Filters SetCategoryName={SetCategoryName} SetCategories={SetCategories} categories={categories} categoryName={categoryName} SetOrderParam={SetOrderParam} SetSortParam={SetSortParam} />
      <h2>{categoryName ? `'${capitaliseCategoryName(categoryName)}'` : 'All'} reviews</h2>
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
