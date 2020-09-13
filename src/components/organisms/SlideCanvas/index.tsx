import moment from 'moment';
import * as React from 'react';
import { isMobile } from 'react-device-detect';

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
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const width = isMobile ? window.innerWidth : window.innerWidth / 2;
  const height = (3 / 4) * width;
  const imageElem = document.createElement('img');
  imageElem.src = props.image;
  const FONT_FAMILY = 'Roboto, source-han-sans-japanese, sans-serif';

  React.useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d') as CanvasRenderingContext2D;
    imageElem.onload = () => onImageLoaded(ctx);
  });

  const canvasWidth = width * 2;
  const canvasHeight = height * 2;
  const canvasAspect = canvasWidth / canvasHeight;

  // https://homemadegarbage.com/canvas-img-cover
  const drawImage = (ctx: CanvasRenderingContext2D) => {
    const imgWidth = imageElem.width;
    const imgHeight = imageElem.height;
    const imgAspect = imgWidth / imgHeight;
    let sx;
    let sy;
    let sw;
    let sh;

    if (canvasAspect >= imgAspect) {
      const ratio = canvasWidth / imgWidth;
      sx = 0;
      sy = (imgHeight * ratio - canvasHeight) / ratio / 2;
      sw = imgWidth;
      sh = canvasHeight / ratio;
    } else {
      const ratio = canvasHeight / imgHeight;
      sx = (imgWidth * ratio - canvasWidth) / ratio / 2;
      sy = 0;
      sw = canvasWidth / ratio;
      sh = imgHeight;
    }

    ctx.drawImage(imageElem, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
  };

  const onImageLoaded = (ctx: CanvasRenderingContext2D) => {
    drawImage(ctx);
    // 重ねる黒
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // タイトル
    ctx.fillStyle = 'white';
    ctx.font = `bold ${canvasWidth / 18}px ${FONT_FAMILY}`;
    ctx.fillText(props.title, canvasWidth / 24, canvasHeight / 2);
    // タイトル（英語）
    ctx.font = `100 ${canvasWidth / 44}px ${FONT_FAMILY}`;
    ctx.fillText(props.titleEn, canvasWidth / 24, canvasHeight / 1.8);
    // イベント名(ここから下は半透明)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.font = `bold ${canvasWidth / 44}px ${FONT_FAMILY}`;
    ctx.fillText(props.eventName, canvasWidth / 24, canvasHeight / 1.2);
    // 日付
    ctx.font = `bold ${canvasWidth / 44}px ${FONT_FAMILY}`;
    ctx.fillText(
      props.date.format('YYYY/MM/DD'),
      canvasWidth / 24,
      canvasHeight / 1.2 + canvasWidth / 32
    );
    // 場所
    ctx.font = `300 ${canvasWidth / 44}px ${FONT_FAMILY}`;
    ctx.fillText(
      `@ ${props.place}`,
      canvasWidth / 5.9,
      canvasHeight / 1.2 + canvasWidth / 32
    );
    // 登壇者
    ctx.font = `300 ${canvasWidth / 44}px ${FONT_FAMILY}`;
    ctx.fillText(
      props.author,
      canvasWidth / 24,
      canvasHeight / 1.2 + (canvasWidth / 32) * 2
    );
  };

  const canvasStyle: React.CSSProperties = {
    display: 'block',
    height: `${height}px`, // Retina
    margin: '0 auto 32px auto',
    width: `${width}px` // Retina
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      width={canvasWidth} // Retina
      height={canvasHeight} // Retina
      style={canvasStyle}
    />
  );
};

export default SlideCanvas;
