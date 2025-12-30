import axios from "axios";

export const loginuser = async (email, password) => {
    const url = "http://127.0.0.1:8088/user/login";

    const body = {
        email: email,
        pass: password   // ✅ MUST be `pass`
    };

    const response = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.data;
};

export const Registeruser = async (name, email, password, mobile_no) => {
    const url = "http://127.0.0.1:8088/user";
    const body = {
        name: name,
        email: email,
        pass: password,
        mobile_no: mobile_no
    };

    const response = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.data;

};
