const requestParams = new URLSearchParams({
  key: '33588137-20261db95d6a52f088d4718c9',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true'
});

const fetchImages = (query) => {
  requestParams.set('q', query);

  return fetch(`https://pixabay.com/api/?${requestParams}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then((response) => {
      if (response.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }

      return response.hits.map(hit => ({
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
        likes: hit.likes,
        views: hit.views,
        comments: hit.comments,
        downloads: hit.downloads,
      }));
    })
    .catch((error) => {throw error});
};

export { fetchImages };