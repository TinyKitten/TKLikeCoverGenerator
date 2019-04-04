import * as React from 'react';

import styles from './styles.module.scss';

interface IProps {
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTitleEnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEventNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPlaceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAuthorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = (props: IProps) => (
  <form className={styles.form}>
    <div>
      <label>背景画像:</label>
      <input
        type="file"
        name="avatar"
        accept="image/*"
        onChange={props.onImageChange}
      />
    </div>
    <div>
      <label>タイトル:</label>
      <input type="text" onChange={props.onTitleChange} name="title" />
    </div>
    <div>
      <label>タイトル(英語):</label>
      <input type="text" onChange={props.onTitleEnChange} name="title_en" />
    </div>
    <div>
      <label>イベント名:</label>
      <input type="text" onChange={props.onEventNameChange} name="event_name" />
    </div>
    <div>
      <label>日付:</label>
      <input type="date" onChange={props.onDateChange} name="date" />
    </div>
    <div>
      <label>開催場所:</label>
      <input type="text" onChange={props.onPlaceChange} name="place" />
    </div>
    <div>
      <label>名前:</label>
      <input type="text" onChange={props.onAuthorChange} name="place" />
    </div>
  </form>
);

export default Form;
