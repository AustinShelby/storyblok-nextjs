export const Feature = (params: any) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow">
      <h3 className="font-bold text-3xl">{params.blok.headline}</h3>
      <p className="mt-6 text-lg">{params.blok.content}</p>
    </div>
  );
};
