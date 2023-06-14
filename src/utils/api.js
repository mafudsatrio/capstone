import axios from '../helper/axios';

export const postTransaksi = async (data) => axios.post('/transaksi', data);

export const postFeedback = async (data) => axios.post('/feedback', data);

export const createPDF = async (id) => axios.get(`/transaksi/pdf/${id}`);
