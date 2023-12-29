'use client'

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"
import React, { useEffect, useState } from "react";
import Image from 'next/image'



async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "Codes"))

    const data = []
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })

    });
    return data;
}



export default function Page() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setUserData(data)
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                {userData.map((user) => (
                    <div key={user.id} className='mb-4 text-gray-600' >
                        <p>{user.title}</p>
                        <p>{user.code}</p>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image
                            src={user.link}
                            alt="Picture of the author"
                            height={200}
                            width={550}
                            // className="object-cover object-center rounded"
                        /></div>
                    </div>
                ))}
            </div>
        </>


    );
};