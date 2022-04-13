import React from 'react';
import LicenceTypeCard from '../components/LicenceTypeCard';
import svg from '../logo.svg';

const LicenceType: React.VFC = () => {

    return (
        <div className="flex justify-center flex-col h-screen">

            <div className="flex justify-center items-center" >
                <LicenceTypeCard licenceType="Test Car licence" imgSrc={svg} url="/carLicence"/>
                <LicenceTypeCard licenceType="Test Truck licence" imgSrc={svg} url="/truckLicence"/>
                <LicenceTypeCard licenceType="adminLogin" imgSrc={svg} url="/login"/>
            </div>
        </div>
    );
};

export default LicenceType;
