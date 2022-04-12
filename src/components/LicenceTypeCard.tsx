import React from 'react';
import {useNavigate} from "react-router";

interface Props {
    licenceType : string,
    imgSrc: any,
    url: string
}


const LicenceTypeCard : React.FC<Props> = ( { licenceType , imgSrc , url } ) => {
const navigate = useNavigate()

    return (
        <div>
            <div
                className="bg-white shadow-lg rounded-2xl h-80 w-72 m-10 hover:shadow-xl cursor-pointer"
                onClick={() => navigate(url)}
            >
                <div className="flex justify-center pt-12">
                    <img
                        src={imgSrc}
                        alt=""
                        width="180"
                        height="180"
                    />
                </div>
                <h2 className="text-gray-800 font-sans font-medium text-xl pt-8 text-center">
                    {licenceType}
                </h2>
            </div>
        </div>
    );
};

export default LicenceTypeCard;