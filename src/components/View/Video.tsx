interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <div className='video'>
      <iframe
        src={src}
        width='100%'
        height='auto'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
