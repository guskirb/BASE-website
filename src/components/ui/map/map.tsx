import { useEffect } from "react";

import { useScript } from "../../../hooks/useScript";

export const Map = () => {
  const { loaded } = useScript(import.meta.env.VITE_PLACE);

  useEffect(() => {
    if (loaded) initMap();
  }, [loaded]);

  async function initMap(): Promise<void> {
    const { Map } = (await google.maps.importLibrary(
      "maps"
    )) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    const map = new Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 50.74037, lng: -1.863399 },
      zoom: 18,
      mapId: "4504f8b37365c3d0",
    });
    new AdvancedMarkerElement({
      map,
      position: { lat: 50.74037, lng: -1.863399 },
    });
  }

  return (
    <>
      <div id="latitud"></div>
      <div id="longitud"></div>
      <div id="map" className="map w-full h-full"></div>
    </>
  );
};
