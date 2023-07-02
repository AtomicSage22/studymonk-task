import React from "react";
import { Avatar } from "@mui/material";

const candidates = ["Dev", "Ayush", "Ashhar", "Atishara", "Utkarsha"];

const Results = ({location, role}) => {
  return (
    <div className="bg-transparent-background h-[35rem] mt-[2rem] rounded">
      {candidates.map((candidate) => (
        <div className="flex items-center cursor-pointer hover:bg-[#8EC3B0] ease-in duration-[300ms] w-[880px] pt-[2.4rem] p-4 gap-4 opacity-100 border-b-[1px] border-b-[#8EC3B0]">
          <div><Avatar sx={{ width: 56, height: 56 }}>{candidate.charAt(0)}</Avatar></div>
          <div className="flex items-center gap-10 justify-around">
            <p className="text-2xl">Name: {candidate}</p>
            <p>Role: {role}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
