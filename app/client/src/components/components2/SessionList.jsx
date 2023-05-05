import {useState} from "react";

function SessionList({admin}){
    const [sessionlist, setSessionlist] = useState([]);

    function deleteSession(session){
        setSessionlist(sessionlist.filter(e=>{
            return e!==session;
        }))
    }

    return(
        <table>
            <thead>
            <tr>
                <th colSpan={"2"}>
                    sessionList
                </th>
            </tr>
            </thead>
            <tbody>

            {sessionlist.map((s) => (
                <tr>
                    <td>{s.name}</td>
                    {
                        s.choices.map((c) => (
                            <td>{c}</td>
                        ))
                    }
                    if(admin===true){
                        <td><button onClick={() => deleteSession(s)}>-</button></td>
                    }

                </tr>
            ))}

            </tbody>
        </table>
    )
}

export default SessionList