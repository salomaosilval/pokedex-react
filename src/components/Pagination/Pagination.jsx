import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import "./styles.scss";

export const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="paginationContainer">
      <button onClick={onLeftClick} className="leftButton">
        <div>
          <SlArrowLeft />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick} className="rightButton">
        <div>
          <SlArrowRight />
        </div>
      </button>
    </div>
  );
};
