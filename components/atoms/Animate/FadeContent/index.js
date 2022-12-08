import { useEffect, useState } from "react";

/*** Vendors ***/

/*** components ***/
import Button from "components/atoms/Button";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";

/*** ========== ***/

/**
 *
 * @param {{
 * }} props Props for the component
 *
 */
const FadeContent = ({ children, ...props }) => {
  const [isFullView, setIsFullView] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [element, setElement] = useState(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (element) {
        const elementHeight = element.offsetHeight;

        if (elementHeight > window.innerHeight * 0.35) {
          // Nếu chiều cao của element lớn hơn 35% chiều cao của window
          // Thì ẩn đi 75% chiều cao element (chỉ hiện 35% nội dung cần xem) và hiện nút mũi tên sổ xuống
          setShowButton(true);
        } else {
          // Nếu chiều cao của element nhỏ hơn 35% chiều cao của window
          // Thì hiện 100% chiều cao element (hiện đầy đủ nội dung cần xem)
          setIsFullView(true);
          setShowButton(false);
        }

        setMaxHeight(elementHeight);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [element]);

  return (
    <>
      <div
        className={`relative origin-bottom overflow-hidden transition-[max-height] duration-200 ease-linear ${
          isFullView
            ? "h-full"
            : "bg-gradient-to-t from-white via-[#333] to-[#333] bg-clip-text text-transparent"
        }`}
        style={{
          maxHeight: isFullView
            ? `${element ? maxHeight : 0}px` //show full max height
            : `${element ? (maxHeight * 35) / 100 : 0}px`, //show 35% of max height
        }}
      >
        <div
          ref={(el) => {
            if (!el) return;
            setElement(el);
          }}
        >
          {children}
        </div>
      </div>
      {showButton && (
        <div className="text-center">
          <Button
            className="rounded-full border"
            onClick={(e) => setIsFullView(!isFullView)}
          >
            <FiChevronDown
              size={24}
              className={`transition-transform duration-500 ${
                isFullView ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default FadeContent;
