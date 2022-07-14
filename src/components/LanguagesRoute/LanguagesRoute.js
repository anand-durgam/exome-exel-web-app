
import './LanguagesRoute.css'
import LanguagesList from '../LanguagesList/LanguagesList'
import Table from 'react-bootstrap/Table';
import LanguageCsvFile from '../LanguageCsvFile/LanguageCsvFile';

import {useEffect , useState } from 'react'



const LanguagesRoute = () => {

    const [languagesData , setLanguagesData] = useState([])

    const getLanguagesAPI = async() => {
        const url = "http://10.0.0.237:3003/languagename"
        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          };

        const response = await fetch(url, options)
        const responseData = await response.json()
        const languagesArray = responseData.data

        setLanguagesData(languagesArray)
        
    }

    useEffect(() => {

        getLanguagesAPI()

      } , [] )


    return(
        <>
            <LanguageCsvFile />
            <Table className='languages-table' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Language Name</th>
                    </tr>
                </thead>
                <tbody>
                    {languagesData.map(item => (
                    <LanguagesList itemData={item} key={item.id} />
                    ))}
                </tbody>
            </Table>
        </>
    )
}


export default LanguagesRoute