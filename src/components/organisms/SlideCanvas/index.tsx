import moment from 'moment';
import * as React from 'react';
import styles from './styles.module.scss';

interface IProps {
  title: string;
  titleEn: string;
  eventName: string;
  date: moment.Moment;
  place: string;
  author: string;
  image: string;
}

const SlideCanvas = (props: IProps) => {
  const { title, titleEn, eventName, date, place, author, image } = props;

  const rootStyle: React.CSSProperties = {
    backgroundImage: `url('${image}')`
  };

  return (
    <section style={rootStyle} className={styles.slide}>
      <div className={styles.slide__inner}>
        <main className={styles.slide__titleBox}>
          <h1 className={styles.slide__titleJa}>{title}</h1>
          <h2 className={styles.slide__titleEn}>{titleEn}</h2>
        </main>
        <footer className={styles.slide__footer}>
          <b className={styles.slide__eventName}>{eventName}</b>
          <div className={styles.slide__placeWrapper}>
            <b className={styles.slide__date}>{date.format('YYYY.MM.DD')}</b>{' '}
            <span className={styles.slide__place}>@ {place}</span>
          </div>
          <p className={styles.slide__author}>{author}</p>
        </footer>
      </div>
    </section>
  );
};

export default SlideCanvas;
