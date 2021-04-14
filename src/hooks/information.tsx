import React, { useEffect, useState, useCallback, createContext, useContext } from 'react';

import { getPackageInformationService, getRecordService, purchaseService } from '../services/informationService';
import { RecordData, PackageInformationData } from './types';

const InformationContext = createContext({});

interface IInformationContext {
  record: RecordData[];
  getRecords(startDate: string, endDate: string): RecordData[];
  packageInformation: PackageInformationData;
  getPackageInformation(): void;
  handleTopupPurchase(data: number, minutes: number): boolean;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [record, setRecord] = useState<RecordData[] | null>(null);
  const [packageInformation, setPackageInformation] = useState<PackageInformationData | null>(null);

  const getRecords = useCallback(async (startDate: string, endDate: string) => {
    const result = await getRecordService(startDate, endDate);
    if (result !== null) {
      setRecord(result);
      return result;
    } else {
      getRecords(startDate, endDate);
    }
  }, []);

  const getPackageInformation = useCallback(async () => {
    const result = await getPackageInformationService();
    result ? setPackageInformation(result) : getPackageInformation();
  }, []);

  const handleTopupPurchase = useCallback(async (data: number, minutes: number) => {
    const result = await purchaseService(data, minutes);
    if (result !== null) {
      await getPackageInformation();
      return true;
    }
    return false;
  }, []);

  return (
    <InformationContext.Provider
      value={{
        record,
        getRecords,
        packageInformation,
        getPackageInformation,
        handleTopupPurchase,
      }}>
      {children}
    </InformationContext.Provider>
  );
};

export const useInformation = (): IInformationContext => {
  const context = useContext(InformationContext);
  return context as IInformationContext;
};

export default AuthProvider;
