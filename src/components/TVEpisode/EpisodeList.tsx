import { useParams } from 'react-router-dom';
import { tmdbApi } from '../../api';
import { useEffect, useState } from 'react';
import { Episode } from '../../interfaces';
import { EpisodeItem } from '.';

function EpisodeList() {
  const { id, season } = useParams();
  const [episodes, setEpisodes] = useState<Episode[]>();

  useEffect(() => {
    const fetchEpisodes = async () => {
      if (id && season) {
        const response = await tmdbApi.getTVSeasons(parseInt(id, 10), parseInt(season, 10));
        setEpisodes(response.data.episodes);
      }
    };
    fetchEpisodes();
  }, [id, season]);

  return (
    <div className='season flex'>
      {episodes &&
        episodes.map((episode, index) => (
          <EpisodeItem
            key={index}
            episodes={episode}
          />
        ))}
    </div>
  );
}

export default EpisodeList;
