import {useState} from "react";
import EventList from "./EventList";


function EventListVote() {

    const sessions=[{name:"s1",choices:["choix1","choix2","choix3"]},
                                        {name:"s2",choices:["choix1","choix2","choix3","choix4"]}];

    return (
        <div className={"eventListVote"}>
            <h1 className={"eventListVoteTitle"}>Sessions à voter :</h1>

            <table className={"eventListVoteTable"}>
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

        </div>
    );
}

export default EventListVote;
