import React from 'react';
import LicenceTypeCard from '../components/LicenceTypeCard';
import svg from '../logo.svg';

const LicenceType: React.VFC = () => {

    return (
        <div className="flex justify-center flex-col">

            <div className="flex">
                <LicenceTypeCard licenceType="Car licence" imgSrc={svg} url="/carLicence"/>
                <LicenceTypeCard licenceType="Truck licence" imgSrc={svg} url="/truckLicence"/>
                <LicenceTypeCard licenceType="adminLogin" imgSrc={svg} url="/login"/>
            </div>
        </div>
    );
};

export default LicenceType;
