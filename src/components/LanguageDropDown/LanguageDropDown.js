import './LanguageDropDown.css'
import {useEffect , useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLanguageName } from '../../redux/action'

const LanguageDropDown = () => {
    const dispatch = useDispatch();

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

    const onChangeLanguage = (e) => {
        // console.log(e.target.value)
        const value = e.target.value
        dispatch(setLanguageName(value))
    }

    useEffect(() => {

        getLanguagesAPI()

      } , [] )

    
    return(
        <>
            <div className='languages-drop-down'>
                <select className='languages-selector' defaultValue='English' onChange={onChangeLanguage} >
                {languagesData.map(item => (
                    <option key={item.id}>{item.value}</option>
                ))}
                </select>
            </div>
        </>
    )
}

export default LanguageDropDown