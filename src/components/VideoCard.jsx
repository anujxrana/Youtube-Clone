const VideCard = ({ info }) => {
  console.log(info);

  // const { snippet } = info;
  // const { title } = snippet;
  return (
    <div className="border rounded-lg px-2 py-2 w-72 p-1 shadow-lg text-sm">
      <img
        className="rounded"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <p className="font-bold">{info?.snippet?.title}</p>
      <p>{info?.snippet?.channelTitle}</p>
      <div className="flex">
        <p>{info?.statistics?.viewCount} views</p>
        {/* <p>{info?.snippet?.publishedAt} days ago</p> */}
      </div>
    </div>
  );
};

export default VideCard;
