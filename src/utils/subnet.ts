import { IPAddress } from '../types';

export const calculateSubnetMask = (cidr: number): string => {
  if (!Number.isFinite(cidr) || cidr <= 0) return '0.0.0.0';
  if (cidr >= 32) return '255.255.255.255';
  const mask32 = ((0xffffffff << (32 - cidr)) >>> 0);
  return [
    (mask32 >>> 24) & 255,
    (mask32 >>> 16) & 255,
    (mask32 >>> 8) & 255,
    mask32 & 255,
  ].join('.');
};

export const calculateNetworkID = (ip: IPAddress, cidr: number): IPAddress => {
  const ipParts = ip.split('.').map(Number);
  const mask = calculateSubnetMask(cidr).split('.').map(Number);
  const networkID = ipParts.map((part, index) => part & mask[index]);
  return networkID.join('.');
};

export const calculateBroadcastAddress = (ip: IPAddress, cidr: number): IPAddress => {
  const ipParts = ip.split('.').map(Number);
  const mask = calculateSubnetMask(cidr).split('.').map(Number);
  const broadcastAddress = ipParts.map((part, index) => part | (~mask[index] & 255));
  return broadcastAddress.join('.');
};

export const calculateValidHosts = (cidr: number): number => {
  if (!Number.isFinite(cidr) || cidr <= 0) return 0;
  return Math.max(0, Math.pow(2, 32 - cidr) - 2);
};