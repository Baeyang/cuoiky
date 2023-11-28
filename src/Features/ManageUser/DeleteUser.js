import { Button, Tooltip } from "antd";
import {DeleteOutlined} from '@ant-design/icons'
import { deleteUser } from "../../Services/api";
import Swal from "sweetalert2";
function DeleteUser({item, onReload}){
    console.log(item.id)
    const handleDelete = async () => {
        const response = await deleteUser(item.id);
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
                <Button className="ml-10" danger ghost icon={<DeleteOutlined></DeleteOutlined>} onClick={handleDelete}></Button>
            </Tooltip>
        </>
    )
}
export default DeleteUser;
