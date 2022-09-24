import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginRepo = (username, password, url) => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);


    const fetchLogin = async () => {
        try {
            const postData = axios.post(url, {
                username: username,
                password: password
            })
            setData(postData.data)
        } catch (err) {
            console.log(err)
        }
        setLoading(true);

    }

    fetchLogin();


    return { data, loading };

};

export default LoginRepo;