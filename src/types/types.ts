export interface Review {
  Ig: string;
  rating: number;
  text: string;
  authorAttribution: {
    displayName: string;
    uri: string;
    photoURI: string;
  };
}
