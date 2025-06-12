import { useState, DragEvent, ChangeEvent, useRef } from 'react';
import { GoPlus } from 'react-icons/go';
import { Spinner } from 'react-bootstrap';
import { FaTrashAlt, FaRegImage  } from 'react-icons/fa';

interface ProductGalleryProps {
  images: string[];
  onChange: (newImages: string[]) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, onChange }) => {
  const dragCounter = useRef(0);
  const [loading, setLoading] = useState(false);
  const [isDraggingFiles, setIsDraggingFiles] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const readImage = (file: File): Promise<string> =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () =>
        reader.result ? res(reader.result as string) : rej();
      reader.onerror = () => rej();
      reader.readAsDataURL(file);
    });

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setLoading(true);
    try {
      const files = Array.from(e.target.files);
      const results = await Promise.all(files.map(readImage));
      onChange([...images, ...results]);
    } finally {
      setLoading(false);
    }
  };

  // Raccoglie i drop sull'intero contenitore
  const handleFileDrop = async (e: DragEvent) => {
    e.preventDefault();
    dragCounter.current = 0;
    setIsDraggingFiles(false);

    const files = Array.from(e.dataTransfer.files).filter(f =>
      f.type.startsWith('image/')
    );
    if (!files.length) return;

    setLoading(true);
    try {
      const results = await Promise.all(files.map(readImage));
      onChange([...images, ...results]);
    } finally {
      setLoading(false);
    }
  };

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
  if (Array.from(e.dataTransfer.types).includes('Files')) {
    e.dataTransfer.dropEffect = 'move';
  }
};
const handleDragEnter = (e: DragEvent) => {
  e.preventDefault();
  if (!Array.from(e.dataTransfer.types).includes('Files')) return;
  dragCounter.current += 1;
  setIsDraggingFiles(true);
};
const handleDragLeave = (e: DragEvent) => {
  e.preventDefault();
  if (!Array.from(e.dataTransfer.types).includes('Files')) return;
  dragCounter.current -= 1;
  if (dragCounter.current === 0) {
    setIsDraggingFiles(false);
  }
};

  // RIORDINO
  const onDragStart = (index: number) => (e: DragEvent) => {
    setDragIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };
  const onDragOverReorder = (index: number) => (e: DragEvent) => {
    e.preventDefault();
    if (dragIndex !== null && dragIndex !== index) {
      setHoverIndex(index);
    }
  };
  const onDragLeaveReorder = (index: number) => () => {
    if (hoverIndex === index) setHoverIndex(null);
  };
  const onDropReorder = (index: number) => (e: DragEvent) => {
    e.preventDefault();
    if (dragIndex === null) return;
    const updated = [...images];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(index, 0, moved);
    onChange(updated);
    setDragIndex(null);
    setHoverIndex(null);
  };
  const onDragEnd = () => {
    setDragIndex(null);
    setHoverIndex(null);
  };

  const handleDelete = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <div
      className="w-100 card p-3 position-relative"
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >

      {isDraggingFiles && (
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(51, 122, 183, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#337ab7'
          }}
        > 
          <div className='d-flex align-items-center gap-2'>    
            <FaRegImage style={{color: "white", fontSize: "38px"}}/>
            <p style={{fontSize: "20px"}} className='text-white fw-bold my-0'>Invia qui le immagini</p>
          </div>
        </div>
      )}

      <div className="w-100 d-flex align-items-center justify-content-between mb-3">
        <h6 className="fw-bold">Galleria prodotti</h6>
        {loading && <Spinner animation="border" size="sm" />}
      </div>

      <div className="d-flex align-items-center gap-2 flex-wrap">
        {images.map((img, index) => (
          <div
            key={index}
            className="card shadow-none mb-0 p-2 d-flex align-items-center justify-content-center position-relative image-card"
            style={{
              width: 130,
              height: 130,
              backgroundColor: '#ECEEF0',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              transform: hoverIndex === index ? 'translateX(10px)' : 'none',
            }}
            draggable
            onDragStart={onDragStart(index)}
            onDragOver={onDragOverReorder(index)}
            onDragLeave={onDragLeaveReorder(index)}
            onDrop={onDropReorder(index)}
            onDragEnd={onDragEnd}
          >
            <img
              className="img"
              src={img}
              alt={`preview-${index}`}
              draggable={false}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                userSelect: 'none',
                pointerEvents: 'none'
              }}
            />
            <div className="overlay">
              <strong>Trascina per ordinare</strong>
              <button
                type="button"
                draggable={false}
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
                title="Elimina immagine"
              >
                <FaTrashAlt color="white" size={12} />
              </button>
            </div>
          </div>
        ))}

        {/* Label per click-to-upload + overlay specifico */}
        <label
          className="position-relative card shadow-none mb-0 p-2"
          style={{
            width: 130,
            height: 130,
            cursor: 'pointer',
            backgroundColor: isDraggingFiles ? '#cfe3ff' : '#ECEEF0',
            border: isDraggingFiles ? '2px dashed #337ab7' : undefined,
            transition: 'background-color 0.2s, border 0.2s'
          }}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            hidden
          />
          {isDraggingFiles ? (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                fontSize: 12,
                color: '#337ab7'
              }}
            >
              Trascina e rilascia qui<br/>le tue immagini
            </div>
          ) : (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: '37%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <GoPlus style={{ fontSize: 50 }} />
              </div>
              <p
                className="text-center text-black fw-semibold position-absolute"
                style={{
                  fontSize: 10,
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                Carica immagine
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default ProductGallery;
