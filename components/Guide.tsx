import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter bg-customLBlue flex-col">
      <div
        id="about"
        className="padding-container font-poppins max-container pb-2 w-full mt-24"
      >
        <p className="uppercase flex justify-center regular-18 -mt-1 mb-3 text-gray-20">
          What we do
        </p>
        <div className="flex flex-wrap flex-col justify-between gap-5 lg:gap-10">
          <h2 className="flex justify-center bold-40 lg:bold-64 text-customDBlue">
            Empowering Web 2.0 with Seamless Crypto Payments
          </h2>
          <p className="flex justify-center regular-16 text-bold text-gray-20  mt-10">
            3Pay revolutionizes online transactions by integrating
            cryptocurrency payments into Web 2.0 platforms effortlessly.
            Designed for simplicity and efficiency, 3Pay allows developers to
            embed cryptocurrency payment options into their websites with
            minimal setup, leveraging popular libraries such as Next.js and
            React. This platform supports a wide range of tokens including USDC,
            USDT, MATIC, and others, ensuring flexibility for users. With its
            built-in bridging feature, 3Pay enables easy conversion of
            cryptocurrencies into MATIC, facilitating smooth transactions
            regardless of the tokens users hold. Built on the Polygon network,
            3Pay benefits from incredibly low gas fees, offering faster, more
            reliable, and affordable transactions. By enhancing accessibility to
            digital assets and providing a seamless payment experience, 3Pay
            aims to accelerate the adoption of cryptocurrencies in everyday
            online activities, making digital payments more accessible and
            efficient for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
