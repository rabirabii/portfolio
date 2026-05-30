"use client";

import { useMemo, useState } from "react";
import type { Diagram } from "@/lib/cases";
import { DiagramViewer } from "./DiagramViewer";

type DiagramMode = {
  id: string;
  label: string;
  diagram: Diagram;
};

type ProcessDiagramSwitcherProps = {
  flowDiagram?: Diagram;
  sequenceDiagrams?: Diagram[];
};

export function ProcessDiagramSwitcher({
  flowDiagram,
  sequenceDiagrams = [],
}: ProcessDiagramSwitcherProps) {
  const modes = useMemo<DiagramMode[]>(() => {
    const items: DiagramMode[] = [];

    if (flowDiagram) {
      items.push({
        id: "flow",
        label: "FLOWCHART",
        diagram: flowDiagram,
      });
    }

    sequenceDiagrams.forEach((diagram, index) => {
      items.push({
        id: `sequence-${index + 1}`,
        label: `SEQUENCE ${String(index + 1).padStart(2, "0")}`,
        diagram,
      });
    });

    return items;
  }, [flowDiagram, sequenceDiagrams]);

  const [activeModeId, setActiveModeId] = useState(modes[0]?.id ?? "");

  const activeMode = modes.find((mode) => mode.id === activeModeId) ?? modes[0];

  if (!activeMode) {
    return (
      <DiagramViewer emptyLabel="◊ DIAGRAM PENDING // EXPORT FROM EXCALIDRAW" />
    );
  }

  return (
    <div className="mt-12">
      <div className="mb-4 flex flex-wrap gap-2">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setActiveModeId(mode.id)}
            className={`mission-diagram-toggle ${
              activeMode.id === mode.id ? "mission-diagram-toggle--active" : ""
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      <DiagramViewer diagram={activeMode.diagram} noOuterSpacing />
    </div>
  );
}
