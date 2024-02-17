import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from 'axios';
import '../assets/css/Register.css';
import { useAuth } from "../contexts/AuthContext";

const types = [
    "University",
    "Office Building",
    "Other"
];

const MyFacilities = () => {
    const [facilities, setFacilities] = useState([]);

    const { currentData } = useAuth();
    const data = JSON.parse(currentData);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${data.id}/facilities`, 
        {}, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.accessToken}`
            }
        }).then(result => {
            setFacilities(result);
        });
    });

    return (
        <>
            {facilities.map(facility => {
                return (
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{facility.name}</h5>
                            <p class="card-text">{facility.type} with {facility.floors.length} floors</p>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default MyFacilities;