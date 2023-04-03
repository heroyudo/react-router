import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";



const About = () => {
    return (
        <div>
            <Navbar />
            <div style={container}>
                <h1>About Page</h1>
                <p>
                    Jakarta - Kandungan pestisida dalam buah dan sayuran perlu dihindari karena jika dikonsumsi berlebihan dapat membahayakan kesehatan. Kenali daftar buah dan sayur tinggi pestisida.
                    Makanan mengandung pestisida berbahaya dikonsumsi. Pusat Pengendalian dan Pencegahan Penyakit (CDC) AS mengungkapkan, pestisida tertentu berkaitan erat dengan sejumlah masalah kesehatan, seperti keguguran, cacat lahir, dan cacat perkembangan anak.
                    Penelitian juga membuktikan pestisida terkait masalah pertumbuhan anak. Bahkan zat kimia ini juga bisa menjadi karsinogen atau pemicu bermutasinya sel sehat menjadi sel kanker saat diserap masuk ke sistem endokrin tubuh.
                    Baca artikel detikfood, "Hati-hati! Ini Daftar 12 Buah dan Sayuran yang Tinggi Kandungan Pestisida" selengkapnya https://food.detik.com/berita-boga/d-6653343/hati-hati-ini-daftar-12-buah-dan-sayuran-yang-tinggi-kandungan-pestisida.
                    Download Apps Detikcom Sekarang https://apps.detik.com/detik/
                </p>
            </div>
            <Footer />
        </div>
    )
}



export default About

const container = {
    padding: "0 6rem"
}