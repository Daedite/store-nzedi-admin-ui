import {useParams, useSearchParams} from "react-router-dom";

export default function ViewVideoDetail() {
    let videoId = useParams()
    console.log(videoId)

}