export const Testimonial = (params: any) => {
  return (
    <div>
      <p>{params.blok.comment}</p>
      <p>{params.blok.name}</p>
    </div>
  );
};
