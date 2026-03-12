import React from 'react'

const services = [
  {
    title: 'Consultoria técnica',
    desc: 'Análise de processos e otimização de moagem.'
  },
  { title: 'Manutenção', desc: 'Manutenção preventiva e corretiva de moendas.' },
  { title: 'Fornecimento de peças', desc: 'Peças originais e sob medida.' }
]

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="container">
        <h3>Serviços</h3>
        <div className="service-list">
          {services.map((s) => (
            <article key={s.title} className="service">
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
