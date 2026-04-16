"use client";

import {
  Map,
  MapMarker,
  MapPopup,
  MapTileLayer,
  MapTooltip,
} from "@/components/ui/map";
import { projectlist } from "@/lib/data/projects";
import type { LatLngExpression } from "leaflet";

export const Projects = () => {
  if (!projectlist || projectlist.length === 0) return null;

  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden border border-zinc-800">
      {/* Ensure [0] exists and is cast as LatLngExpression */}
      <Map center={projectlist[0].coordinates as LatLngExpression} zoom={2}>
        <MapTileLayer />

        {projectlist.map((project) => (
          <MapMarker
            key={project.id}
            position={project.coordinates as LatLngExpression}
            eventHandlers={{
              mouseover: (e) => e.target.openPopup(),
              mouseout: (e) => e.target.closePopup(),
            }}
          >
            <MapPopup closeButton={false}>
              <div className="p-2 min-w-[150px]">
                <h4 className="font-bold text-amber-500 mb-1">
                  {project.title}
                </h4>
                <p className="text-[10px] text-zinc-400 leading-tight uppercase font-mono">
                  {project.company}
                </p>
                <p className="text-amber-300">{project.commodity}</p>
              </div>
            </MapPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};
