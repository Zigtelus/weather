import style from './index.module.scss';
import { useAppDispatch } from 'src/hooks/redux';

type Props = {
  text: string;
  add: any;
  theme?: string;
};

const PusPopuphHoc = ({text, add, theme}: Props)=> {

  const dispatch = useAppDispatch()
    setTimeout(()=> dispatch(add('')), 3000)

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