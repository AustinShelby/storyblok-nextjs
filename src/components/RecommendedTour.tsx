import Link from "next/link";

export const RecommendedTour = (props: any) => {
  return (
    <div>
      <Link href={`/${props.story.full_slug}`}>
        <h3>{props.story.content.name}</h3>
      </Link>
    </div>
  );
};
