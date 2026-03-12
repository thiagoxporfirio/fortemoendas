import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Forte Moendas — Todos os direitos reservados</p>
        <p id="contato">Contato: contato@fortemoendas.com</p>
      </div>
    </footer>
  )
}
