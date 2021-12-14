import axios, { AxiosInstance } from "axios";
import { convertHexToString, convertStringToNumber } from "./bignumber";

const apiUrl = "https://b.hashsuite.link:22000/v1/";

export const pltGetAccountBalance =async (address: string): Promise<number> => {
    const url = `${apiUrl}/pltholderinfo`;

    const response = await axios.post(url, {
        Address: "0x2c4aad90f6e753ee68149a2e49987e44fb2e6f92"
    });

    console.log(response);
    const balance = convertStringToNumber(response.data.Amount);
    return balance;
}
