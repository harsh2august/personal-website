// FeaturedVideo.jsx
import React from "react";

const FeaturedVideo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="max-w-6xl w-full sm:w-[40rem] aspect-video rounded-xl overflow-hidden bg-muted shadow-xl dark:bg-muted/50">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Pr3mhq60u_w?start=37"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FeaturedVideo;
