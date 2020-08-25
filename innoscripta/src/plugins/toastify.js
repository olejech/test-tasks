import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export default toast.configure({
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})
