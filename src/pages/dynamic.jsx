import { useEffect, useState } from "react"

export const getServerSideProps = async () => {
    const serverSideData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`)
        .then(res => res.json())
    
        return {
            props: {
                serverSideData
            }
        }
}

function Dynamic(props) {

    const [clientSide, setClientSide] = useState('')

    const fetchData = async () => {
        const data = await fetch('/api/hello').then(res => res.json())
        setClientSide(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <h2>Server Side</h2>
            <div>
                {props.serverSideData.timeStamp}
            </div>
            <h2>Client Side</h2>
            <div>
                {clientSide.timeStamp}
            </div>
        </>
    )
}

export default Dynamic