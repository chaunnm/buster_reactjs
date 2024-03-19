interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <div className='video w-full h-full duration-200 rounded-sm overflow-hidden'>
      <iframe
        src={src}
        width='100%'
        height='100%'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
