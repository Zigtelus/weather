import style from './index.module.scss';


const LoadingAnimation = ({userLoading}: {userLoading: boolean})=> {



  return <>
    { 
      userLoading &&
      <h2 className={style.loading}>loading</h2>
    }
  </>
}


export default LoadingAnimation;