import { useState } from 'react';
import { calculateSubnet } from '../utils/subnet';

const useSubnet = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [cidrPrefix, setCidrPrefix] = useState('');
  const [subnetInfo, setSubnetInfo] = useState(null);
  const [error, setError] = useState('');

  const calculate = () => {
    try {
      const result = calculateSubnet(ipAddress, cidrPrefix);
      setSubnetInfo(result);
      setError('');
    } catch (err) {
      setError(err.message);
      setSubnetInfo(null);
    }
  };

  return {
    ipAddress,
    setIpAddress,
    cidrPrefix,
    setCidrPrefix,
    subnetInfo,
    error,
    calculate,
  };
};

export default useSubnet;