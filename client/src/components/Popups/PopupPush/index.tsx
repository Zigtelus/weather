import './index.scss';
import PusPopuphHoc from "src/hocs/PopupPush";
import { useAppSelector } from "src/hooks/redux";
import { addText } from "src/store/pushMessage/pushMessage.slice";

function Popups(): JSX.Element {
  const texts: any = useAppSelector(state => state.pushMessageReducer.messages);

  // Создаем массив номеров текстов от 1 до 50
  const textNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

  return (
    <div className="popups">
      {textNumbers.map((textNumber: any) => {
        const textKey = `text${textNumber}`;
        const text = texts[textKey];
        return text ? <PusPopuphHoc key={textKey} add={(addText as any)[`addText${textNumber}`]} text={text} /> : null;
      })}
    </div>
  );
}

export default Popups;