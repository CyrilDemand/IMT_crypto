import {useState} from "react";
import SessionList from "./SessionList";

function SessionListAdmin() {

    const [sessionlist, setSessionlist] = useState([]);
    const [choixAdd, setChoixAdd] = useState([]);

    function addSessions() {
        let flag = true;
        sessionlist.forEach(s => {
            if (s.name===document.querySelector("#nameInput").value){
                flag =false
            }
        })
        if(flag){
            setSessionlist(sessionlist => [...sessionlist, {
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
        <div>
            <h1>Liste d'événement</h1>
            <span>nom de l'événement</span><input type={"text"} id={"nameInput"}/>
            <span>choix</span><input type={"text"} id={"choixInput"}/>
            <button onClick={() => addChoix(document.querySelector("#choixInput").value)}>ajouter un choix</button>
            <table>
                <thead>
                <tr>
                    <th colSpan={"2"}>
                        choix de l'évènement à ajouter
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
            <button onClick={addSessions}>ajouter l'event</button>
            <SessionList admin={true}></SessionList>
        </div>
    );
}

export default SessionListAdmin;
