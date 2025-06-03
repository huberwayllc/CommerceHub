import { useState, useEffect } from "react";
import { ProductOption, Variation } from "./options/types";
import { cartesian } from "./options/utils";
import OptionList from "./options/OptionList";
import OptionForm from "./options/OptionForm";
import EmptyPlaceholder from "./options/EmptyPlaceholder";
import VariationList from "./options/VariationList";
import VariationForm from "./options/VariationForm";

type TabKey = "OPTIONS" | "VARIATIONS";

const OptionsTab = () => {
  const [options, setOptions] = useState<ProductOption[]>([]);
  const [editingOptionIdx, setEditingOptionIdx] = useState<number | null>(null);
  const [showOptionForm, setShowOptionForm] = useState(false);

  const [variations, setVariations] = useState<Variation[]>([]);
  const [editingVarIdx, setEditingVarIdx] = useState<number | null>(null);
  const [showVarForm, setShowVarForm] = useState(false);

   const [activeTab, setActiveTab] = useState<TabKey>("OPTIONS");

  // Rigenera le variations quando cambiano le options,
  // ma mantiene i campi modificati dell'utente
  useEffect(() => {
    if (options.length === 0) {
      setVariations([]);
      return;
    }
    const lists = options.map(o => o.values.map(v => v.name!));
    const combos = cartesian(lists);

    // Map id -> old variation
    const oldMap = Object.fromEntries(
      variations.map(v => [v.id, v])
    );

    const newVars: Variation[] = combos.map(combo => {
      const id = combo.join("_");
      const opts: Record<string,string> = {};
      options.forEach((o, i) => opts[o.name] = combo[i]);
      const old = oldMap[id];
      return {
        id,
        options: opts,
        price: old?.price ?? 0,
        stock: old?.stock ?? 0,
        imageUrl: old?.imageUrl ?? ""
      };
    });
    setVariations(newVars);
  }, [options]);

  // Option handlers
  const handleAddOption = () => { setEditingOptionIdx(null); setShowOptionForm(true); };
  const handleEditOption = (i: number) => { setEditingOptionIdx(i); setShowOptionForm(true); };
  const handleDeleteOption = (i: number) => setOptions(prev => prev.filter((_, idx) => idx !== i));
  const handleSaveOption = (opt: ProductOption) => {
    setOptions(prev => {
      const arr = [...prev];
      if (editingOptionIdx !== null) arr[editingOptionIdx] = opt;
      else arr.push(opt);
      return arr;
    });
    setShowOptionForm(false);
  };
  const handleCancelOption = () => setShowOptionForm(false);

  // Variation handlers
  const handleEditVar = (i: number) => { setEditingVarIdx(i); setShowVarForm(true); };
  const handleSaveVar = (v: Variation) => {
    setVariations(prev => {
      const arr = [...prev];
      if (editingVarIdx !== null) arr[editingVarIdx] = v;
      return arr;
    });
    setShowVarForm(false);
  };
  const handleCancelVar = () => setShowVarForm(false);

  return (
    <>
      {/* Se non stai creando un option e non ce ne sono */}
      {!showOptionForm && options.length === 0 && (
        <EmptyPlaceholder onAdd={handleAddOption} />
      )}

      {/* Se non stai creando e ci sono options */}
      {!showOptionForm && options.length > 0 && (
        <>
        {activeTab === "OPTIONS" &&
          <OptionList
            options={options}
            onAdd={handleAddOption}
            onEdit={handleEditOption}
            onDelete={handleDeleteOption}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        }
        {activeTab === "VARIATIONS" &&
          <VariationList
            options={options}
            variations={variations}
            onEdit={handleEditVar}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        } 
        </>
      )}

      {/* Form per modificare una variation selezionata */}
      {showVarForm && editingVarIdx !== null && (
        <VariationForm
          initial={variations[editingVarIdx]}
          onSave={handleSaveVar}
          onCancel={handleCancelVar}
        />
      )}

      {/* Form per creare/modificare un option */}
      {showOptionForm && (
        <OptionForm
          initial={editingOptionIdx !== null ? options[editingOptionIdx] : undefined}
          existingNames={options.map(o => o.name)}
          onSave={handleSaveOption}
          onCancel={handleCancelOption}
        />
      )}
    </>
  );
};

export default OptionsTab;
