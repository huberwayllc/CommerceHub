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

        <div style={{width: "30%"}}  className="card p-3 h-100">
            <h6 className="fw-bold">Prezzi</h6>
        </div>
    
    </div>
  );
};

export default GeneralTab;
