import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { AiFillRocket, AiTwotoneEye } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import AiOutlineMail from "components/atoms/Icon/ai/AiOutlineMail";
const HomeTemplate = ({ dataStatic }) => {
  return (
    <>
      {/* Banner */}
      <section className="mt-8 lg:mt-[100px]">
        <div className="container pt-10 lg:pt-0">
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <Title
                className={`mr-0 text-[34px] font-bold leading-9 text-white lg:mr-28 lg:text-[67px] lg:leading-[74px]`}
              >
                Discover Digital Art & Collect NFTs
              </Title>
              <p className="mt-5 pr-0 text-lg lg:pr-16 lg:text-2xl">
                NFT Marketplace UI Created With Anima For Figma. Collect, Buy
                And Sell Art From More Than 20k NFT Artists.
              </p>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3">
                <a href="">
                  <div className="flex items-center justify-center rounded-2xl bg-[#A259FF] p-6">
                    <div className="mr-2">
                      <FaRocket size={16} className={`text-white`} />
                    </div>
                    <p className="font-bold ">Get Stated</p>
                  </div>
                </a>
              </div>
              <div className="mt-10 h-[74px]">
                <div className="grid grid-cols-3 text-center lg:text-left">
                  <div>
                    <div className={`text-3xl text-white`}>
                      <CountUp end={240} className={` font-bold`} />
                      K+
                    </div>
                    <p className="text-2xl ">Total Sale</p>
                  </div>
                  <div>
                    <div className={`text-3xl text-white`}>
                      <CountUp end={100} className={` font-bold`} />
                      K+
                    </div>
                    <p className="text-2xl ">Auctions</p>
                  </div>
                  <div>
                    <div className={`text-3xl text-white`}>
                      <CountUp end={240} className={` font-bold`} />
                      K+
                    </div>
                    <p className="text-2xl ">Artists</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 pt-8 lg:col-6 lg:pt-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/assets/images/banner.gif"
                  alt="Logo skill"
                  width={610}
                  height={610}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 1 */}
      <section>
        {" "}
        <div className="container">
          <Title as="h2">Trending Collection</Title>
          <p className="mt-3 text-lg lg:text-2xl">
            Checkout our weekly updated trending collection.
          </p>
          <div className="my-[60px]">
            <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-3 lg:justify-start">
              {dataStatic?.images?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex max-w-[348px] flex-col justify-center"
                  >
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={348}
                      height={220}
                    />
                    <div className="mt-4 grid grid-cols-3 justify-items-center gap-4">
                      {item?.mini?.map((itemMini, indexMini) => {
                        return (
                          <div key={indexMini} className="rounded-2xl">
                            {" "}
                            <Image
                              src={itemMini.src}
                              alt="Logo skill"
                              width={348}
                              height={220}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-4">
                      {item?.content?.map((itemC, indexC) => {
                        return (
                          <div key={indexC}>
                            <p className="text-2xl font-bold ">{itemC.title}</p>
                            <div className="mt-3 flex items-center">
                              <div
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  position: "relative",
                                  alignSelf: "center",
                                }}
                              >
                                <Image
                                  src={itemC.icon}
                                  alt="Logo skill"
                                  layout="fill"
                                />
                              </div>
                              <p className="pl-3 ">{itemC.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 lg:col-8">
              <Title as="h2">Top Creators</Title>
              <p className="mt-3 text-lg lg:text-2xl">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <div className="col-12 mt-6 flex items-end justify-center lg:mt-0 lg:col-4 lg:justify-end">
              <a href="" className="">
                <div className="rounded-3xl border border-[#A259FF]">
                  <div className="flex px-[50px] py-5">
                    <div>
                      <FaRocket size={20} className="mr-3 text-[#A259FF]" />
                    </div>
                    <p className="font-bold">View Rankings</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-8 lg:mt-[60px] lg:max-w-none lg:grid-cols-4">
            {dataStatic?.Tops?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-row items-center rounded-3xl bg-[#3B3B3B] p-5 lg:flex-col"
                >
                  <div className="absolute left-5 top-4 z-10 rounded-full bg-[#2B2B2B] px-3 py-1 text-[#858584]">
                    {item.num}
                  </div>
                  <div
                    className="rounded-2xl"
                    style={{
                      width: "120px",
                      height: "120px",
                      position: "relative",
                      alignSelf: "center",
                    }}
                  >
                    <Image src={item.src} alt="Logo skill" layout="fill" />
                  </div>
                  <div className="ml-5 text-left lg:ml-0 lg:text-center">
                    <div>
                      <p className="text-2xl font-bold">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-[#858584]">
                        Total Sales:{" "}
                        <span className="text-white">{item.total}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section>
        <div className="container">
          <Title as="h2">Browse Categories</Title>
          <div className="mx-auto mt-[60px] grid max-w-[320px] grid-cols-2 justify-items-center gap-4 lg:max-w-none lg:grid-cols-4 lg:gap-8">
            {dataStatic?.Browser?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group max-w-[145px] overflow-hidden rounded-2xl lg:max-w-none"
                >
                  {/* hover */}
                  <div className="group relative max-w-[145px] lg:max-w-none">
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={253}
                      height={240}
                      className="hidden blur-sm duration-500 group-hover:blur-0 lg:block"
                    />
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={145}
                      height={145}
                      className="block blur-sm duration-500 group-hover:blur-0 lg:hidden"
                    />
                    <div className="absolute inset-0 duration-500 group-hover:opacity-0">
                      <Image
                        className="mx-auto hidden pt-20 lg:block"
                        src={item.srcH}
                        alt="Logo skill"
                        width={100}
                        height={100}
                      />
                      <Image
                        className="mx-auto block pt-14 lg:hidden"
                        src={item.srcH}
                        alt="Logo skill"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                  <div className="bg-[#3B3B3B] px-2 py-4 lg:px-8 lg:py-5">
                    <p className="text-lg font-bold lg:text-2xl">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 lg:col-8">
              <Title as="h2">Discover More NFTs</Title>
              <p className="mt-3 text-lg lg:text-2xl">
                Explore new trending NFTs
              </p>
            </div>
            <div className="col-12 mt-8 flex items-end justify-center lg:mt-0 lg:col-4">
              <a href="" className="">
                <div className="rounded-3xl border border-[#A259FF]">
                  <div className="flex items-center px-[50px] py-5">
                    <div>
                      <AiTwotoneEye size={20} className="mr-3 text-[#A259FF]" />
                    </div>
                    <p className="font-bold">See All</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-15 grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 lg:gap-8">
            {dataStatic?.More?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group max-w-[349px] overflow-hidden rounded-2xl lg:max-w-none"
                >
                  {/* hover */}
                  <div className="group">
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={349}
                      height={296}
                    />
                  </div>
                  <div className="bg-[#3B3B3B] px-8 py-5">
                    <p className="mb-2 text-2xl font-bold">{item.title}</p>
                    <div className="mb-7 flex items-center">
                      <div className="mr-3">
                        {" "}
                        <Image
                          src={item.subSrc}
                          alt="Logo skill"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <p>{item.subTitle}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p className="whitespace-nowrap text-xs text-[#858584]">
                          Price
                        </p>
                        <div className="whitespace-nowrap text-white">
                          {item.price}
                        </div>
                      </div>
                      <div className="col-6 text-right">
                        <p className="whitespace-nowrap text-xs text-[#858584]">
                          Highest Bid
                        </p>
                        <div className="whitespace-nowrap text-white">
                          {item.bid}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="relative py-0">
        <div className=" h-[850px] bg-[url('/assets/images/banner-full.png')] bg-cover bg-center lg:h-[675px]">
          <div class="absolute inset-0 bg-bbc-gradient "></div>
        </div>
        <div className="container absolute inset-0 max-w-[320px] pt-[360px] pb-15 lg:max-w-none">
          <div className=" mb-8 flex w-[160px] items-center rounded-2xl bg-[#3B3B3B] px-5 py-3">
            <div className="mr-3">
              <Image
                src={`/assets/images/i-2.png`}
                alt="Logo skill"
                width={24}
                height={24}
              />
            </div>
            <p>Shroomie</p>
            <p></p>
          </div>
          <div className="row">
            <div className="col-12 lg:col-6">
              <Title as="h2">Magic Mashrooms</Title>
              <a href="">
                <div className="mt-8 w-[200px] rounded-3xl bg-white">
                  <div className="flex items-center px-[50px] py-5">
                    <div>
                      <AiTwotoneEye size={20} className="mr-3 text-[#A259FF]" />
                    </div>
                    <p className="font-bold text-black">See NFT</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 mt-6 flex justify-center lg:mt-0 lg:col-6 lg:justify-end">
              <div className="w-[300px] rounded-xl bg-[#3B3B3B] bg-opacity-50 p-8">
                <p>Auction ends in:</p>
                <div className="flex  justify-between text-white">
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Hours</p>
                  </div>
                  <div className="pt-2 text-4xl">:</div>
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Minutes</p>
                  </div>
                  <div className="pt-2 text-4xl">:</div>
                  <div className="">
                    <p className="text-[42px] font-bold">59</p>
                    <p>Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section>
        <div className="container">
          <Title as="h2">How it works</Title>
          <p className="mt-3 text-lg lg:text-2xl">
            Find out how to get started
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {dataStatic?.How?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="item-center flex overflow-hidden rounded-2xl bg-[#3B3B3B] p-5 lg:flex-col lg:p-8"
                >
                  <div className="mb-5 flex justify-center">
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={220}
                      height={220}
                    />
                  </div>
                  <div className="ml-4 text-left lg:ml-0 lg:text-center">
                    <p className="mb-3 text-base font-bold lg:text-2xl">
                      {item.title}
                    </p>
                    <p className="text-xs lg:px-5 lg:text-base">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section>
        <div className="container rounded-2xl bg-[#3B3B3B] p-15">
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <div className=" mb-6 flex justify-center lg:mb-0">
                <Image
                  src={`/assets/images/Photo.png`}
                  alt="Logo skill"
                  width={425}
                  height={310}
                />
              </div>
            </div>
            <div className="col-12 lg:col-6">
              <Title as="h2">Join Our Weekly Digest</Title>
              <p className="mb-10 mt-3 text-lg lg:text-2xl">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
              <div className="block justify-between overflow-hidden rounded-2xl lg:flex lg:bg-white">
                <input
                  placeholder="Enter your email here"
                  className="mb-6 w-full rounded-2xl border-none p-5 ring-0 focus:outline-none lg:mb-0"
                />
                <a href="">
                  <div className="flex w-full items-center justify-center rounded-2xl bg-[#A259FF] px-13 py-5">
                    <div>
                      <AiOutlineMail size={20} className={`mr-3 text-white`} />
                    </div>
                    <p className="w-fitfont-bold">Subscribe</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
