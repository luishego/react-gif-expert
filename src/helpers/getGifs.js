const getGifs = async (category) => {
  const baseUrl = "https://api.giphy.com/v1/gifs/search?";
  const apiKey = "api_key=PJeLo4ijNko4Nwr7oze0ukj8WN2nFFRo";
  const url = `${baseUrl}${apiKey}&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

export default getGifs;
