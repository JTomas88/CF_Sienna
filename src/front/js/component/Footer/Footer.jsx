import React, { useContext, useEffect } from "react";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ModalProteccionDatos } from "./ModalProteccionDatos";
import { ModalUsoCookies } from "./ModalUsoCookies";

export const Footer = () => {
    return (
        <div className="footer-content bg-body-tertiary">
        <div className="container">
            <div className="row text-center justify-content-center mb-3 mt-4">
                <div className="col-1">
                    <a href="http://instagram.com" target="_blank">
                        <FaInstagram fontSize={"30"} />
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://x.com" target="_blank">
                        <RiTwitterXLine fontSize={"30"} />
                    </a>
                </div>
                <div className="col-1">
                    <a href="https://tiktok.com" target="_blank">
                        <BsTiktok fontSize={"30"} />
                    </a>
                </div>
            </div>
    
            <div className="row text-center">
                <div className="col">
                    <a data-bs-toggle="modal" data-bs-target="#modalProteccionDatos" style={{ color: 'black' }}>
                        Protección de datos
                    </a>
                    <div className="modal fade" id="modalProteccionDatos" tabIndex="-1" aria-labelledby="modalProteccionDatosLabel" aria-hidden="true" >
                        <ModalProteccionDatos />
                    </div>
                </div>
            </div>
    
            <div className="row text-center">
                <div className="col">
                    <a data-bs-toggle="modal" data-bs-target="#modalUsoCookies" style={{ color: 'black' }}>
                        Uso de cookies
                    </a>
                    <div className="modal fade" id="modalUsoCookies" tabIndex="-1" aria-labelledby="modalUsoCookiesLabel" aria-hidden="true">
                        <ModalUsoCookies />
                    </div>
                </div>
            </div>
    
            <div className="row text-center">
                <div className="col mt-3" style={{ color: 'black' }}>
                    Designed by Tom © 2024
                </div>
            </div>
        </div>
    </div>
    
    )

}
