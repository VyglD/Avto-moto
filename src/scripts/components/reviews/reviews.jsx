import React from "react";
import PropTypes from "prop-types";

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

const Reviews = (props) => {
  const {onBlankLinkClick} = props;

  return (
    <div className="reviews">
      <button className="reviews__add-button" type="button">Оставить отзыв</button>
      <ul className="reviews__list">
        {
          UsersReviews.map((review, index) => (
            <li key={index} className="reviews__review-wrapper">
              <article className="reviews__review">
                <h3 className="reviews__review-author">{review.name}</h3>
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
                  {
                    new Array(5).fill().map((item, starIndex) => {
                      const activeClass = starIndex < review.rate
                        ? `reviews__review-rate-point--active`
                        : ``;

                      return (
                        <svg
                          key={starIndex}
                          className={`reviews__review-rate-point ${activeClass}`}
                          width="17"
                          height="16"
                        >
                          <path
                            d="M8.63145 0l1.87885 5.87336h6.0803l-4.919 3.62993 1.8789 5.87331-4.91905-3.6299-4.91903 3.6299 1.8789-5.87331L.672291 5.87336H6.75254L8.63145 0z"
                            fill="#BDBEC2"
                          />
                        </svg>
                      );
                    })
                  }
                  <p className="reviews__review-rate-summary">Советует</p>
                </div>
                <div className="reviews__review-output">
                  <p className="reviews__review-date">1 минуту назад</p>
                  <a
                    className="reviews__review-feedback"
                    href="#blank"
                    onClick={onBlankLinkClick}
                  >
                    Ответить
                  </a>
                </div>
              </article>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  onBlankLinkClick: PropTypes.func,
};

export default Reviews;
