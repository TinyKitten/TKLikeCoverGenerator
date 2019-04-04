import * as React from 'react';
import { isMobile } from 'react-device-detect';

import styles from './styles.module.scss';

interface IProps {
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTitleEnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEventNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPlaceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCaptureClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const width = isMobile ? window.innerWidth : window.innerWidth / 2;
const sectionStyle: React.CSSProperties = {
  margin: '0 auto',
  width
};

const Form = (props: IProps) => (
  <section style={sectionStyle}>
    <div className={styles.btnWrapper}>
      <button className={styles.captureBtn} onClick={props.onCaptureClick}>
        ダウンロード
      </button>
    </div>
    <form>
      <div className={styles.box}>
        <label>背景画像:</label>
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={props.onImageChange}
        />
      </div>
      <div className={styles.box}>
        <label>タイトル:</label>
        <input type="text" onChange={props.onTitleChange} name="title" />
      </div>
      <div className={styles.box}>
        <label>タイトル(英語):</label>
        <input type="text" onChange={props.onTitleEnChange} name="title_en" />
      </div>
      <div className={styles.box}>
        <label>イベント名:</label>
        <input
          type="text"
          onChange={props.onEventNameChange}
          name="event_name"
        />
      </div>
      <div className={styles.box}>
        <label>日付:</label>
        <input type="date" onChange={props.onDateChange} name="date" />
      </div>
      <div className={styles.box}>
        <label>開催場所:</label>
        <input type="text" onChange={props.onPlaceChange} name="place" />
      </div>
      <div className={styles.box}>
        <label>名前:</label>
        <input type="text" onChange={props.onAuthorChange} name="place" />
      </div>
    </form>
  </section>
);

export default Form;
