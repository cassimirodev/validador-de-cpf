export function CpfStatus({ status }) {
    if (status == null) {
        return null
        
    }

    return (
        <div className={`alert ${status ? 'alert-success' : 'alert-danger'} mt-3`}>
           {status ? 'CPF Válido!' : 'CPF Inválido!'}
        </div>
    )

}