import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Encriptador = () => {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const encriptar = () => {
    let textoEncriptado = texto
      .toLowerCase()
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    setResultado(textoEncriptado);
  };

  const desencriptar = () => {
    let textoDesencriptado = texto
      .toLowerCase()
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    setResultado(textoDesencriptado);
  };

  const copiar = () => {
    navigator.clipboard.writeText(resultado)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  };

  return (
    <div className="container-fluid ">
      {/* Header */}
      <header className="header">
      <img src={`${process.env.PUBLIC_URL}/descarga.png`} alt="Imagen" className="logo" />
      <h3>Alura latam</h3>
      </header>

      {/* Contenedor Principal */}
      <div className="container encriptador-container">
        <div className="row">
          {/* Área de entrada de texto */}
          <div className="col-md-8 col-12 text-container">
            <textarea
              className="form-control text-input"
              placeholder="Ingrese el texto aquí"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              style={{background:'transparent', border:'none'}}
            ></textarea>
            <p className="text-muted small mt-2">🔹 Solo letras minúsculas y sin acentos</p>

            {/* Botones */}
            <div className="button-group">
              <button className="btn btn-primary encriptar-btn" onClick={encriptar}>
                Encriptar
              </button>
              <button className="btn btn-outline-primary desencriptar-btn" onClick={desencriptar}>
                Desencriptar
              </button>
            </div>
          </div>

          {/* Panel Lateral */}
          <div className="col-md-4 col-12 resultado-box ">
            <div className="resultado-box">
              <img src={`${process.env.PUBLIC_URL}/muñeco.png`} alt="Ilustración" className="img-fluid" />
              {/* Condición para el mensaje dinámico */}
              <p className="mensaje">
                {texto ? "Texto encontrado" : "🔍 Ningún mensaje fue encontrado"}
              </p>
              <span className="text-muted">Ingresa el texto que desees encriptar o desencriptar.</span>
              <textarea 
                className="form-control resultado-text" 
                style={{background:'transparent',border:'none'}} 
                readOnly 
                value={resultado}>
              </textarea>
              <div className="d-flex justify-content-center">
                <a className="btn btn-primary mt-10 copy-btn" onClick={copiar}>Copiar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Encriptador;
