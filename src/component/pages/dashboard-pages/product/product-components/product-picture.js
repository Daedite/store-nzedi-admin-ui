import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import {toast} from "react-toastify";

export default function ProductPicture(props){
    const ESHOP_API_PRODUCT_MEDIA = process.env.REACT_APP_ESHOP_API_BASE_URL + "product-media/product/"
    const [medias, setMedias] = useState(image)
    const [selectedMedias, setSelectedMedias] = useState("")
    const [selectedMediaId, setSelectedMediaId] = useState("")
    const [modalShow, setModalShow] = React.useState(false);
    const [canDelete,setCanDelete] = useState(true)

    const navigate = useNavigate();
    const productId = props.productId

    const canDeleteChecker = (canDelete) => {
        setCanDelete(canDelete)
    }

    useEffect(() => {
        // if (productId==='') navigate("/home/product")

        axios.get(ESHOP_API_PRODUCT_MEDIA+productId,{
            // headers: {
            // 'Access-Control-Allow-Origin':'*',
            // }
        }).then((data) => {
            console.log(data?.data);
            setMedias(data?.data);
            if (data.data.length > 1){
                setCanDelete(true)
            }else{
                setCanDelete(false)
            }
        })
            // .catch((error) => navigate("/home/product"));
    },[productId])

    const handleModel = (image,imageId) => {
        setModalShow(true)
        setSelectedMedias(image)
        setSelectedMediaId(imageId)
    }
    return(
        <>
            {medias.map( media =>
                <Card className="m-2" key={media.id}>
                <Image className="m-4 " key={media.id+"c"} src={"data:image/png;base64,"+media.image} width="90%" onClick={() => handleModel(media.image,media.id)}></Image>
                </Card>
            )}
            <DeletePicture  src={selectedMedias} candelete={canDelete.toString()} imageid={selectedMediaId} show={modalShow} onHide={() => setModalShow(false)}
            />
        </>
    )
}
//when deleting a picture we should also delete product media!!!
function DeletePicture(props) {
    let canDelete = (props.candelete === 'true')

    let deleteMediaUrl = process.env.REACT_APP_ESHOP_API_BASE_URL+"media/remove/"
    const handleDelete = (event) => {
        event.preventDefault()
        if(canDelete){
            toast.promise(
                axios.get(deleteMediaUrl+props.imageid),
                {
                    pending: 'loading ...',
                    error: {
                        render({data}) {
                            return data.message
                        }
                    }
                }).then((productResponse) => {
                window.location.reload()
            })
        }

    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter">
                    Delete picture.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image className="m-4 " src={"data:image/png;base64,"+props.src} width="90%"></Image>
                <Row>
                    {canDelete ?
                    <Button variant="warning" className="text-center" onClick={handleDelete} >
                        Delete
                    </Button> :
                        <Button variant="warning" className="text-center" onClick={handleDelete} disabled title="You are not allowed to delete the last image">
                            Delete
                        </Button>
                    }
                </Row>
            </Modal.Body>

        </Modal>
    );
}

const image = [
    {  id:"1",
        image: "https://media.istockphoto.com/id/477151294/photo/smile-girl-at-beach.jpg?s=1024x1024&w=is&k=20&c=5SNrc56tXFIeSN0Avumm4zuqfK4kBXaDPHULuPuuUAo=",
    description:"placeHolder"},
    ]
