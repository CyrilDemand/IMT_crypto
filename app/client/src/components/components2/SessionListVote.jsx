import {useState} from "react";
import SessionList from "./SessionList";


function SessionListVote() {

    const sessions=[{name:"s1",choices:["choix1","choix2","choix3"]},
                                        {name:"s2",choices:["choix1","choix2","choix3","choix4"]}];

    return (
        <div>
            <h1>Sessions à voter :</h1>

            <table>
                <thead>
                <tr>
                    <th>
                        Nom
                    </th>
                    <th colSpan={"100%"}>
                        Choix
                    </th>
                </tr>
                </thead>
                <tbody>

                {sessions.map((session) => (
                    <tr >
                        <td>{session.name}</td>
                        {session.choices.map((choice) => (
                            <td><button onClick={() => console.log(choice)}>{choice}</button></td>
                        ))}

                    </tr>
                ))}

                </tbody>
            </table>
            <SessionList admin={false}></SessionList>
        </div>
    );
}

export default SessionListVote;
