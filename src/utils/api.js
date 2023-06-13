import axios from "../helper/axios.js";

export const postTransaksi = async (data) => {
    return await axios.post("/transaksi", data)
}

export const createPDF = async (id) => {
    return await axios.get(`/transaksi/pdf/${id}`)
}