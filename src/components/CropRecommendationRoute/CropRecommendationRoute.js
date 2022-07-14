
import './CropRecommendationRoute.css'
import LanguageDropDown from '../LanguageDropDown/LanguageDropDown'
import { useSelector } from 'react-redux'
import {useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import CropRecommendationCsv from '../CropRecommendationCsv/CropRecommendationCsv';
import CropRecommendationList from '../CropRecommendationList/CropRecommendationList';

const CropRecommendationRoute = () => {
    
    const {languageName} = useSelector(state => state.elsplReducer)
    const [cropRecommedationData , setCropRecommedationData] = useState([])

    const getCropRecommendationsAPI = async() => {

        const url = `http://10.0.0.237:3003/recomendations/language/${languageName}`

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          };

        const response = await fetch(url, options)
        const responseData = await response.json()
        setCropRecommedationData(responseData.data)
    }

    useEffect(() => {

        getCropRecommendationsAPI()

    }, [languageName] )

    
    return(
        <>
        <div className='import-and-dropdown-container'>
            <CropRecommendationCsv/>
            <LanguageDropDown />
        </div>

            <Table className='crop-recommendation-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Crop Name</th>
                        <th>Time Of Application</th>
                        <th>Recommendation</th>
                    </tr>
                </thead>
                <tbody>
                    {cropRecommedationData.map(item => (
                        <CropRecommendationList key={item.id} item={item} />
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default CropRecommendationRoute
