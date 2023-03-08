import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Toaster(notificationType,message) {
    switch(notificationType) {
        case 'info':
            return toast.info(message);
        case 'warn':
            return toast.warn(message);
        case 'error':
            return toast.error(message);
        default : toast(message)
    }
}