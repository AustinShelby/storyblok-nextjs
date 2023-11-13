import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchHomePage = async () => {
  const { isEnabled } = draftMode();
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version:
      process.env.NODE_ENV === "development" || isEnabled
        ? "draft"
        : "published",
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ["recommended_tours.tours"] }}
      story={story}
    />
  );
};

export default HomePage;
