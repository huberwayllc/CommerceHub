import { useState } from "react";
import { cartesian } from "./options/utils";
import OptionList from "./options/OptionList";
import OptionForm from "./options/OptionForm";
import EmptyPlaceholder from "./options/EmptyPlaceholder";
import VariationList from "./options/VariationList";
import VariationForm from "./options/VariationForm";
import { Attributes, GeneralInfo, ModelPart, ProductOption, ShippingInfo, Variation } from "./options/types";
import ModelPartManager from "./options/ModelPartManager";

type TabKey = "OPTIONS" | "VARIATIONS";

interface OptionsTabProps {
  options: ProductOption[];
  variations: Variation[];
  onOptionsChange: (newOptions: ProductOption[]) => void;
  onVariationsChange: (newVariations: Variation[]) => void;
  modelParts: ModelPart[];
  onModelPartsChange: (parts: ModelPart[]) => void;
  productType: "physical" | "digital" | "3d_customizable";
   product: {
    general: GeneralInfo;
    attributes: Attributes;
    shipping: ShippingInfo;
    images: string[];
  };
}

const OptionsTab: React.FC<OptionsTabProps> = ({
  options,
  variations,
  onOptionsChange,
  onVariationsChange,
  modelParts,
  onModelPartsChange,
  productType,
  product,
}) => {


  const [editingOptionIdx, setEditingOptionIdx] = useState<number | null>(null);
  const [showOptionForm, setShowOptionForm] = useState(false);

  const [editingVarIdx, setEditingVarIdx] = useState<number | null>(null);
  const [showVarForm, setShowVarForm] = useState(false);

  const [activeTab, setActiveTab] = useState<TabKey>("OPTIONS");


const handleDeleteVar = (i: number) => {
  const newVars = variations.filter((_, idx) => idx !== i);
  onVariationsChange(newVars);
};

const handleAddVar = () => {
  setEditingVarIdx(null);
  setShowVarForm(true);
};

const handleDeleteMultipleVars = (indexes: number[]) => {
  const newVars = variations.filter((_, idx) => !indexes.includes(idx));
  onVariationsChange(newVars);
};


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




// ── RENDER per quanto riguarda il prodotto 3d─────────────────────────────────────────────────────────────────
      if (productType === "3d_customizable") {
      return (
        <ModelPartManager
        modelParts={modelParts}
        onModelPartsChange={onModelPartsChange}
        />
      );
    }

// ── RENDER normale per PHYSICAL o DIGITAL ───────────────────────────────────
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
            onAdd={handleAddVar}
            options={options}
            variations={variations}
            onEdit={handleEditVar}
            onDelete={handleDeleteVar}
            onDeleteMultiple={handleDeleteMultipleVars}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onBulkUpdatePrice={(indexes, newPrice) => {
                const newVars = variations.map((v, i) =>
                  indexes.includes(i) ? { ...v, price: newPrice } : v
                );
                onVariationsChange(newVars);
            }}
            onBulkUpdateImage={(indexes, file) => {
              const url = URL.createObjectURL(file);
              const newVars = variations.map((v, i) =>
                indexes.includes(i) ? { ...v, imageUrl: url } : v
              );
              onVariationsChange(newVars);
            }}
            onAutoGenerate={() => {
              const lists: string[][] = options.map((o) => o.values.map((v) => v.name!));
              const combos = cartesian(lists);

              const oldMap: Record<string, Variation> = Object.fromEntries(
                variations.map((v) => [v.id, v])
              );

              // Varianti nuove da aggiungere (solo quelle mancanti)
              const newVars: Variation[] = combos
                .filter(combo => {
                  const id = combo.join("_");
                  return !(id in oldMap);  // prendo solo quelle mancanti
                })
                .map((combo) => {
                  const id = combo.join("_");
                  const opts: Record<string, string> = {};
                  options.forEach((o, i) => {
                    opts[o.name] = combo[i];
                  });

                  return {
                    id,
                    options: opts,
                    price: product.general.price,
                    lowestPriceBeforeDiscount: 0,
                    upc: Number(product.attributes.upc) || 0,
                    stock: 0,
                    weight: product.shipping.weight ?? 0,
                    length: product.shipping.length ?? 0,
                    width: product.shipping.width ?? 0,
                    height: product.shipping.height ?? 0,
                    itemCode: product.general.itemCode,
                    brand: product.attributes.brand,
                    imageUrl: "",
                  };
                });

              onVariationsChange([...variations, ...newVars]);
            }}
          />
          )}
        </>
      )}

      {showOptionForm && (
        <OptionForm
          initial={editingOptionIdx !== null ? options[editingOptionIdx] : undefined}
          existingNames={options.map((o) => o.name)}
          existingOptions={options}
          onSave={handleSaveOption}
          onCancel={handleCancelOption}
        />
      )}


      {showVarForm && (
        <VariationForm
          options={options}
          existingVariations={variations}
          show={showVarForm}
          initial={editingVarIdx !== null ? variations[editingVarIdx] : undefined}
          onSave={(v) => {
            if (editingVarIdx === null) {
              onVariationsChange([...variations, v]);
            } else {
              const newVars = [...variations];
              newVars[editingVarIdx] = v;
              onVariationsChange(newVars);
            }
            setShowVarForm(false);
            setEditingVarIdx(null);
          }}
          onCancel={() => {
            setShowVarForm(false);
            setEditingVarIdx(null);
          }}
          productType={productType}
        />
      )}
    </>
  );
};

export default OptionsTab;
