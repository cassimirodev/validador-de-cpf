import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import { CpfStatus } from './components/CpfStatus';
import { validarCpf } from './utils/validarcpf';





function App() {
  const [cpf, setCpf] = useState('')
  const [status, setStatus] = useState(null) // o status começa como null 

  function handlechange(e) {
    const valorDigitado = e.target.value
    const cpfFormatado = formatarCpf(valorDigitado)
    setCpf(cpfFormatado)

    const cpfLimpo = cpfFormatado.replace(/\D/g, '')
    setStatus(validarCpf(cpfLimpo))
  }

  function formatarCpf(valor) {
    const numeros = valor.replace(/\D/g, '').slice(0, 11)
    return numeros
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  }
  

  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/src/assets/image-Photoroom.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block align-text-top"
            />
            <div className="d-flex gap-3 ms-3">
              <a className="nav-link" href="#">Sobre</a>
              <a className="nav-link" href="#">Contato</a>
            </div>
          </a>
        </div>
      </nav>

      <div className="container mt-5 mb-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h1 className="mb-4">Validador de CPF</h1>
            <div id="cpfHelp" className="form-text mt-1">Insira seu CPF no campo acima para validação.</div>
            <form action="enviarCpf">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputCpf"
                  value={cpf}
                  onChange={handlechange}
                  placeholder="Insira aqui seu CPF"
                />
              </div>
            </form>
            <div id="cpfStatus" className="alert mt-3">
              <CpfStatus status={status} />
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/src/assets/8598334-Photoroom.png"
              alt="Menina Sorrindo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <footer className="text-center text-lg-start" style={{ backgroundColor: '#212529' }}>
  <div className="container d-flex justify-content-center py-5">
    <a href="https://www.linkedin.com/in/luiseduardocassimiro" title="LinkedIn" className="btn btn-primary btn-lg mx-2" style={{ backgroundColor: '#0077b5' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
      </svg>
    </a>
    <a href="https://github.com/cassimirodev" title="GitHub" className="btn btn-dark btn-lg mx-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
      </svg>
    </a>
  </div>
  <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2025- 
    <a className="text-white" href="https://github.com/cassimirodev">cassimirodev</a>
  </div>
</footer>


     

    </>
  );
}

export default App;
  