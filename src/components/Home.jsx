import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { AppsContext } from "../AppsContext";
export default function Home() {

    const [totalShow, setTotalShow] = useState(8);
    const { apps } = useContext(AppsContext);
    return (
        <>

        </>
    );
}
