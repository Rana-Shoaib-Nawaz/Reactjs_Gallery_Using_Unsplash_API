import React,{useState} from 'react'
import axios from 'axios'
export default function Search() {
    const [photo, setPhoto] = useState("")
    const [result, setResult] = useState([])
    const changePhoto = () => {
        axios.get(`https://api.unsplash.com/search/photos?per_page=28&query=${photo}&client_id=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {
                setResult(response.data.results);
            })
    }
    return (
        <>
            <center>
                <h1>Find Images</h1>
                <div className='box'>
                    <input type="text" className='form-control' placeholder='Enter For Search' value={photo} onChange={(e) => {
                        setPhoto(e.target.value)
                    }} />
                    <button type='submit' onClick={changePhoto} className='btn btn-success my-2'>Search</button>
                </div>
            </center>
            <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />
                            </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
