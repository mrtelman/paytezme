import React, {useState, useEffect} from 'react'
import { Button, Card } from 'antd';
import Title from 'antd/es/typography/Title';

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
    

    return (
        <>
            <div style={{padding: 20, textAlign: 'center'}}>
                <h2>{tableParams.place}</h2>
                <div style={{textAlign: 'center'}}>
                    <h3>Стол №{tableParams.number}</h3>
                </div>
                <div style={{marginBottom: 20}}>
                    <Card
                        bodyStyle={{padding: 0}}
                        title={'Английский завтрак'}
                        actions={[<Button type='primary'>Заказать 2500 тг</Button>]}
                    >
                        <img style={{objectFit: 'contain', width: '100%'}} src="https://avatars.dzeninfra.ru/get-zen_doc/3512693/pub_6220ee6278c7ec42f5e03a81_6220eef45529cb2055add798/scale_1200" alt="" /> 
                    </Card>
                </div>
                <div style={{marginBottom: 20}}>
                    <Card
                        bodyStyle={{padding: 0}}
                        title={'Омлет с грибами'}
                        actions={[<Button type='primary'>Заказать 2300 тг</Button>]}
                    >
                        <img style={{objectFit: 'contain', width: '100%'}} src="https://static.1000.menu/img/content-v2/ff/39/26799/omlet-s-gribami-i-syrom-na-skovorode-na-zavtrak_1637821343_5_max.jpg" alt="" /> 
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Table