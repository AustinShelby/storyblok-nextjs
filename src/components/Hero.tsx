export const Hero = (params: any) => {
  return (
    <section>
      <h1>{params.blok.headline}</h1>
      <p>{params.blok.content}</p>
    </section>
  );
};
