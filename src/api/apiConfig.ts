const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'c2f53ed2f7d5190de2543ad155c23286',
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w200Image: (imgPath: string) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
};

export default apiConfig;
