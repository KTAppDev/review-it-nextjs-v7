"use client";
import { iReview } from "../util/Interfaces";
import ReviewBox from "./ReviewBox";
import { useQuery } from "@tanstack/react-query";
import { getLatestReviews } from "../util/serverFunctions";
import LoadingSpinner from "./LoadingSpinner";
// import { MiniReview } from "@/components/mini-review";

const TopReviews = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["latestReviews"],
    queryFn: () => getLatestReviews(),
    refetchOnWindowFocus: false,
    // refetchOnMount: "always"
  }) as any;
  if (isError) return <div>Error</div>;

  let reviews = data?.data as iReview[];

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="flex flex-col w-full justify-center items-center  dark:text-mycolours-light">
      <h1 className=" flex flex-1 justify-center mt-2 text-xl font-bold ">
        Latest reviews
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 ">
        {reviews?.length > 0 &&
          reviews?.map((review, index) => {
            return <ReviewBox key={index} review={review} />;
          })}
      </div>
      {/* <MiniReview /> */}
    </div>
  );
};

export default TopReviews;
