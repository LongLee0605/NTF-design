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
      <section className="mt-[100px]">
        <div className="container">
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <Title as="h1">Discover Digital Art & Collect NFTs</Title>
              <p className="mt-5 pr-16 text-2xl ">
                NFT Marketplace UI Created With Anima For Figma. Collect, Buy
                And Sell Art From More Than 20k NFT Artists.
              </p>
              <div className="mt-10 grid grid-cols-3">
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
                <div className="grid grid-cols-3">
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
            <div className="col-12 lg:col-6">
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
          <p className="mt-3 text-2xl">
            Checkout our weekly updated trending collection.
          </p>
          <div className="my-[60px]">
            <div className="grid grid-cols-3 gap-8">
              {dataStatic?.images?.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="rounded-2xl"
                      style={{
                        width: "348px",
                        height: "330px",
                        position: "relative",
                        alignSelf: "center",
                      }}
                    >
                      <Image src={item.src} alt="Logo skill" layout="fill" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {item?.mini?.map((itemMini, indexMini) => {
                        return (
                          <div
                            key={indexMini}
                            className="rounded-2xl"
                            style={{
                              width: "103px",
                              height: "100px",
                              position: "relative",
                              alignSelf: "center",
                            }}
                          >
                            {" "}
                            <Image
                              src={itemMini.src}
                              alt="Logo skill"
                              layout="fill"
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
            <div className="col-9">
              <Title as="h2">Top Creators</Title>
              <p className="mt-3 text-2xl">
                Checkout Top Rated Creators on the NFT Marketplace
              </p>
            </div>
            <div className="col-3 flex items-end">
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
          <div className="mt-[60px] grid grid-cols-4 gap-8">
            {dataStatic?.Tops?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center rounded-3xl bg-[#3B3B3B] p-5"
                >
                  <div className="absolute left-5 top-4 rounded-full bg-[#2B2B2B] px-3 py-1 text-[#858584]">
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
              );
            })}
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section>
        <div className="container">
          <Title as="h2">Browse Categories</Title>
          <div className="mt-[60px] grid grid-cols-4 gap-8">
            {dataStatic?.Browser?.map((item, index) => {
              return (
                <div key={index} className="group overflow-hidden rounded-2xl">
                  {/* hover */}
                  <div className="group relative">
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={253}
                      height={240}
                      className="blur-sm duration-500 group-hover:blur-0"
                    />
                    <div className="absolute inset-0 duration-500 group-hover:opacity-0">
                      <Image
                        className="mx-auto pt-20"
                        src={item.srcH}
                        alt="Logo skill"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div className="bg-[#3B3B3B] px-8 py-5">
                    <p className="text-2xl font-bold">{item.text}</p>
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
            <div className="col-9">
              <Title as="h2">Discover More NFTs</Title>
              <p className="mt-3 text-2xl">Explore new trending NFTs</p>
            </div>
            <div className="col-3 flex items-end">
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
          <div className="mt-15 grid grid-cols-3 gap-8">
            {dataStatic?.More?.map((item, index) => {
              return (
                <div key={index} className="group overflow-hidden rounded-2xl">
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
                        <p className="text-xs text-[#858584]">Price</p>
                        <div className="text-white">{item.price}</div>
                      </div>
                      <div className="col-6 text-right">
                        <p className="text-xs text-[#858584]">Highest Bid</p>
                        <div className="text-white">{item.bid}</div>
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
        <div className=" h-[675px] bg-[url('/assets/images/banner-full.png')] bg-cover bg-center">
          <div class="absolute inset-0 bg-bbc-gradient "></div>
        </div>
        <div className="container absolute inset-0 pt-[360px] pb-15">
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
            <div className="col-6">
              <Title as="h2">Discover More NFTs</Title>
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
            <div className="col-6 flex justify-end">
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
          <p className="mt-3 text-2xl">Find out how to get started</p>
          <div className="mt-12 grid grid-cols-3 gap-8">
            {dataStatic?.How?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="item-center flex flex-col overflow-hidden rounded-2xl bg-[#3B3B3B] p-8"
                >
                  <div className="mb-5 flex justify-center">
                    <Image
                      src={item.src}
                      alt="Logo skill"
                      width={220}
                      height={220}
                    />
                  </div>
                  <div className="text-center">
                    <p className="mb-3 text-2xl font-bold">{item.title}</p>
                    <p className="px-5">{item.text}</p>
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
              <div className="">
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
              <p className="mb-10 mt-3 text-2xl">
                Get Exclusive Promotions & Updates Straight To Your Inbox.
              </p>
              <div className="flex justify-between overflow-hidden rounded-2xl bg-white">
                <input
                  placeholder="Enter your email here"
                  className="rounded-2xl border-none p-5 ring-0 focus:outline-none"
                />
                <a href="">
                  <div className="flex w-full items-center rounded-2xl bg-[#A259FF] px-13 py-5">
                    <div>
                      <AiOutlineMail size={20} className={`mr-3 text-white`} />
                    </div>
                    <p className="w-fit font-bold">Subscribe</p>
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
