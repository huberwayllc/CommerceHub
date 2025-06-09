// components/OptionsTab.tsx
import { useState, useEffect } from "react";

import { cartesian } from "./options/utils"; // Suppongo tu abbia già questa utilità
import OptionList from "./options/OptionList";
import OptionForm from "./options/OptionForm";
import EmptyPlaceholder from "./options/EmptyPlaceholder";
import VariationList from "./options/VariationList";
import VariationForm from "./options/VariationForm";
import { ProductOption, Variation } from "./options/types";

type TabKey = "OPTIONS" | "VARIATIONS";

interface OptionsTabProps {
  options: ProductOption[];
  variations: Variation[];
  onOptionsChange: (newOptions: ProductOption[]) => void;
  onVariationsChange: (newVariations: Variation[]) => void;
}

const OptionsTab: React.FC<OptionsTabProps> = ({
  options,
  variations,
  onOptionsChange,
  onVariationsChange,
}) => {

  const [editingOptionIdx, setEditingOptionIdx] = useState<number | null>(null);
  const [showOptionForm, setShowOptionForm] = useState(false);

  const [editingVarIdx, setEditingVarIdx] = useState<number | null>(null);
  const [showVarForm, setShowVarForm] = useState(false);

  const [activeTab, setActiveTab] = useState<TabKey>("OPTIONS");


  useEffect(() => {
    if (options.length === 0) {
      if (variations.length > 0) {
        onVariationsChange([]);
      }
      return;
    }

    const lists: string[][] = options.map((o) =>
      o.values.map((v) => v.name!)
    );
    const combos = cartesian(lists);

    const oldMap: Record<string, Variation> = Object.fromEntries(
      variations.map((v) => [v.id, v])
    );

    const newVars: Variation[] = combos.map((combo) => {
      const id = combo.join("_");
      const opts: Record<string, string> = {};
      options.forEach((o, i) => {
        opts[o.name] = combo[i];
      });
      const old = oldMap[id];
      return {
        id,
        options: opts,
        price: old?.price ?? 0,
        lowestPriceBeforeDiscount: old?.lowestPriceBeforeDiscount ?? 0,
        upc: old?.upc ?? 0,
        stock: old?.stock ?? 0,
        weight: old?.weight ?? 0,
        length: old?.length ?? 0,
        width: old?.width ?? 0,
        height: old?.height ?? 0,
        itemCode: old?.itemCode ?? 0,
        brand: old?.brand ?? "",
        imageUrl: old?.imageUrl ?? "",
      };
    });

    const oldStr = JSON.stringify(variations);
    const newStr = JSON.stringify(newVars);

    if (oldStr !== newStr) {
      onVariationsChange(newVars);
    }
  }, [options, variations, onVariationsChange]);

  // ── GESTIONE OPZIONI ─────────────────────────────────────────────────────────

  const handleAddOption = () => {
    setEditingOptionIdx(null);
    setShowOptionForm(true);
  };

  const handleEditOption = (i: number) => {
    setEditingOptionIdx(i);
    setShowOptionForm(true);
  };

  const handleDeleteOption = (i: number) => {
    const newOpts = options.filter((_, idx) => idx !== i);
    onOptionsChange(newOpts);
  };

  const handleSaveOption = (opt: ProductOption) => {
    const newOpts = [...options];
    if (editingOptionIdx !== null) {
      newOpts[editingOptionIdx] = opt;
    } else {
      newOpts.push(opt);
    }
    onOptionsChange(newOpts);
    setShowOptionForm(false);
    setEditingOptionIdx(null);
  };

  const handleCancelOption = () => {
    setShowOptionForm(false);
    setEditingOptionIdx(null);
  };

  // ── GESTIONE VARIANTI ───────────────────────────────────────────────────────

  const handleEditVar = (i: number) => {
    setEditingVarIdx(i);
    setShowVarForm(true);
  };

  const handleSaveVar = (v: Variation) => {
    const newVars = [...variations];
    if (editingVarIdx !== null) {
      newVars[editingVarIdx] = v;
      onVariationsChange(newVars);
    }
    setShowVarForm(false);
    setEditingVarIdx(null);
  };

  const handleCancelVar = () => {
    setShowVarForm(false);
    setEditingVarIdx(null);
  };

  // ── RENDER ─────────────────────────────────────────────────────────────────

  return (
    <>
      {!showOptionForm && options.length === 0 && (
        <EmptyPlaceholder onAdd={handleAddOption} />
      )}

      {!showOptionForm && options.length > 0 && (
        <>
          {activeTab === "OPTIONS" && (
            <OptionList
              options={options}
              variations={variations}           
              onAdd={handleAddOption}
              onEdit={handleEditOption}
              onDelete={handleDeleteOption}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "VARIATIONS" && (
            <VariationList
             options={options}
             variations={variations}
             onEdit={handleEditVar}
             activeTab={activeTab}
             setActiveTab={setActiveTab}
           />
          )}
        </>
      )}

      {showOptionForm && (
        <OptionForm
          initial={editingOptionIdx !== null ? options[editingOptionIdx] : undefined}
          existingNames={options.map((o) => o.name)}
          onSave={handleSaveOption}
          onCancel={handleCancelOption}
        />
      )}


      {showVarForm && editingVarIdx !== null && (
        <VariationForm
          show={showVarForm}
          initial={variations[editingVarIdx]!}
          onSave={handleSaveVar}
          onCancel={handleCancelVar}
        />
      )}
    </>
  );
};

export default OptionsTab;
