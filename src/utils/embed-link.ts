export const getEmbedLinkMovie = (id: number) => `https://www.2embed.cc/embed/${id}`;

export const getEmbedLinkTVEpisode = (id: number, season: number, episode: number) =>
  `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;
