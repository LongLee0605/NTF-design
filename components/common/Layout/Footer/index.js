import Title from "components/atoms/Title";
import { useEffect, useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosArrowUp, IoLogoGithub } from "react-icons/io";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div
      className="bg-[#3B3B3B]"
      style={{ boxShadow: "rgb(0 0 0 / 0.25) 0px 4px 10px" }}
    >
      <div className="container py-10 px-8">
        <div className="row">
          <div className="col-12 lg:col-4">
            <div className="flex items-center">
              <div>
                <IoLogoGithub size={32} className={`mr-3 text-white`} />
              </div>
              <Title
                className={`whitespace-nowrap text-base font-bold text-white`}
              >
                NFT Marketplace
              </Title>
            </div>
            <div>
              <p className="font-base mt-6 pr-32 text-white">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <p className="font-base mt-5 text-white">Join our community</p>
            </div>
            <div className="mt-4 flex">
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`text-gray-600`} />
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4">
            <div className="flex items-center">
              <Title
                className={`whitespace-nowrap text-base font-bold text-white`}
              >
                Explore
              </Title>
            </div>
            <div>
              <p className="font-base mt-6 text-white">Marketplace</p>
              <p className="font-base mt-5 text-white">Rankings</p>
              <p className="font-base mt-5 text-white">Connect a wallet</p>
            </div>
            <div className="mt-4 flex">
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`text-gray-600`} />
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4">
            <div className="flex items-center">
              <Title
                className={`whitespace-nowrap text-base font-bold text-white`}
              >
                Join our weekly digest
              </Title>
            </div>
            <div>
              <p className="font-base mt-6 text-white">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className="mt-4 flex">
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`mr-2 text-gray-600`} />
              </div>
              <div>
                <AiOutlineYoutube size={32} className={`text-gray-600`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
