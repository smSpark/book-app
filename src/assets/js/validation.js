const MIN_TITLE_LENGTH = 5;
const MAX_TITLE_LENGTH = 100;
const MIN_AUTHOR_LENGTH = 3;
const MAX_AUTHOR_LENGTH = 30;
// const IMG_URL_REGEXP = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
const IMG_REGEXP = /\.(?:jpg|png|bmp|gif|jpeg)/;
const DATE_REGEXP = /^\d{4}$/;
const MAX_DATE_YEAR = "2017";

export const bookValidation = ({
  book_title: title,
  book_date: date,
  book_author: author,
  book_img: img,
}) => {
  const errors = {};

  if (!title) {
    errors.book_title = `Заголовок является обязательным полем`;
  }

  if (
    title &&
    (title.length < MIN_TITLE_LENGTH || title.length > MAX_TITLE_LENGTH)
  ) {
    errors.book_title = `Заголовок должен быть не меньше ${MIN_TITLE_LENGTH} и не больше ${MAX_TITLE_LENGTH}.`;
  }

  if (date > MAX_DATE_YEAR) {
    errors.book_date = `Год не может быть больше ${MAX_DATE_YEAR}`;
  }

  if (date && !DATE_REGEXP.test(date)) {
    errors.book_date = `Некорректная дата. Пример : "2004". `;
  }

  if (img && !IMG_REGEXP.test(img)) {
    errors.book_img = `Некорректный адресс введеного изображения`;
  }

  if (
    author &&
    (author.length < MIN_AUTHOR_LENGTH || author.length > MAX_TITLE_LENGTH)
  ) {
    errors.book_author = `Длинна автора должны быть не меньше ${MIN_AUTHOR_LENGTH} и не больше ${MAX_AUTHOR_LENGTH}`;
  }

  return errors;
};
