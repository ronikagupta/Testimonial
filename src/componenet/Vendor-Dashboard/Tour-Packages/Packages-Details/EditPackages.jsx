import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import axios from "axios";

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

const EditPackages = (params) => {
    console.log(params,"params");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [number, setNumber] = useState("");
	const [profile, setProfile] = useState("");
	const [rating, setRating] = useState("");
	const [price, setPrice] = useState("");
	const [facilities1, setFacilities1] = useState("");
	const [facilities2, setFacilities2] = useState("");
	const [facilities3, setFacilities3] = useState("");
	const [updatedData, setUpdatedData] = React.useState(false);

	useEffect(() => {}, [updatedData]);

	//  console.log(params.row.id,"params")
	let navigate = useNavigate();
	function handleClick() {
		navigate(-1);
	}
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
	const { id } = useParams();

	console.log("id", id);

	const Update = () => {
		let url = "https://62385c9800ed1dbc5ab1de67.mockapi.io/hotels/" + id;

		console.log("url", url);

		axios
			.put(url, {
				name: name,
				location: location,
				phone: number,
				avatar: profile,
				rating: rating,
				price: price,
			})
			.then((result) => {
				debugger;
				console.log("create", result);
				setName(name);
				setLocation(location);

				setNumber("");
				setProfile("");
				setRating("");
				setPrice("");
				swal("Hotel added successfully");
				setUpdatedData(true);
			});
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
                <div className="row" >
                <div className="col-sm-12" >
                    <div className="card " style={{marginTop:"5%",height:"100%"}} >
                        <div className="card-header d-flex" style={btnrt}>
                            <h5>Edit Packages </h5>
                            <div style={{marginLeft:"50%"}}>
                                <NavLink to="/GuestList">
                                    <button
                                        type="button"
                                        class="backBtn"
                                        onClick={handleClick}
                                    >
                                        back
                                    </button>
                                </NavLink>
                            </div>
                    
                        </div>
                        <div className="row" style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
                            <div class="mb-3 col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                Country :
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Location"
                                />
                            </div>
                            <div class="mb-3  col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Price :
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="$"
                                />
                            </div>
                            <div class="mb-3  col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Package :
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="package"
                                />
                            </div>
                            <div class="mb-3  col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Hotel Profile :
                                </label>
                                <input
                                    type="file"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Profile"
                                />
                            </div>
                            <div class="mb-3  col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Agent Contact No :
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="+91********"
                                />
                            </div>
                            <div class="mb-3  col-md-5 formFields">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Agent Email Address :
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="info@gmail.com"
                                />
                            </div>
                         
                        <div class="">
                        <div
                        className=" col-md-5 list-group"
                        style={{ marginLeft: "8%" }}
                    >
                        <label
                            for="floatingSelectGrid"
                            className="form-label"
                            style={{
                                display: "flex",
                                justifyContent: "left",
                                marginLeft: "2%",
                            }}
                        >
                            {" "}
                            Inclusions:
                        </label>
                        <div className=" col-md- list-check chechbox shadow-lg p-3 mb-5 bg-body rounded">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="flexCheckIndeterminate"
                                
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                3 Nights stay at Dubai
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    
                                    id="flexCheckDisabled"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                Daily Breakfast
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                  
                                    id="flexCheckDisabled"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                Dubai airport- Hotel – Airport on Private basis
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                   
                                    id="flexCheckDisabled"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                Half day city tour Dubai and Night Safari tour
                                </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                   
                                    id="flexCheckDisabled"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                Garden by the bay admission ticket
                                </label>
                            </div>
                        </div>
                    </div>
                        </div>
                        </div>
              
                     
                        
                        <div >
                        <button type="button" class="update-btn" >
                            Update
                        </button>
                    </div>
                    </div>
            
                    <div className="card-body text-center"></div>
                </div>
            </div>
				</div>
			</div>
		</>
	);
};

export default EditPackages;
