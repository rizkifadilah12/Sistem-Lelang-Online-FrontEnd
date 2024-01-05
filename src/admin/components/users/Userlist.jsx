import axios from "axios";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Button from '@mui/material/Button';
import { useState ,useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../Header";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LockIcon from '@mui/icons-material/Lock';

const Userlist = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const dataUsersArray = []
    const response = await axios.get("http://localhost:5000/users");
    await response.data?.map(val => {
      val.id = val.id
      dataUsersArray.push(val)
    })
    setUsers(dataUsersArray);
  };
  const handleButtonBlock =  (id) => {
    swal({
      title: "Are you sure?",
      text: "Are You sure To Block This User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.patch(`http://localhost:5000/users/block/${id}`);
        swal("Poof! Your User  has been Blocked!", {
          icon: "success",
        });
        navigate(0); 
      } else {
        swal("Your User  is safe!");
      }
    });
  };
  const handleButtonUnBlock =  (id) => {
    swal({
      title: "Are you sure?",
      text: "Are You sure To UnBlock This User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.patch(`http://localhost:5000/users/unblock/${id}`);
        swal("Poof! Your User  has been UnBlocked!", {
          icon: "success",
        });
        navigate(0); 
      } else {
        swal("Your User  is safe!");
      }
    });
  };
  const handleButtonDelete =  (id) => {
    swal({
      title: "Are you sure?",
      text: "Are You sure To Delete This User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5000/users/${id}`);
        swal("Poof! Your User  has been Deleted!", {
          icon: "success",
        });
        navigate(0); 
      } else {
        swal("Your User  is safe!");
      }
    });
  };
  const columns = [
    {
      field: "nip",
      headerName: "NIP",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Nama",
      
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell:(cellValues) => {
        return(
          <div>
          {cellValues?.row?.status === true && ( 
            <p>Actif</p>
           )}
          {cellValues?.row?.status === false && ( 
            <p>Non Aktif</p>
           )}
          </div>
        )
      }
    },{
      field: "Action",
      flex: 1,
      renderCell: (cellValues) => {
        return (
         <div>
           {cellValues?.row?.status === true && (  
            <div>
          <Button
          color="primary"
          onClick={() => handleButtonBlock(cellValues.row.id)}>
            <PersonOffIcon/>
          </Button>
          <Link
          to={`/backend/users/edit/${cellValues.row.uuid}`}
                >
                  <ModeEditIcon/>
                </Link>
          <Link
          to={`/backend/userpass/${cellValues.row.uuid}`}
                >
                  <LockIcon/>
                </Link>
          <Button
          color="primary"
          onClick={() => handleButtonDelete(cellValues.row.uuid)}>
            <DeleteIcon/>
          </Button>
          </div>
           )}

           {cellValues?.row?.status === false && (
            <div>
          <Button
          color="primary"
          onClick={() => handleButtonUnBlock(cellValues.row.id)}>
            <PersonIcon/>
          </Button>
          </div>
           )}
          
          </div>
        )
      }
    }
    
  ];

  return (
    <>
    <Helmet>
        <title>Users List</title>
      </Helmet>
    <Box m="20px">
      <Header
        title="Users"
        subtitle="List of Users for Future Reference"
      />
      <a href="/backend/users/add" className="button is-success"><AddIcon/></a>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    </>
  );
};

export default Userlist;
