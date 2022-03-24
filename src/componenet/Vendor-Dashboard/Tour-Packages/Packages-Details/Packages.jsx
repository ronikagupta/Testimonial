import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import  DataGrid  from "../../../DataGrid/DataGrid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import packagesData from "./PackagesData";
import pack from "@fortawesome/fontawesome-free-solid";



const btnrt = {
	justifyContent: "space-between",
};

const Top = {
	paddingTop: "10px",
};

const trash = {
	paddingLeft: "10px",
	fontSize: "20px",
	color: "red",
};

const edit = {
	paddingLeft: "10px",
	fontSize: "20px",
	color: "blue",
};
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
const Packages = () => {
	const columns = [
		{ field: "id", headerName: "ID", width: 130 },
		{ field: "country", headerName: "Country", width: 130 },
        { field: "price", headerName: "Price ", width: 130, },

	
	
		{
			field: "package",
			headerName: "Package",
			width: 130,
			height: "200",
		
		},
		{ field: "hotelProfile", headerName: "Hotel Profile", width: 180 , renderCell: (params) => (
			<img src="https://modvilla.in/flutter/static/media/offer-1.afa30c92f2d0630452af.jpg"></img>
                    ),},
		{ field: "agentNo", headerName: "Agent Contact No", width: 180 },
        { field: "agentEmail", headerName: "Agent Email Address", width: 180, },
        { field: "inclusions", headerName: "Inclusions", width: 180,  },

	




		
		
		{
			field: "Action",
			headerName: "Action",
			width: 130,
			renderCell: (params) => (
				<div>
                    <Link to="/EditPackages">
                    <EditIcon/>

                    </Link>
				
				
				<DeleteIcon onClick={()=>Delete(params.row.id)} />

				</div>
			),
		}
		
	];
	const [open, setOpen] = React.useState(false);
	const handleOpen1 = () => setOpen(true);
	const handleClose = () => setOpen(false);
    const [data, setData] = useState(packagesData);
    console.log(packagesData,"pppppppppppppppppppppppppppp")

	// Delete section starts
	const Delete = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Delete", "Your file has been deleted!", {
					icon: "success",
				});
			} else {
				swal("Safe!", "You clicked the button!", "success");
			}
		});
	};
	// Delete section End

	// Update Section start
	const Update = () => {
		swal("UPDATE!", "You clicked the button!", "success");
	};
	// Update Section start

	// Save Section Start
	const Save = () => {
		swal("Save!", "You clicked the button!", "success");
	};

	// Save Section End
	return (
		<>
	
			<div className="page-body">
				<div className="container-fluid"></div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" style={Top}>
							<div className="card">
								<div className="card-header d-flex" style={btnrt}>
									<h5>All Packages </h5>
								    <NavLink to="/AddPackages">
                            
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-original-title="test"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Packages
                                </button>
                            </NavLink>
								</div>

								<div className="card-body text-center">
								<DataGrid data={data} columns={columns} />
									
									{/* EditModal section start */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Packages;
