

const TaxesTab = () => {


  return (
    <>
    {/* Product options section---------------------------- */}
    <div className='w-100 card p-3'>
      <div className='w-100 d-flex justify-content-between'>
        <h4 className="fw-bold">Dettagli delle tasse</h4>
      </div>
        <p>Le tasse per tutti i tuoi prodotti sono calcolate automaticamente in base alla posizione geografica del cliente. Se per questo prodotto è previsto un aumento, una riduzione o un'esenzione fiscale, imposta per esso un'aliquota differente. L'aliquota sarà applicata solo a questo prodotto.</p>

        <p style={{fontWeight: "600"}}>Aliquota applicata: Aliquota standard 22%</p>
    </div>
    </>
  );
};

export default TaxesTab;
