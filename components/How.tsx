"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

const How = () => {
  return (
    <div id="how" className="p-20 font-poppins bg-customLBlue">
      <h2 className="flex justify-center bold-40 lg:bold-64 text-white pb-12">
        <strong>How 3pay Works?</strong>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 border-2 border-customDBlue bg-customLBlue lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] hover:bg-zinc-900 transition-colors duration-300">
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-lg lg:text-xl font-semibold tracking-[-0.015em] text-neutral-200">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-gray-20">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/stack1.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 border-2 border-customDBlue bg-customLBlue min-h-[300px] hover:bg-zinc-900 transition-colors duration-300">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-20">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 border-2 border-customDBlue lg:col-span-3 bg-customLBlue min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] hover:bg-zinc-900 transition-colors duration-300">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-gray-20">
              With over 100,000 monthly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/stack2.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default How;
