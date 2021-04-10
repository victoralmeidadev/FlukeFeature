import api from '../api';
import { RECORD_URL, PACK_INFO_URL, PURCHASE_URL } from '@env';
import { RecordData, PackageInformationData, PurchaseData } from '../hooks/types';

/**
 * @function purchaseService
 * @description Exibe a quantidade de Gigas e Minutos que o usuário do aplicativo consumiu numa faixa de tempo determinada
 **/
export const getRecordService = async (startDate: string, endDate: string): Promise<RecordData[] | null> => {
  const response = api
    .get(`${RECORD_URL}`, {
      params: {
        startDate,
        endDate,
      },
    })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.log({ error });
      return null;
    });
  return response;
};

/**
 * @function purchaseService
 * @description Exibe quantidade de Gigas e Minutos que o cliente tem contratado para um período específico em sua conta
 **/

export const getPackageInformationService = async (): Promise<PackageInformationData | null> => {
  const response = api
    .get(`${PACK_INFO_URL}`)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.log({ error });
      return null;
    });
  return response;
};

/**
 * @function purchaseService
 * @description Realiza contratação adicional de gigas e minutos
 **/

export const purchaseService = async (data: number, minutes: number): Promise<PurchaseData | null> => {
  const response = api
    .post(`${PURCHASE_URL}`, {
      data,
      minutes,
    })
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      console.log({ error });
      return null;
    });
  return response;
};
