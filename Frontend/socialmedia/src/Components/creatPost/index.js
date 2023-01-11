import React, { useState, useEffect } from 'react'
import "./creatPost.css"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
const CreatPost = () => {

    const naviaget = useNavigate()
    
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")


    // Tost function
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg)


    useEffect(() => {
        if (url) {
            //  saving post mongodb
            fetch("http://localhost:5000/createPost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    body: body,
                    pic: url
                })
            })
                .then(res => res.json())
                .then(data => { if (data.error){
                    console.log(error.data)
                    notifyA("Please all the fields")
                }else{
                    notifyB("Successfully Posted")
                    naviaget('/')
                }
            }).catch(error => console.log(error))
        }

    }, [url])


    // posting image to cloudnery
    const postDetails = async () => {
        console.log(body, image)
        const data = new FormData();
        data.append("file", image)
        data.append("upload_preset", "social-media")
        data.append("cloud_name", "socialapp")
        const res = await fetch("https://api.cloudinary.com/v1_1/socialapp/image/upload", {
            method: "post",
            body: data
        })
        const datas = await res.json()
        setUrl(datas.url)
    }

    // const postDetails = ()=>{
    //     console.log(body,Image)
    //     const data = new FormData()
    //     data.append = ("file",image)
    //     data.append = ("upload_preset","social-media")
    //     data.append = ("cloud_name" , "socialapp")
    //     fetch("https://api.cloudinary.com/v1_1/socialapp/image/upload",{
    //         method:"post",
    //         body:data
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))        
    //     setUrl(url)
    //     .catch(err=>console.log(err))     
        
        
    // }
    


    const loadfile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)
        }
    }
    return (


        <div className='creatPost'>
            {/* header */}
            <div className='post-header'>
                <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                <button id="post-btn" onClick={() => postDetails()}>Post</button>
            </div>
            {/* image preview */}
            <div className='main-div'>
                <img id="output" src="https://cdn-icons-png.flaticon.com/512/4211/4211763.png" />
                <input type="file" accept="image/*"  onChange={(event) => {
                    loadfile(event)
                    setImage(event.target.files[0])
                }} />
            </div>
            {/* details */}
            <div className='details'>
                <div className='card-header'>
                    <div className='card-pic'>
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <h5>César Rincón</h5>
                </div>
                <textarea value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} type="text" placeholder='write a caption'></textarea>
            </div>
        </div>
    )
}

export default CreatPost