import { Rating } from "react-simple-star-rating";

export const ReviewCard = ({ review }) => {
  return (
    <div className="border p-8 w-[25%] flex flex-col gap-5">
      <div className="flex gap-5">
        <img
          src={review.authorAttribution.photoURI}
          alt="Reviewer profile image"
          className="w-20 h-20"
        />
        <div>
          <p>{review.authorAttribution.displayName}</p>
          <p>{review.Ig}</p>
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
      <p>{review.text}</p>
    </div>
  );
};
