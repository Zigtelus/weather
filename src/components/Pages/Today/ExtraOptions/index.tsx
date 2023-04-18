


type Props = {
    humidity: number,
    pressure: number,
    visibility: number,
};


function ExtraOptions({humidity, pressure, visibility}: Props): JSX.Element {
  
    return <div>
        <span>Сейчас</span>

        <div>
            <div>
                <span>Влажность</span>
                <span>{humidity}</span>
            </div>
            <div>
                <span>Давление</span>
                <span>{pressure}</span>
            </div>
            <div>
                <span>Видимость</span>
                <span>{visibility}</span>
            </div>
        </div>
    </div>
}
 
export default ExtraOptions;