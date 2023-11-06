import { RecommendedTour } from "./RecommendedTour";

export const RecommendedTours = (params: any) => {
  return (
    <section>
      <h2>{params.blok.headline}</h2>
      {params.blok.tours.map((tour: any) => (
        <RecommendedTour story={tour} key={tour.content._uid} />
      ))}
    </section>
  );
};
