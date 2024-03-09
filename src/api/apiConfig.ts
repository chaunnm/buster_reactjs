const apiConfig = {
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w400Image: (imgPath: string) => `https://image.tmdb.org/t/p/w400/${imgPath}`,
  w200Image: (imgPath: string) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
};

export default apiConfig;
