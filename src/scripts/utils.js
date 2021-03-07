import {toast} from "react-toastify";

const handleBlankLinkClick = (evt) => {
  evt.preventDefault();

  toast.info(`Функционал отсутствует`);
};

export {
  handleBlankLinkClick,
};
