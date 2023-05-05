import {useState} from "react";

function WhiteList({title}) {

    const [whitelist, setWhitelist] = useState([]);

    function addWhiteListAddress(myAddress) {
        setWhitelist(whitelist => [...whitelist, myAddress])
        console.log(whitelist)
    }

    function deleteWhiteListAddress(myAddress){
        setWhitelist(whitelist.filter(e=>{
            return e!==myAddress;
        }))
    }

    return (
        <div className={"whiteList"}>
            <h1 className={"whiteListTitle"}>{title}</h1>
            <input className={"whiteListInput"} type={"text"} id={"whiteListInput"}/>
            <button className={"whiteListAddButton"} onClick={() => addWhiteListAddress(document.querySelector("#whiteListInput").value)}>+</button>

            <table className={"whiteListTable"}>
                <thead>
                    <tr>
                        <th colSpan={"2"}>
                            whitelist
                        </th>
                    </tr>
                </thead>
                <tbody>

                   {whitelist.map((address) => (
                            <tr >
                                <td>{address}</td>
                                <td><button onClick={() => deleteWhiteListAddress(address)}>-</button></td>
                            </tr>
                        ))}

                </tbody>
            </table>
        </div>
    );
}

export default WhiteList;
