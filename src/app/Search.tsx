"use client";
import React from "react";
import Image from "next/image";
import MagnifyingGlassIcon from "@/assets/MagnifyingGlassIcon.svg";

function Search() {
  return (
    <div className="relative">
      <input
        type="search"
        id="search"
        className="block w-48 md:w-56 p-2 px-4 pr-10 bg-inherit shadow rounded-2xl placeholder-[#7c3aed] focus:outline focus:outline-1 focus:outline-[#7c3aed] text-[#7c3aed] font-convergence"
        placeholder="Search"
        autoComplete="off"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
        <Image
          priority
          src={MagnifyingGlassIcon}
          height={32}
          width={32}
          alt="Magnifying Glass Icon"
          className="w-5 h-5 text-[#7c3aed]"
        />
      </div>
    </div>
  );
}

export default Search;
