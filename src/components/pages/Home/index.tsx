import moment from 'moment';
import * as React from 'react';
import SampleBg from '../../../assets/sample_bg.png';

import Form from '../../organisms/Form';
import SlideCanvas from '../../organisms/SlideCanvas';

const HomePage = () => {
  const [title, setTitle] = React.useState('Webデザイン概論');
  const [titleEn, setTitleEn] = React.useState('Introduction of Web design');
  const [eventName, setEventName] = React.useState('MakotiaCon');
  const [date, setDate] = React.useState(moment());
  const [place, setPlace] = React.useState('Maebashi Terresa, Maebashi, Gunma');
  const [author, setAuthor] = React.useState('TinyKitten');
  const [image, setImage] = React.useState(SampleBg);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleTitleEnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleEn(event.currentTarget.value);
  };

  const handleEventNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEventName(event.currentTarget.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(moment(event.currentTarget.value));
  };

  const handlePlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlace(event.currentTarget.value);
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.currentTarget.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (_theFile => (e: ProgressEvent) => {
      const target = e.target as EventTarget & { result: string };
      if (!target) {
        return;
      }
      setImage(target.result);
    })(files[0]);

    reader.readAsDataURL(files[0]);
  };

  return (
    <div>
      <SlideCanvas
        title={title}
        titleEn={titleEn}
        eventName={eventName}
        date={date}
        place={place}
        author={author}
        image={image}
      />
      <Form
        onTitleChange={handleTitleChange}
        onTitleEnChange={handleTitleEnChange}
        onEventNameChange={handleEventNameChange}
        onDateChange={handleDateChange}
        onPlaceChange={handlePlaceChange}
        onAuthorChange={handleAuthorChange}
        onImageChange={handleImageChange}
      />
    </div>
  );
};

export default HomePage;
