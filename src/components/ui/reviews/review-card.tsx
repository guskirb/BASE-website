import { Rating } from "react-simple-star-rating";

export const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="p-8 min-w-[200px] w-[350px] grow flex flex-col gap-5 rounded-xl bg-gray-100">
      <div className="flex items-center gap-5">
        <img
          src={review.authorAttribution.photoURI}
          alt="Reviewer profile image"
          className="w-20 h-20"
        />
        <div className="flex flex-col">
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
      <p className="">
        {review.text.length > 270
          ? review.text.slice(0, 270) + "..."
          : review.text}
      </p>
      
    </div>
  );
};
