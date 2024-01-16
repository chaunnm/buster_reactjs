const embedMovie = (id: number) => `https://www.2embed.cc/embed/${id}`;
const embedTVEpisode = (id: number, season: number, episode: number) =>
  `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;

export { embedMovie, embedTVEpisode };