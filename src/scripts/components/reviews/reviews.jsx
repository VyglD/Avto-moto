import React from "react";
import Stars from "../stars/stars";
import Popup from "../popup/popup";
import {handleBlankLinkClick} from "../../utils";

const UsersReviews = [
  {
    name: `Борис Иванов`,
    advantages: `мощность, внешний вид`,
    disadvantage: `Слабые тормозные колодки (пришлось заменить)`,
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера.
            Стильная внешка и крут по базовым характеристикам.
            Не думал, что пересяду на китайский автопром,
            но сейчас гоняю и понимаю, что полностью доволен.`,
    rate: 3,
  },
  {
    name: `Марсель Исмагилов`,
    advantages: `Cтиль, комфорт, управляемость`,
    disadvantage: `Дорогой ремонт и обслуживание`,
    comment: `Дизайн отличный, управление просто шикарно,
          ощущения за рулём такой машины особые. Но ремонт очень дорогой.
          Пару месяцев назад пришлось менять двигатель.
          По стоимости вышло как новый автомобиль.
          Так что, если покупать эту машину,
          надо быть готовым к большим расходам на обслуживание.`,
    rate: 3,
  }
];

const Reviews = () => {
  const [popupVisibility, setPopupVisibility] = React.useState(false);

  const handleAddReviewButtonClick = React.useCallback(
      () => {
        const paddingOffset = `${window.innerWidth - document.body.offsetWidth}px`;

        document.body.style.paddingRight = paddingOffset;
        document.body.style.overflow = `hidden`;

        setPopupVisibility(true);
      },
      [setPopupVisibility]
  );

  const handleClosePopupButtonClick = React.useCallback(
      () => {
        document.body.style.paddingRight = `0`;
        document.body.style.overflow = `auto`;

        setPopupVisibility(false);
      },
      [setPopupVisibility]
  );

  return (
    <section className="reviews">
      <h3 className="reviews__title visually-hidden">Отзывы</h3>
      <button
        className="reviews__add-button"
        type="button"
        onClick={handleAddReviewButtonClick}
      >
        Оставить отзыв
      </button>
      <ul className="reviews__list">
        {
          UsersReviews.map((review, index) => (
            <li key={index} className="reviews__review-wrapper">
              <article className="reviews__review">
                <h4 className="reviews__review-author">{review.name}</h4>
                <p className="reviews__review-advantages-title">
                  <span>+</span> Достоинства
                </p>
                <p className="reviews__review-advantages">
                  {review.advantages}
                </p>
                <p className="reviews__review-disadvantage-title">
                  <span>–</span> Недостатки
                </p>
                <p className="reviews__review-disadvantage">
                  {review.disadvantage}
                </p>
                <p className="reviews__review-comment-title">Комментарий</p>
                <p className="reviews__review-comment">{review.comment}</p>
                <div className="reviews__review-rate-wrapper">
                  <Stars
                    className={`reviews__review-rate-point`}
                    activeClass={`reviews__review-rate-point--active`}
                    isActive={(starIndex) => starIndex < review.rate}
                  />
                  <p className="reviews__review-rate-summary">Советует</p>
                </div>
                <div className="reviews__review-output">
                  <p className="reviews__review-date">1 минуту назад</p>
                  <a
                    className="reviews__review-feedback"
                    href="#blank"
                    onClick={handleBlankLinkClick}
                  >
                    Ответить
                  </a>
                </div>
              </article>
            </li>
          ))
        }
      </ul>
      {popupVisibility &&
        <Popup
          onCloseButtonClick={handleClosePopupButtonClick}
        />
      }
    </section>
  );
};

Reviews.propTypes = {};

export default Reviews;
