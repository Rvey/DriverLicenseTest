import React from 'react';
import LicenceTypeCard from '../components/LicenceTypeCard';
import svg from '../logo.svg';

const LicenceType: React.VFC = () => {

    return (
        <div className="flex justify-center flex-col h-screen bg-cover bg-[url(https://wallpaperaccess.com/full/6712593.jpg)]">
            <h1 className="text-center text-gray-700 text-4xl font-bold mb-[5em] bg-gray-50 py-4 bg-opacity-60">My Permis</h1>
            <div className="flex justify-center items-center" >
                <LicenceTypeCard licenceType="Permis de voiture" imgSrc="https://img.icons8.com/ios-glyphs/90/000000/car--v1.png" url="/carLicence"/>
                <LicenceTypeCard licenceType="Permis de camion" imgSrc="https://img.icons8.com/ios-filled/100/000000/truck.png" url="/truckLicence"/>
                <LicenceTypeCard licenceType="admin dashboard" imgSrc="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-admin-engineering-itim2101-lineal-itim2101.png" url="/login"/>
            </div>
        </div>
    );
};

export default LicenceType;

