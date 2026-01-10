import VRScene from "../../components/VRScene";
import VRInfo from "../../components/VRInfo";

export default function VRPage() {
  return (
    <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <VRScene />
      <VRInfo />
    </div>
  );
}