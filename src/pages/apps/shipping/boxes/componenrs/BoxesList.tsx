import React, { useEffect, useState, useRef } from 'react';
import { Box } from './types';
import BoxesTable from './BoxesTable';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const STORAGE_KEY = 'boxes_data';

const BoxesList: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBox, setEditingBox] = useState<Box | null>(null);

  // Form fields
  const [nomeScatola, setNomeScatola] = useState('');
  const [lunghezza, setLunghezza] = useState<number>(0);
  const [larghezza, setLarghezza] = useState<number>(0);
  const [altezza, setAltezza] = useState<number>(0);
  const [isDefault, setIsDefault] = useState(false);
  const isFirstSave = useRef(true);

  // Carica da localStorage all'avvio
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setBoxes(JSON.parse(stored));
      } catch {
        console.warn('Dati boxes invalidi in localStorage');
      }
    }
  }, []);


  useEffect(() => {
    if (isFirstSave.current) {
      // primo trigger: ignoralo e prepara per i salvataggi successivi
      isFirstSave.current = false;
      return;
    }
    // da qui in poi, ogni modifica di `boxes` viene salvata
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boxes));
  }, [boxes]);


  const openNewModal = () => {
    setEditingBox(null);
    setNomeScatola('');
    setLunghezza(0);
    setLarghezza(0);
    setAltezza(0);
    setIsDefault(false);
    setShowModal(true);
  };

  const openEditModal = (box: Box) => {
    setEditingBox(box);
    setNomeScatola(box.nomeScatola);
    setLunghezza(box.lunghezza);
    setLarghezza(box.larghezza);
    setAltezza(box.altezza);
    setIsDefault(box.default);
    setShowModal(true);
  };

  const handleSave = () => {
    const newId = editingBox ? editingBox.id : Date.now().toString();
    const newBox: Box = {
      id: newId,
      nomeScatola,
      lunghezza,
      larghezza,
      altezza,
      default: isDefault,
    };

    const updated = editingBox
      ? boxes.map(b => (b.id === editingBox.id ? newBox : b))
      : [...boxes, newBox];

    setBoxes(updated);
    setShowModal(false);
  };

  return (
    <div className='mt-4'>
      <Button className='boxShadow mb-4' style={{ height: '45px', border: '0px' }} onClick={openNewModal}>
        <div className='d-flex align-items-center gap-1'>
          <FaPlus /> Aggiungi scatola
        </div>
      </Button>

      <BoxesTable boxes={boxes} onEdit={openEditModal} />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editingBox ? 'Modifica Scatola' : 'Nuova Scatola'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <h6 className='mb-1 fw-bold'>Nome Scatola</h6>
              <Form.Control
                type='text'
                value={nomeScatola}
                onChange={e => setNomeScatola(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <h6 className='mb-1 fw-bold'>Lunghezza (cm)</h6>
              <Form.Control
                type='number'
                value={lunghezza}
                onChange={e => setLunghezza(parseFloat(e.target.value))}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <h6 className='mb-1 fw-bold'>Larghezza (cm)</h6>
              <Form.Control
                type='number'
                value={larghezza}
                onChange={e => setLarghezza(parseFloat(e.target.value))}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <h6 className='mb-1 fw-bold'>Altezza (cm)</h6>
              <Form.Control
                type='number'
                value={altezza}
                onChange={e => setAltezza(parseFloat(e.target.value))}
              />
            </Form.Group>
            <Form.Group className='mb-3 d-flex align-items-center'>
              <Form.Check
                type='checkbox'
                className='fw-bold'
                label='Predefinita'
                checked={isDefault}
                onChange={e => setIsDefault(e.target.checked)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-transparent text-black' onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant='primary' onClick={handleSave}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BoxesList;
