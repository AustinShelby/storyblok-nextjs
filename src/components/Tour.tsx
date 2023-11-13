import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";

export const Tour = (props: any) => {
  return (
    <main
      {...storyblokEditable(props.blok)}
      className="container mx-auto px-4 w-full pt-32 pb-16"
    >
      <h1 className="text-3xl md:text-5xl font-bold">{props.blok.name}</h1>
      <img className="mt-12" src={props.blok.main_image.filename} />
      <p className="mt-12 text-lg md:text-2xl md:leading-relaxed">
        {props.blok.introduction}
      </p>
      <div
        className="prose md:prose-lg mt-16 max-w-none"
        dangerouslySetInnerHTML={{
          __html: renderRichText(props.blok.body),
        }}
      ></div>
    </main>
  );
};
