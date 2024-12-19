import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { useState, useEffect } from "react";
import VideCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideo();
  }, []);

  async function getVideo() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* <VideCard info={videos[0]} /> */}
      {videos.map((e, index) => (
        <Link key={index} to={"/watch?v=" + e.id}>
          <VideCard info={e} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
