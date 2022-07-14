import './CropNamesRoute.css'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'
import { useSelector } from 'react-redux'
import {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import CropNamesCsvFile from '../CropNamesCsvFile/CropNamesCsvFile';

import CropList from '../CropList/CropList';

const CropNamesRoute = () => {
    
    const {languageName} = useSelector(state => state.elsplReducer)
    const [cropsData , setCropsData] = useState([])

   
    useEffect(() => {

        const getCropsAPI = async() => {

            const url = `http://10.0.0.237:3003/crops/${languageName}`

            const options = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json"
                },
              };

            const response = await fetch(url, options)
            const responseData = await response.json()
            setCropsData(responseData.data)
        }
        getCropsAPI()

      }, [languageName] )
    return(
        <>
        <div className='import-and-dropdown-container'>
            <CropNamesCsvFile />
            <LanguageDropDown />
        </div>

            <Table className='crops-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Crop Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cropsData.map(item => (
                        <CropList key={item.id} item={item} />
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default CropNamesRoute