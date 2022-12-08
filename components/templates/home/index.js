import FadeContent from "components/atoms/Animate/FadeContent";
import Title from "components/atoms/Title";
import Image from "next/image";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
const HomeTemplate = ({ dataStatic }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eqys4qs",
        "template_lplncgb",
        e.target,
        "SNXVEi0LoV5Ts_gWM"
      )
      .then(
        (result) => {
          toast.success("Data has been submitted.");
          setTimeout(() => {
            result(true);
          }, 3000);
          window.location.reload();
        },
        (error) => {
          toast.error("Error! An error occurred. Please try again later");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* Banner */}
      <section className="animate-[gradientAnimation_5s_ease_infinite] bg-bbc-gradient-11 bg-[length:180%_180%] pb-0">
        <div className="relative h-[300px] ">
          <div className="container">
            <div className="row">
              <div className="col-12 lg:col-4">
                <Title>Xin chào</Title>
                <b>Đây là test</b>
                <p>Phần giới thiệu</p>
              </div>
              <div className="col-12 lg:col-8"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Test */}
      <section>
        <div className="container">
          <div class="cardtest">Magic Card</div>
        </div>
      </section>
      {/* Story */}
      <section>
        <div className="container">
          <Title>Story</Title>
          <div className="mt-4">
            {dataStatic?.Storys?.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className="mb-5 rounded-2xl px-4 py-6"
                    style={{ boxShadow: "rgb(181 181 181 / 0.75) 0 16px 40px" }}
                  >
                    {item.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Interests */}
      <section>
        <div className="container">
          <Title>Interests</Title>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dataStatic?.Interests?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card relative h-60 w-full cursor-pointer overflow-hidden rounded-2xl text-white transition-all duration-700"
                >
                  <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center bg-gray-900 transition-all delay-200 duration-100 hover:opacity-0">
                    <div
                      style={{
                        width: "84px",
                        height: "84px",
                        position: "relative",
                        alignSelf: "center",
                      }}
                    >
                      <Image src={item.src} alt="Logo skill" layout="fill" />
                    </div>
                    <div className="mt-4 text-white">{item.content}</div>
                  </div>
                  <div className="card-back absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black transition-all">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Skill */}
      <section>
        <div className="container">
          <Title>Skill</Title>
          <div className="row mt-6">
            <div className="col-12 lg:col-6">
              <div className="row">
                {dataStatic?.Skills?.map((itemSkill, indexSkill) => {
                  return (
                    <div
                      key={indexSkill}
                      className="mb-6 grid grid-cols-2 gap-4  lg:mb-0 lg:grid-cols-3"
                    >
                      {itemSkill?.left?.map((itemLeft, indexLeft) => {
                        return (
                          <div
                            key={indexLeft}
                            className="flex scale-100 flex-col rounded-2xl border-2 p-6 duration-500 hover:scale-110"
                          >
                            <div
                              style={{
                                width: "84px",
                                height: "84px",
                                position: "relative",
                                alignSelf: "center",
                              }}
                            >
                              <Image
                                src={itemLeft.src}
                                alt="Logo skill"
                                layout="fill"
                              />
                            </div>
                            <div className="mt-2 text-center">
                              <p className="text-xl font-semibold">
                                {itemLeft.content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 lg:col-6">
              {dataStatic?.Skills?.map((itemSkill, indexSkill) => {
                return (
                  <div key={indexSkill}>
                    {itemSkill?.right?.map((itemRight, indexRight) => {
                      return (
                        <div
                          key={indexRight}
                          className="mt-2 rounded-2xl border-2 p-4 first:mt-0"
                        >
                          <p className="text-xl font-semibold">
                            {itemRight.content}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Project */}
      <section>
        <div className="container">
          <Title>Project</Title>
          <div className="mt-6">
            {dataStatic?.Projects?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mb-5 rounded-2xl bg-slate-300 p-10 last:mb-0"
                >
                  <div className="border-2">
                    <div className="row">
                      <div className="col-12 p-10 lg:col-6">
                        {item?.project?.map((itemLeft, indexLeft) => {
                          return (
                            <div key={indexLeft}>
                              <Title>{itemLeft.title}</Title>
                              <div className="ml-2">{itemLeft.subTitle}</div>
                              <ul className="ml-5">
                                <div>{itemLeft.titleLi}</div>
                                {itemLeft?.li?.map((itemLi, indexLi) => {
                                  return (
                                    <li
                                      key={indexLi}
                                      className="list-inside list-disc"
                                    >
                                      {itemLi}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <div className="col-12 flex justify-center lg:col-6 ">
                        <div
                          style={{
                            width: "230px",
                            height: "270px",
                            position: "relative",
                            alignSelf: "center",
                          }}
                        >
                          <Image
                            src={item.src}
                            alt="Logo skill"
                            layout="fill"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-5 px-6 text-center">
                      <a
                        href=""
                        className="col-6 rounded-xl border-2 bg-white px-6 py-3 font-semibold text-black hover:bg-black hover:text-white lg:col-3"
                      >
                        Xem Demo
                      </a>{" "}
                      <a
                        href=""
                        className="col-6 rounded-xl border-2 bg-white px-6 py-3 font-semibold text-black hover:bg-black hover:text-white lg:col-3"
                      >
                        Xem Source Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Mini Project */}
      <section>
        <div className="container">
          <Title>Mini Project</Title>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dataStatic?.MiniProject?.map((item, index) => {
              return (
                <div
                  key={index}
                  class="group flex items-center justify-center rounded-2xl border "
                >
                  <div class="relative aspect-video cursor-pointer ">
                    <div class=" pt-30 absolute inset-0 z-50 flex cursor-pointer items-center justify-center rounded-2xl bg-slate-600  bg-opacity-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
                      <div class="translate-y-4 space-y-3 rounded-2xl p-4 pb-10 text-xl transition duration-300  group-hover:translate-y-0">
                        <a
                          href=""
                          className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-black hover:text-white"
                        >
                          {item.text}
                        </a>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "355px",
                        height: "200px",
                        position: "relative",
                        alignSelf: "center",
                      }}
                    >
                      <Image src={item.src} alt="Logo skill" layout="fill" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section>
        <div className="container">
          <Title>Contact</Title>
          <div className="mt-6">
            <div className="rounded-2xl border p-10">
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="row mb-6">
                  <div className="col-12 lg:col-6">
                    <div className="mb-2 text-lg font-semibold">Name</div>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full rounded-xl py-6 px-3"
                      placeholder="Your name"
                      pattern="[A-Za-z]{1,32}"
                    />
                  </div>
                  <div className="col-12 lg:col-6">
                    <div className="mb-2 text-lg font-semibold">Email</div>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full rounded-xl py-6 px-3"
                      placeholder="Your email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                  </div>
                </div>
                <div className="mb-2 text-lg font-semibold">Subject</div>
                <input
                  type="text"
                  name="user_subject"
                  className="mb-6 w-full rounded-xl py-6 px-3"
                  placeholder="Subject"
                  pattern="[A-Za-z]{1,32}"
                />
                <div className="mb-2 text-lg font-semibold">Message</div>
                <textarea
                  name="message"
                  className="w-full rounded-xl py-6 px-3 "
                  placeholder="Message"
                />
                <div className="mt-4 flex justify-center">
                  <input
                    type="submit"
                    value="Send"
                    className="cursor-pointer rounded-2xl border px-10 py-3 text-xl font-semibold text-black hover:bg-black hover:text-white"
                  />
                  <Toaster />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeTemplate;
