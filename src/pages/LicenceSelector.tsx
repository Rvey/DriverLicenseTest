import React from 'react';
import LicenceTypeCard from '../components/LicenceTypeCard';
import svg from '../logo.svg';

const LicenceType: React.VFC = () => {

  return (
    <div className="bg-gray-50 h-screen flex justify-center">
      <LicenceTypeCard licenceType="Car licence" imgSrc={svg} url="/carLicence" />
      <LicenceTypeCard licenceType="Truck licence" imgSrc={svg} url="/truckLicence" />
    </div>
  );
};

export default LicenceType;