import React from 'react';
import {useNavigate} from "react-router";

const BackBtn = () => {
    const navigate = useNavigate()
    return (
        <div>

            <button className="px-3 py-3 bg-gray-500 m-3 rounded-md font-semibold text-white "
                    onClick={() => navigate('/')}>back
            </button>
        </div>
    );
};

export default BackBtn;