import { useState, DragEvent, ChangeEvent } from 'react';
import { GoPlus } from 'react-icons/go';
import { Spinner } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

interface ProductGalleryProps {
  images: string[];
  onChange: (newImages: string[]) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, onChange }) => {
  const [loading, setLoading] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    setLoading(true);
    const files = Array.from(e.target.files);
    const readImage = (file: File): Promise<string> =>
      new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = () => reader.result ? res(reader.result as string) : rej();
        reader.onerror = () => rej();
        reader.readAsDataURL(file);
      });

    try {
      const results = await Promise.all(files.map(readImage));
      onChange([...images, ...results]);
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  const onDragStart = (index: number) => (e: DragEvent) => {
    setDragIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (index: number) => (e: DragEvent) => {
    e.preventDefault();
    if (dragIndex !== null && dragIndex !== index) {
      setHoverIndex(index);
    }
  };

  const onDragLeave = (index: number) => () => {
    if (hoverIndex === index) {
      setHoverIndex(null);
    }
  };

  const onDrop = (index: number) => (e: DragEvent) => {
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
    <div className="w-100 card p-3">
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
            onDragOver={onDragOver(index)}
            onDragLeave={onDragLeave(index)}
            onDrop={onDrop(index)}
            onDragEnd={onDragEnd}
          >
            <img
              className="img"
              src={img}
              alt={`preview-${index}`}
              style={{ maxWidth: '100%', maxHeight: '100%', userSelect: 'none', pointerEvents: 'none' }}
              draggable={false}
            />
            <div className="overlay">
              <strong>Trascina per ordinare</strong>
            <div
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
                }}
                onClick={(e) => {
                e.stopPropagation();
                handleDelete(index);
                }}
                title="Elimina immagine"
            >
                <FaTrashAlt color="white" size={12} />
            </div>
            </div>

          </div>
        ))}
        <label
          className="position-relative card shadow-none mb-0 p-2"
          style={{ width: 130, height: 130, cursor: 'pointer', backgroundColor: '#ECEEF0' }}
        >
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} hidden />
          <div style={{ position: 'absolute', top: '37%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <GoPlus style={{ fontSize: 50 }} />
          </div>
          <p
            className="text-center text-black fw-semibold position-absolute"
            style={{ fontSize: 10, bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
          >
            Carica immagine
          </p>
        </label>
      </div>
    </div>
  );
};

export default ProductGallery;
