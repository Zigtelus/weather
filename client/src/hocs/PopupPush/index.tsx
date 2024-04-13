import { useEffect, useState } from 'react';
import style from './index.module.scss';
import { useAppDispatch } from '../../hooks/redux';

type Props = {
  text: string;
  add: any;
  theme?: string;
};

const PusPopuphHoc = ({text, add, theme}: Props)=> {

  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('размонтирование')
      setIsVisible(false); // Устанавливаем isVisible в false через 3 секунды
    }, 3000);

    return () => {

      clearTimeout(timer)
    }; // Очищаем таймер при размонтировании компонента
  }, []); // Зависимость пустая, чтобы useEffect выполнился только при монтировании компонента

  useEffect(() => {
    // Проверяем, если isVisible стал false, то вызываем add('')
    if (!isVisible) {
      !!add && dispatch(add(''));
    }
  }, [isVisible]); // useEffect будет вызываться при изменении isVisible


  console.log('PusPopuphHoc', text, isVisible);
  if (!isVisible) {
    return null; // Если isVisible равен false, компонент не рендерится
  }


    return <>
      {
        <div 
          style={{"background": theme === 'black' ? '#e1cdc2' : '#706c75'}}
          // className={`${style.push_popup} ${!!isClassName ?  isClassName : ''}`}
          className={`${style.push_popup}`}
        >
          {text}
        </div>
      }
    </>
  }

  // return PusPopuphBase;



export default PusPopuphHoc;