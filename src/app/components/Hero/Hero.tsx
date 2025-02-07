import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="grid hero-padding hero-grid-rows grid-cols-[0.5fr_0.5fr]">
      {/* Hero Title */}
      <div className="flex flex-col sticky row-start-1 col-start-1 row-end-2 col-end-3">
        <div className="grid flex-grow hero-context-padding">
          <div className="w-[53.125%] flex flex-col justify-self-center">
            <div className="w-full hero-title-margin-bottom order-1">
              <h1 className="text-center hero-title-font-size">
                The Tsakhkadé Hotel
              </h1>
            </div>
            <div className="w-full order-2">
              <p className="text-center hero-slogan-font-size">
                A Classic Urban Escape
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
