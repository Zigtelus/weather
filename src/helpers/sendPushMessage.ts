import { addText } from "../store/pushMessage/pushMessage.slice";

export const sendTextForPush = (text: string, isNumber: number, dispatch: any) => {

  type AddText = typeof addText;
  type TAddText = keyof AddText;
  const actions = (Object.keys(addText) as TAddText[])[isNumber]

  dispatch(addText.changeNumberPush(isNumber))
  dispatch(addText[`${actions}`](text))
}