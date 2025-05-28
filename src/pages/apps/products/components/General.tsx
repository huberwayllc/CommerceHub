import { GoPlus } from "react-icons/go";


const GeneralTab = () => {
  return (

    <div className="d-flex align-items-start gap-3" style={{ alignItems: "stretch" }}>
        <div style={{width: "70%"}} className=" card p-3">
          <div className="w-100 d-flex align-items-center justify-content-between">
            <h6 className="fw-bold">Galleria prodotti</h6>
            <h6 style={{color: "#2563EB"}} className="fw-semibold">Aggiungi Video</h6>
          </div>
            <div className="d-flex align-items-center gap-2">
            <div className="position-relative card shadow-none mb-0 p-2" style={{
              width: "130px",
              height: "130px",
              cursor: "pointer",
              backgroundColor: "#f0f0f0"
            }}>
              <div style={{
                position: "absolute",
                top: "37%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}>
                <GoPlus style={{fontSize: "50px"}}/>
              </div>
              <p className="text-center text-black fw-semibold position-absolute" style={{
                fontSize: "10px",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)"
              }}>
                Carica immagine
              </p>
            </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#f0f0f0"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#f0f0f0"}}>

              </div>
              <div className="card shadow-none mb-0 p-2" style={{width: "130px", height: "130px", backgroundColor: "#f0f0f0"}}>

              </div>
            </div>
        </div>


        <div style={{ width: "30%" }} className="card p-3 h-100">
          <h4 className="fw-semibold">Prezzi</h4>

          <div className="mt-0" style={{ backgroundColor: "#f0f0f0", height: "55px" }}>
            <div
              className="d-flex align-items-center border border-secondary rounded"
              style={{ overflow: "hidden",  backgroundColor: "#f0f0f0" }}
            >
              <input
                type="number"
                className="form-control border-0 rounded-0"
                placeholder="0.00"
                style={{
                  boxShadow: "none",
                  outline: "none",
                   backgroundColor: "#f0f0f0",
                   height: "55px",
                }}
              />
              <div
                className="px-2 border-start border-secondary d-flex align-items-center"
                style={{  backgroundColor: "#f0f0f0" }}
              >
                €
              </div>
            </div>
          </div>
          <p className="mt-1" style={{fontSize: "11px"}}>Tutti i prezzi includono tasse</p>
          <p className="mb-0 mt-2 fw-semibold" style={{color: "#2563EB"}}>Gestisci le opzioni del prezzo</p>
        </div>
    </div>
  );
};

export default GeneralTab;
