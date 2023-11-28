import { Tooltip,Button } from "antd";
import { DeleteOutlined } from '@ant-design/icons'
import { deleteApartment } from "../../Services/api";
import Swal from "sweetalert2";
function DeleteApartment({item, onReload}){
    const handleDelete = async () => {
        const response = await deleteApartment(item.id);
            Swal.fire({
                icon: 'success',
                title: 'Delete Success!',
                showConfirmButton: false,
                timer: 1500
              })
            onReload();
    }
    return(
        <>
            <Tooltip title='Delete'>
            <Button className="ml-10" danger ghost icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
        </>
    )
}
export default DeleteApartment;