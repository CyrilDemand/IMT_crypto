import {useState} from "react";

function EventList({admin}){
    const [eventList, setEventList] = useState(
        [
            {name:"s1",choices:[{name:"choix1",votes:10},{name:"choix2",votes:12},{name:"choix3",votes:3}]},
            {name:"s2",choices:[{name:"choix1",votes:2},{name:"choix2",votes:5},{name:"choix3",votes:8},{name:"choix4",votes:1}]}
        ]
    );

    function deleteEvent(event){
        setEventList(eventList.filter(e=>{
            return e!==event;
        }))
    }

    return(
        <div className={"eventList"}>
            <h1 className={"eventListTitle"}>Liste des événements</h1>
            <table className={"eventListTable"}>
                <thead>
                <tr>
                    <th>
                        Nom
                    </th>
                    <th>
                        Choix
                    </th>
                </tr>
                </thead>
                <tbody>
                {eventList.map((s) => (
                    <tr>
                        <td>{s.name}</td>
                        {
                            s.choices.map((c) => (
                                <td>{c.name} : {c.votes} votes</td>
                            ))
                        }
                        {admin && <td><button onClick={() => deleteEvent(s)}>-</button></td>}

                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default EventList