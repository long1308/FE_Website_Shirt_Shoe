import { Dispatch } from "redux";
import { Address, User } from "../../interface/user/user";
import { AddressActionTypes } from "../../interface/address";
import addressService from "../../api/address/addressService";
import userService from "../../api/user/user";
const saveLoginInfoToLocalStorage = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("accessToken", data.accessToken!);
};
export const addAddress = (address: Address) => async (dispatch: Dispatch<AddressActionTypes>) => {
    try {
        await addressService.addAddress(address)
        dispatch({
            type: "ADD_ADDRESS",
            payload: address,
        });
    } catch (error: any) {
        dispatch({
            type: "ADDRESS_ONE_FAIL",
            payload: error.message,
        });
    }
}
export const updateAddress = (address: Address, idAddress: string) => async (dispatch: Dispatch<AddressActionTypes>) => {
    try {
        await addressService.updateAddress(address, idAddress)
        const user = await userService.getOneUser(address.customerId!);
        saveLoginInfoToLocalStorage(user);
        dispatch({
            type: "UPDATE_ADDRESS",
            payload: address,
        });
    } catch (error: any) {
        dispatch({
            type: "ADDRESS_ONE_FAIL",
            payload: error.message,
        });
    }
}
export const deleteAddress = (id: string) => async (dispatch: Dispatch<AddressActionTypes>) => {
    try {
        await addressService.deleteAddress(id)
        dispatch({
            type: "DELETE_ADDRESS",
            payload: id,
        });
    } catch (error: any) {
        dispatch({
            type: "ADDRESS_ONE_FAIL",
            payload: error.message,
        });
    }
}
// export const getOneAddress = (id: string) => async (dispatch: Dispatch<AddressActionTypes>) => {
//     try {
//         dispatch({
//             type: "ADDRESS_ONE_REQUEST",
//         });
//         const address = await addressService.getOneAddress(id);
//         dispatch({
//             type: "ADDRESS_ONE_SUCCESS",
//             payload: address,
//         });
//     } catch (error: any) {
//         dispatch({
//             type: "ADDRESS_ONE_FAIL",
//             payload: error.message,
//         });
//     }
// }
// export const getAllAddress = () => async (dispatch: Dispatch<AddressActionTypes>) => {
//     try {
//         dispatch({
//             type: "ADDRESS_LIST_REQUEST",
//         });
//         const address = await addressService.getAllAddress();
//         dispatch({
//             type: "ADDRESS_LIST_SUCCESS",
//             payload: address,
//         });
//     } catch (error: any) {
//         dispatch({
//             type: "ADDRESS_LIST_FAIL",
//             payload: error.message,
//         });
//     }
// }
