function EmbedMap({ lat, lon }) {
  const embedMaps = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&amp;layer=mapnik&amp;marker=${lat}%2C${lon}`;

  return (
    <iframe
      src={embedMaps}
      height="500"
      width="100%"
      scrolling="no"
      frameBorder="0"
      title="Maps"
    />
  );
}

export default EmbedMap;
