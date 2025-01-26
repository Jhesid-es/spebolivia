import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[150px] w-[150px] items-center justify-center rounded-md bg-opacity-10 p-5 text-primary dark:bg-white">
          <img
            src={image}
            alt={title}
            width={150}
            height={150}
            className="hidden dark:block"
          />
          <img
            src={image}
            alt={title}
            width={150}
            height={150}
            className="block dark:hidden"
          />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-justify text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
