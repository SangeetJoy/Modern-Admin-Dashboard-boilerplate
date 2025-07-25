import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface CollapseButtonProps {
  onSideBarToggleClick: any;
  isSideBarToggleClicked: any;
}

const CollapseButton = ({
  onSideBarToggleClick,
  isSideBarToggleClicked,
}: CollapseButtonProps) => {
  return (
    <button
      onClick={() => onSideBarToggleClick()}
      className={`text-1xl p-1.5 rounded-full bg-stone-200  hover:bg-black/70 hover:text-white transition-all duration-200 ease-in-out absolute -top-100 ${
        isSideBarToggleClicked ? "left-10" : "left-56"
      }`}
    >
      {isSideBarToggleClicked ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </button>
  );
};

export default CollapseButton;
