import React, { useState } from 'react';
import { Table, Button, Form, Image, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaEdit, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Product } from './options/types';


interface ProductTableProps {
  products: Product[];
}


const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

const toggleSelectAll = () => {
  setSelected(selectAll ? new Set() : new Set(products.map(p => p.id)));
  setSelectAll(!selectAll);
};

const toggleSelect = (id: string) => {
  const newSet = new Set(selected);
  newSet.has(id) ? newSet.delete(id) : newSet.add(id);
  setSelected(newSet);
};

  return (
    <div>
      <div className="mb-4 d-flex align-items-center gap-3">
        <div style={{border: "1px solid #171f2c"}} 
        className="d-flex align-items-center gap-3 p-1 px-2 rounded-2 bg-white border-0 boxShadow">
          <Form.Check
            type="checkbox"
            className="big-checkbox m-0 "
            style={{ position: 'relative', bottom: '2px' }}
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          <FaChevronDown />
        </div>
        		<Dropdown>
					<Dropdown.Toggle style={{ height: '33px', fontSize: "11px" }} 
          className="fw-semibold text-black bg-white text-black d-flex align-items-center gap-1 border-0 boxShadow">
            <div className='d-flex align-items-center'>
              aggiornamento di massa 
              <FaChevronDown className='ms-2'/>
            </div>

					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#importa">Modifica tutti</Dropdown.Item>
						<Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Attiva o disattiva</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Configura prezzi</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Promuovi alla Vetrina</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Spedizione e ritiro</Dropdown.Item>
                        <Dropdown.Item className='fw-semibold' style={{height: "40px"}} href="#esporta">Tasse</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
        <div>
            <p style={{fontSize: "12px"}} className='mb-0 fw-semibold'>VISUALIZZANDO TUTTI I PRODOTTI<span style={{color: "#275ce0", fontWeight: "600", cursor: "pointer"}}> RICARICA</span></p>
        </div>
      </div>

       <Table hover className="custom-table">
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              {/* Checkbox */}
              <td style={{ width: 40 }}>
                <Form.Check
                  type="checkbox"
                  checked={selected.has(product.id)}
                  onChange={() => toggleSelect(product.id)}
                  className="big-checkbox"
                />
              </td>

              {/* Immagine */}
              <td style={{ width: 90 }}>
                <Image
                  src={product.general.objUrl || product.images?.[0] || "/fallback.png"}
                  rounded
                  style={{ width: 90, height: 90, objectFit: "cover" }}
                />
              </td>

              {/* Titolo, switch disponibilità, tag e spedizione */}
              <td>
                <strong style={{ fontSize: 16, cursor: "pointer" }}
                 onClick={() => navigate(`/apps/products/edit/${product.id}`)} >{product.general.title}</strong>
                <div className="d-flex align-items-center gap-2 mt-1">
                  <Form.Check
                    type="switch"
                    id={`switch-${product.id}`}
                    label="Disponibile"
                    checked={product.general.isAvailable}
                    readOnly
                  />
                </div>
                <div className="mt-2 d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-1">
                    <IoDocumentsOutline style={{ fontSize: 18 }} />
                    <span>{product.variations.length} varianti</span>
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <MdOutlineLocalShipping style={{ fontSize: 18 }} />
                    <span>
                      {product.shipping.requiresShipping
                        ? "Spese di spedizione previste"
                        : "Spedizione gratuita"}
                    </span>
                  </div>
                </div>
                <div className="mt-1">Codice: {product.general.itemCode}</div>
              </td>

              {/* Prezzo */}
              <td style={{ width: 100 }} className="text-end">
                <p className="mb-0 fw-bold fs-5">
                  € {product.general.price.toFixed(2)}
                </p>
              </td>

              {/* Bottone Modifica */}
              <td style={{ width: 130 }} className="text-end">
                <Button
                  variant="outline-primary"
                  onClick={() => navigate(`/apps/products/edit/${product.id}`)}
                >
                  <FaEdit /> Modifica
                </Button>
              </td>

              {/* Freccia per dettaglio/edit */}
              <td style={{ width: 60 }} className="text-end">
                <Button
                  variant="link"
                  onClick={() => navigate(`/apps/products/edit/${product.id}`)}
                >
                  <FaChevronRight />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-end">
        <small className='fw-semibold text-black'>{products.length} elementi</small>
      </div>
    </div>
  );
};

export default ProductTable;
