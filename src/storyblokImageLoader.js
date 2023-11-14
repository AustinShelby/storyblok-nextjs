const storyblokImageLoader = ({ src, width, quality }) => {
  return `${src}/m/${width}x0/filters:quality(${quality || 75})`;
};

export default storyblokImageLoader;
