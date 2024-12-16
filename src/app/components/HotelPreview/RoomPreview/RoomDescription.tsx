import { FC } from "react";

interface RoomDescriptionProps {
  peopleCapacity: number;
  roomSize: number;
  bedType: string;
  amenities?: string[];
}

const RoomDescription: FC<RoomDescriptionProps> = ({
  peopleCapacity,
  roomSize,
  bedType,
  amenities,
}) => {
  return (
    <div className="grid h-[40px] w-full border-b border-descGapBg">
      <div className="self-center">
        <span className="font-normal text-base">
          {peopleCapacity} Adults ({roomSize}m2)
        </span>
      </div>
    </div>
  );
};

export default RoomDescription;
