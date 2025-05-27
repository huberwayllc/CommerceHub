import React, { useState } from 'react';
import { Table, Button, Form, Image, Dropdown } from 'react-bootstrap';
import { FaChevronRight, FaEdit, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";

interface Product {
  title: string;
  slug: string;
  description: string;
  price: number;
  status: boolean;
  visibility: boolean;
  tags: string[];
  category_id: number;
  images: string[];
  shipping: boolean;
}

// Dummy data
const dummyProducts: Product[] = [
  {
    title: 'Big Maczs',
    slug: 'prodotto-1',
    description: 'Descrizione del prodotto 1',
    price: 19.99,
    status: true,
    visibility: true,
    tags: ['rosso', 'taglia M'],
    category_id: 101,
    images: ['https://www.mcdonalds.it/sites/default/files/products/isolated--bigmac.png'],
    shipping: true,
  },
  {
    title: 'Prodotto 2',
    slug: 'prodotto-2',
    description: 'Descrizione del prodotto 2',
    price: 29.99,
    status: false,
    visibility: true,
    tags: ['blu', 'taglia L'],
    category_id: 102,
    images: ['https://m.media-amazon.com/images/I/71Wxj1yXNlL.jpg'],
    shipping: false,
  },
  {
    title: 'Prodotto 3',
    slug: 'prodotto-3',
    description: 'Descrizione del prodotto 3',
    price: 9.99,
    status: true,
    visibility: false,
    tags: ['verde'],
    category_id: 103,
    images: ['https://assets.unileversolutions.com/v1/124981112.png'],
    shipping: true,
  },
  {
    title: 'Prodotto 4',
    slug: 'prodotto-4',
    description: 'Descrizione del prodotto 4',
    price: 49.99,
    status: true,
    visibility: true,
    tags: ['nero', 'taglia S', 'edizione limitata'],
    category_id: 104,
    images: ['https://www.burgerking.it/assets/img/console/mo/products/2166image_sito_slide_it.png'],
    shipping: false,
  },
  {
    title: 'Prodotto 5',
    slug: 'prodotto-5',
    description: 'Descrizione del prodotto 5',
    price: 15.49,
    status: false,
    visibility: false,
    tags: ['bianco'],
    category_id: 105,
    images: ['https://store.tomarket.it/images/tomarket/products/large/0046414.webp'],
    shipping: true,
  },
];

const ProductTable: React.FC<{ products?: Product[] }> = ({ products = dummyProducts }) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const toggleSelectAll = () => {
    setSelected(selectAll ? new Set() : new Set(products.map(p => p.slug)));
    setSelectAll(!selectAll);
  };

  const toggleSelect = (slug: string) => {
    const newSet = new Set(selected);
    newSet.has(slug) ? newSet.delete(slug) : newSet.add(slug);
    setSelected(newSet);
  };

  return (
    <div>
      <div className="mb-4 d-flex align-items-center gap-3">
        <div style={{border: "1px solid #171f2c"}} className="d-flex align-items-center gap-3 p-1 px-2 rounded-2">
          <Form.Check
            type="checkbox"
            className="big-checkbox m-0"
            style={{ position: 'relative', bottom: '2px' }}
            checked={selectAll}
            onChange={toggleSelectAll}
          />
          <FaChevronDown />
        </div>
        		<Dropdown>
					<Dropdown.Toggle style={{ height: '33px', fontSize: "11px" }} className="fw-semibold text-black bg-transparent text-black d-flex align-items-center gap-1">
					aggiornamento di massa <FaChevronDown />
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
            <tr key={product.slug}>
              <td style={{ width: '40px' }}>
                <Form.Check
                  type="checkbox"
                  checked={selected.has(product.slug)}
                  onChange={() => toggleSelect(product.slug)}
                  className="big-checkbox"
                />
              </td>

              <td style={{  width: '90px' }}>
                <Image
                  src={product.images[0]}
                  rounded
                  style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                />
              </td>

              <td>
                <div>
                  <strong style={{fontSize: "16px"}}>{product.title}</strong>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <Form.Check
                      type="switch"
                      id={`switch-${product.slug}`}
                      label="Disponibile"
                      checked={product.status}
                      readOnly
                    />
                  </div>
                  <div className="mt-2 d-flex align-items-center gap-3">
                    <div className='d-flex align-items-center gap-1'>
                        <IoDocumentsOutline style={{fontSize: "18px"}}/>
                        <span>{product.tags.length} opzioni</span>
                    </div>
                    <div className='d-flex align-items-center gap-1'>
                        <MdOutlineLocalShipping style={{ fontSize: '18px' }} />
                        <span>{product.shipping ? 'Sono previste spese di spedizione' : 'Non sono previste spese di spedizione'}</span>
                    </div>
                  </div>
                </div>
              </td>

              {/* Ultime tre colonne allineate a destra */}
              <td style={{ width: '100px' }} className="text-end">
                <p className="mb-0 fw-bold fs-5">€ {product.price.toFixed(2)}</p>
              </td>
              <td style={{ width: '130px' }} className="text-end">
                <Button
                  variant="outline-primary"
                  onClick={() => navigate(`/products/${product.slug}/edit`)}
                >
                  <FaEdit /> Modifica
                </Button>
              </td>
              <td style={{ width: '60px' }} className="text-end">
                <Button
                  variant="link"
                  onClick={() => navigate(`/products/${product.slug}/edit`)}
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
