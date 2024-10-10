import { Rating } from "react-simple-star-rating";

export const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="border p-8 min-w-[200px] w-[300px] grow flex flex-col gap-5 rounded-xl bg-white">
      <div className="flex flex-col justify-center items-center gap-5">
        <img
          src={review.authorAttribution.photoURI}
          alt="Reviewer profile image"
          className="w-20 h-20"
        />
        <div className="flex flex-col items-center">
          <p>{review.authorAttribution.displayName}</p>
          <p className="mt-auto opacity-50">{review.Ig}</p>
          <Rating
            initialValue={review.rating}
            readonly={true}
            size={22}
            SVGclassName={"stars"}
            fillClassName={"starsContainer"}
            emptyClassName={"starsContainer"}
          />
        </div>
      </div>
      <p className="text-center">
        {review.text.length > 250
          ? review.text.slice(0, 250) + "..."
          : review.text}
      </p>
      
    </div>
  );
};
