import './index.scss';
import PusPopuphHoc from "src/hocs/PopupPush";
import { useAppSelector } from "src/hooks/redux";
import { addText } from "src/store/pushMessage/pushMessage.slice";



function Popups():JSX.Element {

  const text = useAppSelector(item => item.pushMessageReducer.messages)
  const text1 = useAppSelector(item => item.pushMessageReducer.messages.text1)
  const text2 = useAppSelector(item => item.pushMessageReducer.messages.text2)
  const text3 = useAppSelector(item => item.pushMessageReducer.messages.text3)
  const text4 = useAppSelector(item => item.pushMessageReducer.messages.text4)
  const text5 = useAppSelector(item => item.pushMessageReducer.messages.text5)
  const text6 = useAppSelector(item => item.pushMessageReducer.messages.text6)
  const text7 = useAppSelector(item => item.pushMessageReducer.messages.text7)
  const text8 = useAppSelector(item => item.pushMessageReducer.messages.text8)
  const text9 = useAppSelector(item => item.pushMessageReducer.messages.text9)
  const text10 = useAppSelector(item => item.pushMessageReducer.messages.text10)

  const text11 = useAppSelector(item => item.pushMessageReducer.messages.text11)
  const text12 = useAppSelector(item => item.pushMessageReducer.messages.text12)
  const text13 = useAppSelector(item => item.pushMessageReducer.messages.text13)
  const text14 = useAppSelector(item => item.pushMessageReducer.messages.text14)
  const text15 = useAppSelector(item => item.pushMessageReducer.messages.text15)
  const text16 = useAppSelector(item => item.pushMessageReducer.messages.text16)
  const text17 = useAppSelector(item => item.pushMessageReducer.messages.text17)
  const text18 = useAppSelector(item => item.pushMessageReducer.messages.text18)
  const text19 = useAppSelector(item => item.pushMessageReducer.messages.text19)
  const text20 = useAppSelector(item => item.pushMessageReducer.messages.text20)

  return (
    <div className={"popups"}>
      {!!text1 && <PusPopuphHoc add={addText.addText1} text={text1} />}
      {!!text2 && <PusPopuphHoc add={addText.addText2} text={text2} />}
      {!!text3 && <PusPopuphHoc add={addText.addText3} text={text3} />}
      {!!text4 && <PusPopuphHoc add={addText.addText4} text={text4} />}
      {!!text5 && <PusPopuphHoc add={addText.addText5} text={text5} />}
      {!!text6 && <PusPopuphHoc add={addText.addText6} text={text6} />}
      {!!text7 && <PusPopuphHoc add={addText.addText7} text={text7} />}
      {!!text8 && <PusPopuphHoc add={addText.addText8} text={text8} />}
      {!!text9 && <PusPopuphHoc add={addText.addText9} text={text9} />}
      {!!text10 && <PusPopuphHoc add={addText.addText10} text={text10} />}
      {!!text11 && <PusPopuphHoc add={addText.addText11} text={text11} />}
      {!!text12 && <PusPopuphHoc add={addText.addText12} text={text12} />}
      {!!text13 && <PusPopuphHoc add={addText.addText13} text={text13} />}
      {!!text14 && <PusPopuphHoc add={addText.addText14} text={text14} />}
      {!!text15 && <PusPopuphHoc add={addText.addText15} text={text15} />}
      {!!text16 && <PusPopuphHoc add={addText.addText16} text={text16} />}
      {!!text17 && <PusPopuphHoc add={addText.addText17} text={text17} />}
      {!!text18 && <PusPopuphHoc add={addText.addText18} text={text18} />}
      {!!text19 && <PusPopuphHoc add={addText.addText19} text={text19} />}
      {!!text20 && <PusPopuphHoc add={addText.addText20} text={text20} />}
    </div>
  )
}

export default Popups;