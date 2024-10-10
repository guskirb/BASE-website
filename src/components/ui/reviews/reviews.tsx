import { useEffect, useState } from "react";
import { useScript } from "../../../hooks/useScript";
import { ReviewCard } from "./review-card";

export const Reviews = () => {
  const { loaded } = useScript(import.meta.env.VITE_PLACE);
  const [reviews, setReviews] = useState<object[]>([]);

  useEffect(() => {
    if (loaded) initReviews();
  }, [loaded]);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  async function initReviews(): Promise<void> {
    const { Place } = (await google.maps.importLibrary(
      "places"
    )) as google.maps.PlacesLibrary;
    const place = new Place({
      id: "ChIJnZnvvf2hc0gRmnomPC7m6Pk",
      requestedLanguage: "en",
    });
    await place.fetchFields({
      fields: ["reviews"],
    });

    if (place.reviews) {
      const filteredReviews = place.reviews.filter(
        (review) => review.rating > 4
      );
      setReviews(filteredReviews);
    }
  }

  return (
    <div className="flex justify-between box-border w-full gap-10">
      {reviews.map((review) => (
        <ReviewCard review={review} />
      ))}
    </div>
  );
};
