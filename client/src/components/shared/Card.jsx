/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuCalendarDays, LuCalendarRange } from "react-icons/lu";

const Card = ({ cardData }) => {
  const [attachments, setAttachments] = useState(0);
  return (
    <div className="bg-white px-3 py-4 rounded flex flex-col gap-4">
      <div className="flex-between">
        {/* client */}
        <div className="flex flex-row items-center gap-1">
          <img
            src={cardData.clientImage}
            alt={cardData.clientName}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-gray-700 text-xs lg:text-sm font-medium">
            {cardData.clientName}
          </p>
        </div>
        {/* user */}
        <div className="flex flex-row items-center gap-1">
          <img
            src={cardData.userImage}
            alt={cardData.userName}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-gray-700 text-xs lg:text-sm font-medium">
            {cardData.userName}
          </p>
        </div>
      </div>

      {/* task description */}
      <div className="flex justify-between items-center gap-2">
        <span className="flex items-center gap-1 flex-1">
          <FaLayerGroup size={16} color="#666666" />
          <p className="text-gray-600 text-xs">
            {cardData.taskDescription.slice(0, 30)}...
          </p>
        </span>

        {/* task number */}
        <span className="bg-[#e8eef3] p-1 rounded-sm flex items-center gap-1">
          <LuCalendarRange size={16} color="#666666" />
          <p className="text-gray-600 text-xs">{cardData.taskNumber}</p>
        </span>
      </div>

      {/* extra data */}
      <div className="flex flex-row justify-between items-center gap-2">
        <img
          src={cardData.extraImage}
          alt="user"
          className="w-6 h-6 rounded-full object-cover bg-center"
        />
        <img
          src={cardData.clientImage}
          alt={cardData.clientName}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="rounded-full bg-[#e8eef3] p-1 text-xs font-medium">
          {cardData.userNumber}
        </span>
        <span className="flex items-center gap-1">
          <IoChatbubblesOutline size={16} color="#666666" />
          <p className="text-gray-600 text-xs">{cardData.chatNumber}</p>
        </span>

        {/* attachments */}
        <span className="flex items-center gap-1 cursor-pointer">
          <GrAttachment size={16} color="#666666" />
          <p className="text-gray-600 text-xs">{attachments}</p>
        </span>

        <span className="flex items-center gap-1">
          <LuCalendarDays size={16} color="#666666" />
          <p className="text-gray-600 text-xs">{cardData.taskDate}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
