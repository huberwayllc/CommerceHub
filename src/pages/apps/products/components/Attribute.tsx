import { useState } from 'react';
import {Form, } from 'react-bootstrap';


const AttributeTab = () => {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
    {/* Product options section---------------------------- */}
    <div className='w-100 card p-3'>
      <div className='w-100 d-flex justify-content-between'>
        <h4 className="fw-bold">Generale</h4>
        <p className='fw-semibold' style={{color: "#2563EB", cursor: "pointer"}}>Gestisci gli attributi</p>
      </div>

      <div style={{backgroundColor: "#808F9D", height: "30px"}} className='d-flex align-items-center'>
        <div style={{ width: "30%" }}>
            <p className='text-center mb-0 text-white'>Attributo</p>
        </div>
         <div style={{ width: "70%" }}>
            <p className='text-center mb-0 text-white'>Valore</p> 
        </div>
      </div>
      <div style={{borderBottom: "1px solid #7f90aa", padding: "15px 0px"}} className='d-flex align-items-center'>
        <div style={{ width: "30%" }}>
            <p className='mb-0'>UPC</p>
        </div>
        <div style={{ width: "70%" }}>
            <input placeholder='UPC' className="input-product w-100"/>
        </div>
       </div>
       <div style={{borderBottom: "1px solid #7f90aa", padding: "15px 0px"}} className='d-flex align-items-center'>
            <div style={{ width: "30%" }}>
                <p className='mb-0'>Marca</p>
            </div>
            <div style={{ width: "70%" }}>
                <input placeholder='Marca' className="input-product w-100"/>
            </div>
       </div>
       <p className='mt-2' style={{fontSize: "11px"}}>Attributi con valori nulli non vengono visualizzati nella vetrina.</p>
    </div>
    </>
  );
};

export default AttributeTab;
