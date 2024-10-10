import { useEffect, useState } from "react";
import { useScript } from "../../../hooks/useScript";

export const Reviews = () => {
  const { loaded } = useScript(import.meta.env.VITE_PLACE);
  const [reviews, setReviews] = useState<object[]>([]);

  useEffect(() => {
    if (loaded) initReviews();
  }, [loaded]);

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

    if (place.reviews !== undefined) setReviews(place.reviews);
  }

  return <div></div>;
};
