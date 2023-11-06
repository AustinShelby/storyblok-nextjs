import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { RecommendedTour } from "@/components/RecommendedTour";

const fetchToursPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: "draft",
  });
  return response.data.story;
};

const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: "draft",
  });
  return response.data.stories;
};

const ToursPage = async () => {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokStory story={story} />
      {tours.map((tour) => (
        <RecommendedTour story={tour} key={tour.content._uid} />
      ))}
    </div>
  );
};
export default ToursPage;
