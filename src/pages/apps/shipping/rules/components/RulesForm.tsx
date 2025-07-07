import React, { useState, useEffect } from 'react';
import { Button, Form, Card, Row, Col, Container, Badge } from 'react-bootstrap';
import { FaPlus, FaSave } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PropMeta,
  PROPERTY_META,
  PROPERTIES,
  ACTIONS,
} from './types';

const STORAGE_RULES = 'shipping_rules_v1';

type Condition = { id: string; property: string; operator: string; value: string; };
type ActionItem = { id: string; action: string; value: string; };
type ShippingRule = { id: string; name: string; conditions: Condition[]; actions: ActionItem[]; };

const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

const RulesForm: React.FC = () => {
  const  navigate = useNavigate()
  const { mode: urlMode, slug } = useParams<{ mode?: string; slug?: string }>();
  const [mode, setMode] = useState<'start' | 'builder'>('start');
  const [rule, setRule] = useState<ShippingRule>({ id: generateId(), name: '', conditions: [], actions: [] });
  const [conj, setConj] = useState<'e' | 'o'>('e');


  useEffect(() => {
  if (urlMode === 'edit' && slug) {
    const raw = localStorage.getItem(STORAGE_RULES) || '[]';
    const all: ShippingRule[] = JSON.parse(raw);
    const existing = all.find(r => r.id === slug);
    if (existing) {
      setRule(existing);
      setMode('builder');
    } else {
      // se non la trovi, puoi gestire un 404 o un alert
      alert('Regola non trovata');
      navigate('/shipments/rules');
    }
  } else if (urlMode === 'new') {
    // la tua logica esistente
    setMode('builder');
  }
}, [urlMode, slug, navigate]);


  // Condition handlers
  const addCondition = () => setRule(prev => ({
    ...prev,
    conditions: [...prev.conditions, { id: generateId(), property: '', operator: '', value: '' }]
  }));
  const updateCondition = (id: string, field: keyof Condition, val: string) => setRule(prev => ({
    ...prev,
    conditions: prev.conditions.map(c => c.id === id ? { ...c, [field]: val } : c)
  }));
  const removeCondition = (id: string) => setRule(prev => ({
    ...prev,
    conditions: prev.conditions.filter(c => c.id !== id)
  }));

  // Action handlers
  const addAction = () => setRule(prev => ({
    ...prev,
    actions: [...prev.actions, { id: generateId(), action: '', value: '' }]
  }));
  const updateAction = (id: string, field: keyof ActionItem, val: string) => setRule(prev => ({
    ...prev,
    actions: prev.actions.map(a => a.id === id ? { ...a, [field]: val } : a)
  }));
  const removeAction = (id: string) => setRule(prev => ({
    ...prev,
    actions: prev.actions.filter(a => a.id !== id)
  }));

  // Save rule to localStorage
  const saveRule = () => {
    const raw = localStorage.getItem(STORAGE_RULES);
    const list: ShippingRule[] = raw ? JSON.parse(raw) : [];
    const updated = [rule, ...list.filter(r => r.id !== rule.id)];
    localStorage.setItem(STORAGE_RULES, JSON.stringify(updated));
    navigate("/shipments/rules")
    alert('Regola salvata!');
  };

  const startBuilder = () => setMode('builder');

  return (
    <Container className="py-4">
      {mode === 'start' ? (
        <>
          <h3>Crea la tua regola</h3>
          <p>Prepara una regola personalizzata da zero</p>
          <Button onClick={startBuilder}>Inizia a creare</Button>

          <h5 className="mt-4">Esempi di regole pronte all'uso</h5>
          <Card className="mb-2">
            <Card.Body>
              <Card.Title>Seleziona corriere per paese di destinazione</Card.Title>
              <Card.Text>Assegna il corriere e il metodo di consegna per le spedizioni verso paesi specifici.</Card.Text>
              <Button variant="link">Apri il modello</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Assicurazione per ordini di valore elevato</Card.Title>
              <Card.Text>Assicura ordini che superano un valore di vendita specifico.</Card.Text>
              <Button variant="link">Apri il modello</Button>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <div className='w-100 d-inline-flex justify-content-between align-items-center mb-3'>
            <h4 className='m-0 fw-bold'>Nuova regola di spedizione</h4>
            <Button className='py-2 fw-semibold' onClick={saveRule}><FaSave /> Salva</Button>
          </div>
          <Row>
            <Col md={8}>
              <Card className='p-3 mb-3'>
                <Form.Group>
                  <h6 className='fw-bold'>Nome della regola</h6>
                  <input className='input-product w-100'
                    type="text"
                    value={rule.name}
                    onChange={e => setRule({ ...rule, name: e.target.value })}
                  />
                </Form.Group>
              </Card>

              <div className='card p-3'>
                <h5 className='fw-bold'>Condizioni (se)</h5>
                {rule.conditions.length > 1 && (
                  <div className='mb-2'>
                    <Badge
                      bg={conj === 'e' ? 'primary' : 'secondary'}
                      onClick={() => setConj('e')}
                      style={{ cursor: 'pointer', marginRight: '3px', fontSize: "16px" }}
                    >
                      e
                    </Badge>
                    <Badge
                      bg={conj === 'o' ? 'primary' : 'secondary'}
                      onClick={() => setConj('o')}
                      style={{ cursor: 'pointer', fontSize: "16px" }}
                    >
                      o
                    </Badge>
                  </div>
                )}
                {rule.conditions.map((cond, idx) => (
                  <div key={cond.id} className="align-items-center gap-3">
                    {idx > 0 && <span className='fw-bold mb-2'>{conj}</span>}
                    <div className='w-100 d-flex align-items-center gap-3 mb-2 mt-2'>
                        <Form.Select
                        className='input-product'
                        value={cond.property}
                        onChange={e => updateCondition(cond.id, 'property', e.target.value)}
                        >
                        <option value="">-- Proprietà --</option>
                        {PROPERTIES.map(p => <option key={p} value={p}>{p}</option>)}
                        </Form.Select>
                        <Form.Select className="input-product"
                        value={cond.operator}
                        onChange={e => updateCondition(cond.id, 'operator', e.target.value)}
                        >
                        <option value="">-- Operatore --</option>
                        {(PROPERTY_META[cond.property]?.operators ?? []).map(op => (
                            <option key={op} value={op}>{op}</option>
                        ))}
                        </Form.Select>

                        {(() => {
                            // prendo il metadata in base alla proprietà scelta
                            const meta: PropMeta | undefined = PROPERTY_META[cond.property];

                            // se non ho ancora selezionato la proprietà
                            if (!meta) {
                                return (
                                <Form.Control
                                    className="input-product"
                                    type="text"
                                    disabled
                                    placeholder="Seleziona prima proprietà"
                                />
                                );
                            }

                            // boolean -> checkbox
                            if (meta.valueType === 'boolean') {
                                return (
                                <Form.Check
                                    type="checkbox"
                                    checked={cond.value === 'true'}
                                    onChange={e => updateCondition(cond.id, 'value', e.target.checked.toString())}
                                />
                                );
                            }

                            // numero o testo
                            return (
                                <Form.Control
                                className="input-product"
                                type={meta.valueType === 'number' ? 'number' : 'text'}
                                placeholder="Valore"
                                value={cond.value}
                                onChange={e => updateCondition(cond.id, 'value', e.target.value)}
                                />
                            );
                            })()}

                        <Button variant="danger" size="sm" onClick={() => removeCondition(cond.id)}>x</Button>
                    </div>
                  </div>
                ))}
                <div className='d-inline-flex mt-3'>
                    <Button className='bg-transparent text-black' style={{fontSize: "13px", border: "1px solid black"}} size="sm" onClick={addCondition}>
                        <div className='d-flex gap-1 align-items-center py-1'>
                        <FaPlus/>
                        Aggiungi condizione
                        </div> 
                    </Button>
                </div>
              </div>

              <Card className='p-3 mb-3'>
                <h5 className='fw-bold'>Azioni</h5>
                {rule.actions.map(act => (
                  <div key={act.id} className="d-flex align-items-center gap-2 mb-2">
                    <Form.Select
                      className='input-product'
                      value={act.action}
                      onChange={e => updateAction(act.id, 'action', e.target.value)}
                    >
                      <option value="">-- Azione --</option>
                      {ACTIONS.map(a => <option key={a} value={a}>{a}</option>)}
                    </Form.Select>
                    <Form.Control
                      className='input-product'
                      type="text"
                      placeholder="Valore"
                      value={act.value}
                      onChange={e => updateAction(act.id, 'value', e.target.value)}
                    />
                    <Button variant="danger" size="sm" onClick={() => removeAction(act.id)}>x</Button>
                  </div>
                ))}
                <div className='d-inline-flex mt-3'>
                    <Button className='bg-transparent text-black' style={{fontSize: "13px", border: "1px solid black"}} size="sm" onClick={addAction}>
                        <div className='d-flex gap-1 align-items-center py-1'>
                            <FaPlus/>
                            Aggiungi azione
                        </div> 
                    </Button>
                </div>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Body>
                  <h5 className='fw-bold'>Riepilogo</h5>
                  <div className='d-inline-flex'>
                    <p style={{backgroundColor: "#E7E7E7", borderLeft: "8px solid #C3C5C7"}} className='mb-2 p-2 rounded-3'><strong>SE</strong></p>
                  </div>
                  {rule.conditions.map((c, i) => (
                    <div key={c.id} >
                      {i > 0 && <span className='fw-bold'>{conj}</span>} 
                        <div style={{backgroundColor: "#D2EAFF", borderLeft: "8px solid #1D97FF"}} className="p-2 rounded-3 mb-2">
                            <p className='fw-semibold m-0'>{c.property} {c.operator} <strong style={{color: "#112857"}}>{c.value}</strong></p>
                        </div>
                    </div>
                  ))}
                  
                  <div className='d-inline-flex mt-3'>
                    <p style={{backgroundColor: "#E7E7E7", borderLeft: "8px solid #C3C5C7"}} className='mb-2 p-2 rounded-3'><strong>ALLORA</strong></p>
                  </div>
                  {rule.actions.map((a, i) => (
                    <div key={a.id}>
                        {i > 0 && <div><p className='m-0 fw-bold text-black'>e</p></div>}
                        <div style={{ backgroundColor: "#CDEDE4", borderLeft: "8px solid #68CAAE" }} className="p-2 rounded-3 mb-2 fw-semibold">
                        {a.action} {a.value}
                        </div>
                    </div>
                    ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default RulesForm;
