import {Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function ProductPicture(props){
    const ESHOP_API_PRODUCT_MEDIA = process.env.REACT_APP_ESHOP_API_BASE_URL + "product-media/product/"
    const [medias, setMedias] = useState(image)
    const navigate = useNavigate();
    const productId = props.productId
    console.log(props.productId)


    useEffect(() => {
        console.log(productId)
        // if (productId==='') navigate("/home/product")

        axios.get(ESHOP_API_PRODUCT_MEDIA+productId,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            console.log(data?.data);
            setMedias(data?.data);
        })
            // .catch((error) => navigate("/home/product"));
    },[productId])

    return(
        <>
            {medias.map( media =>
                <Image className="m-4" key={media.id} src={"data:image/png;base64,"+media.image} width="90%"></Image>
            )}

        </>
    )
}

const image = [
    {  id:"1",
        image: "https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?s=1024x1024&w=is&k=20&c=5SNrc56tXFIeSN0Avumm4zuqfK4kBXaDPHULuPuuUAo=",
    description:"placeHolder"},
    ]
