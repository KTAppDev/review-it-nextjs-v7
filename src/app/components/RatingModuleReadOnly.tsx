"use client";
import React from "react";

const RatingModule = ({
  name,
  rating = 1,
  // ratingChanged = () => { },
  size = "rating-lg",
}: {
  name: string;
  rating: number;
  // ratingChanged: (rating: number) => void;
  size: string;
}) => {
  const customRed = "bg-red-500";
  const customOrange = "bg-orange-500";
  const customYellow = "bg-yellow-500";
  const customLightGreen = "bg-lime-500";
  const customGreen = "bg-green-500";


  const handleRating = (rating: number) => {
    switch (rating) {
      case 1:
        return customRed;
      case 2:
        return customOrange;
      case 3:
        return customYellow;
      case 4:
        return customLightGreen;
      case 5:
        return customGreen;
    }
  }
  return (
    <div className="flex flex-grow-0">
      <div
        className={` w-auto rating gap-1 ${size} items-center justify-center  p-1 rounded-md bg-gray-700 dark:bg-gray-900 `}
      >
        <input
          type="radio"
          name={name}
          value={1}
          className={` mask mask-star ${handleRating(rating)} hover:${handleRating(rating)}`}
          checked={rating === 1}
          readOnly
        // onChange={() => ratingChanged(1)}
        />
        <input
          type="radio"
          name={name}
          value={2}
          className={` mask mask-star ${handleRating(rating)} hover:${handleRating(rating)}`}
          checked={rating === 2}
          readOnly
        // onChange={() => ratingChanged(2)}
        />
        <input
          type="radio"
          name={name}
          value={3}
          className={` mask mask-star ${handleRating(rating)} hover:${handleRating(rating)}`}
          checked={rating === 3}
          readOnly
        // onChange={() => ratingChanged(3)}
        />
        <input
          type="radio"
          name={name}
          value={4}
          className={` mask mask-star ${handleRating(rating)} hover:${handleRating(rating)}`}
          checked={rating === 4}
          readOnly
        // onChange={() => ratingChanged(4)}
        />
        <input
          type="radio"
          name={name}
          value={5}
          className={` mask mask-star ${handleRating(rating)} hover:${handleRating(rating)}`}
          checked={rating === 5}
          readOnly
        // onChange={() => ratingChanged(5)}
        />
      </div>
    </div>
  );
};

export default RatingModule;
