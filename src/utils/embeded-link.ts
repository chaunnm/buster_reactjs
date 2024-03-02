export const getEmbededLinkMovie = (id: number) => `https://www.2embed.cc/embed/${id}`;

export const getEmbededLinkSeries = (id: number, season: number, episode: number) =>
  `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;

