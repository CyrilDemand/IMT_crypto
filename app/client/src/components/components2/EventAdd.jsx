import {useState} from "react";
import EventList from "./EventList";

function EventAdd() {

    const [eventList, setEventList] = useState([]);
    const [choixAdd, setChoixAdd] = useState([]);

    function addEvent() {
        let flag = true;
        eventList.forEach(s => {
            if (s.name===document.querySelector("#nameInput").value){
                flag =false
            }
        })
        if(flag){
            setEventList(sessionlist => [...sessionlist, {
                name: document.querySelector("#nameInput").value,
                choices: [...choixAdd]
            }])
        }

    }

    function addChoix(monChoix) {
        if(!choixAdd.includes(monChoix)){
            setChoixAdd(choix => [...choix, monChoix])
        }
    }
    function deleteChoix(monChoix) {
        setChoixAdd(choixAdd.filter(e=>{
            return e!==monChoix;
        }))    }
    return (
        <div className={"eventAdd"}>
            <h1 className={"eventAddTitle"}>Ajouter un évenement</h1>
            <span className={"eventAddName"}>Nom : </span><input className={"eventAddNameInput"} type={"text"} id={"nameInput"}/>
            <span className={"eventAddChoice"}>Choix : </span><input className={"eventAddChoiceInput"} type={"text"} id={"choixInput"}/>
            <button onClick={() => addChoix(document.querySelector("#choixInput").value)}>Ajouter le choix</button>
            <table className={"eventAddTable"}>
                <thead>
                <tr>
                    <th colSpan={100}>
                        Choix de l'évènement à ajouter :
                    </th>
                </tr>
                </thead>
                <tbody>
                    {choixAdd.map((c) => (
                        <tr >
                            <td>{c}</td>
                            <td><button onClick={() => deleteChoix(c)}>-</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <button className={"eventAddCreateButton"} onClick={addEvent}>Créer l'évenement</button>
        </div>
    );
}

export default EventAdd;
