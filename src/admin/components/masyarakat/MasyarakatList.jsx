import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import axios from "axios";
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useState ,useEffect } from "react";
import Header from "../Header";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import{ Helmet }from "react-helmet"
import { useTheme } from "@mui/material";


const MasyarakatList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [masyarakats, setMasyarakats] = useState([]);
  const [block, setBlock] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getMasyarakats();
  }, []);

  const getMasyarakats = async () => {
    const dataasyarakatsArray = []
    const response = await axios.get("http://localhost:5000/masyarakats");
    await response.data?.map(val => {
      val.id = val.id
      dataasyarakatsArray.push(val)
    })
    setMasyarakats(dataasyarakatsArray);
  };
  const handleButtonBlock =  (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Are You sure To UnBlock This User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.patch(`http://localhost:5000/masyarakatblock/${id}`);
        swal("Poof! Your User  has been Blocked!", {
          icon: "success",
        });
        navigate(0); 
      } else {
        swal("Your User  is safe!");
      }
    });
  };
  const handleUnblock =  (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Are You sure To UnBlock This User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.patch(`http://localhost:5000/unblock/${id}`);
        swal("Poof! Your User  has been UnBlocked!", {
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
      field: "nik",
      headerName: "Nik",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nama",
      headerName: "Nama",
      
      flex: 1,
    },
    {
      field: "jk",
      headerName: "Jenis Kelamin",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "no_hp",
      headerName: "No Hp",
      flex: 1,
    },
    {
      field: "alamat",
      headerName: "Alamat",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Tanggal Join",
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
      renderCell: (cellValues) => {
        return (
          <div>
            {cellValues?.row?.status === true && ( 
          <Button
          color="primary"
          onClick={() => handleButtonBlock(cellValues.row.uuid)}>
            <PersonOffIcon/>
          </Button>   
           )}
          {cellValues?.row?.status === false && ( 
            <Button
            color="primary"
            onClick={() => handleUnblock(cellValues.row.uuid)}>
              <PersonIcon/>
            </Button>  
           )}
          </div>
        )
      }
    }
    
  ];

  return (
    <>
     <Helmet>
        <title>Masyarakat List</title>
      </Helmet>
    <Box m="20px">
      <Header
        title="Masyarakat"
        subtitle="List of Masyarakat for Future Reference"
      />
      {/* <a href="/masyarakat/add" className="button is-success">add Masyarakat</a> */}
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
          rows={masyarakats}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    </>
  );
};

export default MasyarakatList;
