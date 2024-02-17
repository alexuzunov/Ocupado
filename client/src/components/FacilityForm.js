import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from 'axios';
import '../assets/css/Register.css';
import { useAuth } from "../contexts/AuthContext";

const types = [
    "University",
    "Office Building",
    "Other"
];

const FacilityForm = () => {
    const navigate = useNavigate();

    const { currentData } = useAuth();
    const data = JSON.parse(currentData);

    const [name, setName] = useState("");
    const [type, setType] = useState("Hospital");

    const [floorList, setFloorList] = useState([]);

    const handleSelectChange = (e) => {
        setType(e.target.value);
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setFloorList([...floorList, floorList.length]);
    }

    const handleDelete = (e, index) => {
        e.preventDefault();
        setFloorList(floors => floors.map((floor, i) => i > index ? floor - 1 : floor));
        setFloorList(floors => floors.filter((floor, i) => i != index));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/facilities`, 
        {
            name: name,
            type: type,
            creator: data.id
        }, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.accessToken}`
            }
        });

        navigate("/");
    }  

    return (
        <div className='Register'>
            <div className="form-container">
                <div className="form-header">
                    <p>Create A Facility</p>
                </div>
                <div className="form-group">
                    <form>
                        <div className="form-input mb-3">
                            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-input mb-3">
                            <select class="form-select" onChange={handleSelectChange} aria-label="Default select example">
                                <option value="Hospital" selected>Hospital</option>
                                {types.map(type => {
                                    return <option value={type}>{type}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            {floorList.map(floor => {
                                return (
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for={`floor-${floor + 1}}`}>Floor {floor + 1}</label>
                                        <input type="file" class="form-control" id={`floor-${floor + 1}}`} />
                                        <button class="btn btn-danger" onClick={(e) => handleDelete(e, floor)}>X</button>
                                    </div>
                                )
                            })}
                            <button class="btn btn-primary btn-lg w-100" onClick={handleAdd}>Add Floor</button>
                        </div>
                    </form>
                </div>
                <div className="form-submit">
                    <button onClick={handleClick}>
                        Create Facility
                    </button>
                </div>
            </div>
        </div> 
    );
}

export default FacilityForm;