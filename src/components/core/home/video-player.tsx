"use client";

import VideoPlayButton from "@/components/assets/video-play-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const VideoPlayer = ({
  videoLink = "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
}: {
  videoLink: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <VideoPlayButton className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="rounded-[20px] lg:rounded-[40px]">
        <iframe
          className="w-full h-[50vh] lg:h-[90vh] rounded-[10px] lg:rounded-[20zpx]"
          src={videoLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;
