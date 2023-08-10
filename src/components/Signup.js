
import React, { useState } from 'react';
import axios from 'axios';




export default function Signup() {

    const [image, setImage] = useState()
    const [allImg, setAllImg] = useState();

    const uploadImg = (e)=>{
        setImage(e.target.files[0])
    }






    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image)

        const url = "http://localhost:5000/upload-image"

        const responce = await axios.post(url, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })

        console.log(responce)
    }


    const getImages = async () => {

        const responce = await axios.get("http://localhost:5000/get-image/");
        setAllImg(responce.data.data)

        console.log(allImg)

    }


    return (
        <div className='my-3' >
            <h1>SignUp Form</h1>
            <form onSubmit={handleSubmit} method='post' encType="multipart/form-data" >
                <div className="mb-3">
                    <label htmlFor="myImg" className="form-label">Upload Profile Image</label>
                    <input className="form-control" type="file" accept='image/*' name='myFile' onChange={uploadImg} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>


            <button className="btn btn-success" onClick={getImages} >get</button>

            <div className="container d-flex gap-5">

                {
                    allImg?.map((element) => {
                        return <div className="card" style={{ width: "18rem" }} key={element._id} >
                                <img src={require(`../uploads/images/${element.image}`)} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{element.image}</p>
                                </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
