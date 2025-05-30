import { useState } from "react";
import { ProductOption } from "./options/types";
import OptionList from "./options/OptionList";
import OptionForm from "./options/OptionForm";
import EmptyPlaceholder from "./options/EmptyPlaceholder"; // ①

const OptionsTab = () => {
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setEditingIndex(null);
    setShowForm(true);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index: number) => {
    setOptions(opts => opts.filter((_, i) => i !== index));
  };

  const handleSave = (opt: ProductOption) => {
    setOptions(prev => {
      const copy = [...prev];
      if (editingIndex !== null) copy[editingIndex] = opt;
      else copy.push(opt);
      return copy;
    });
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      {!showForm && options.length === 0 && (
        <EmptyPlaceholder onAdd={handleAddClick} />
      )}

      {!showForm && options.length > 0 && (
        <OptionList
          options={options}
          onAdd={handleAddClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <OptionForm
          initial={editingIndex !== null ? options[editingIndex] : undefined}
          existingNames={options.map(o => o.name)}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default OptionsTab;
