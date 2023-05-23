import React, {useState, useEffect} from 'react'

const Table = () => {
    const [tableParams, setTableParams] = useState({});

    useEffect(() => {
        getTableParams()
    },[])

    const getTableParams = () => {
        const queryParameters = new URLSearchParams(window.location.search)
        const number = queryParameters.get("number")
        const place = queryParameters.get("place")

        setTableParams({number, place})
    }
    

    return <div>
        <h1>Table</h1>
        <div>Table Number: {tableParams.number}</div>
        <div>Place: {tableParams.place}</div>
    </div>
}

export default Table