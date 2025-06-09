export default function AdBanner({ position = "default" }: { position?: string }) {
  return (
    <div className="w-full flex justify-center items-center py-4">
      <div className="bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded">
        {position === "side" && "[광고 영역 - 사이드]"}
        {position === "bottom" && "[광고 영역 - 하단]"}
        {position === "default" && "[광고 영역]"}
      </div>
    </div>
  );
} 