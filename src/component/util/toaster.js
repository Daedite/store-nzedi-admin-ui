import {toast} from "react-toastify";

export default function Toaster(props) {
    const notification = () => toast(props.message);
}