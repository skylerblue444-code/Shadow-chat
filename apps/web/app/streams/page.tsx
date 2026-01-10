import VideoCard from "../../components/VideoCard";

export default function StreamsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <VideoCard />
      <VideoCard />
    </div>
  );
}