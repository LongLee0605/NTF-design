import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { AiFillRocket } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
const HomeTemplate = ({ dataStatic }) => {
  return (
    <>
      {/* Banner */}
      <section className="mt-[100px]">
        <div className="container">
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <Title
                className={`pr-28 text-[67px] font-bold leading-[74px] text-white`}
              >
                Discover Digital Art & Collect NFTs
              </Title>
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
                <div
                  style={{
                    width: "540px",
                    height: "401px",
                    position: "relative",
                    alignSelf: "center",
                  }}
                >
                  <Image
                    src="/assets/images/image-ss1.png"
                    alt="Logo skill"
                    layout="fill"
                  />
                </div>
                <div className="bg-[#3B3B3B] px-6 py-5">
                  <p className="text-2xl font-bold ">Space Walking</p>
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
                        src="/assets/images/icon-image.png"
                        alt="Logo skill"
                        layout="fill"
                      />
                    </div>
                    <p className="pl-3 ">Animakid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 1 */}
      <section>
        {" "}
        <div className="container">
          <Title
            className={`pr-28 text-[67px] font-bold leading-[74px] text-white`}
          >
            Trending Collection
          </Title>
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
              <Title
                className={`pr-28 text-[67px] font-bold leading-[74px] text-white`}
              >
                Top Creators
              </Title>
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
          <Title
            className={`pr-28 text-[67px] font-bold leading-[74px] text-white`}
          >
            Browse Categories
          </Title>
          <div className="mt-[60px] grid grid-cols-4 gap-8">
            {dataStatic?.Browser?.map((item, index) => {
              return (
                <div key={index} className="group overflow-hidden rounded-2xl">
                  {/* hover */}
                  <div
                    style={{
                      width: "253px",
                      height: "240px",
                      position: "relative",
                      alignSelf: "center",
                    }}
                  >
                    <Image src={item.src} alt="Logo skill" layout="fill" />
                    <div className="absolute inset-0 w-full blur-sm">
                      <Image
                        src={item.srcH}
                        alt="Logo skill"
                        width={80}
                        height={80}
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
    </>
  );
};
export default HomeTemplate;
