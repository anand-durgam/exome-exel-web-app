
import './OrderDetailsRoute.css'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'
import { useSelector } from 'react-redux'
import {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import OrderDetailsCsvFile from '../OrderDetailsCsvFile/OrderDetailsCsvFile';
import OrderDetailsList from '../OrderDetailsList/OrderDetailsList';


const OrderDetailsRoute = () => {
    
    const {languageName} = useSelector(state => state.elsplReducer)
    const [orderDetailsData , setOrderDetailsData] = useState([])

    const getOrderDetailsAPI = async() => {

        // //////////////////////////////////////////////////

        const url = `http://10.0.0.237:3003/Contactdetails/language/${languageName}`

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          };

        const response = await fetch(url, options)
        const responseData = await response.json()
        setOrderDetailsData(responseData.data)
    }

    useEffect(() => {

        getOrderDetailsAPI()

    }, [languageName] )

    
    return(
        <>
        <div className='import-and-dropdown-container'>
            <OrderDetailsCsvFile/>
            <LanguageDropDown />
        </div>

            <Table className='crop-recommendation-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Headquarters Name</th>
                        <th>Headquarters Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetailsData.map(item => (
                        <OrderDetailsList key={item.id} item={item} />
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default OrderDetailsRoute

