import VideoPlayer from "../../../components/VideoPlayer";
import StreamChat from "../../../components/StreamChat";

export default function StreamPage() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <VideoPlayer />
      <StreamChat />
    </div>
  );
}