function EmbedMap({ lat, lon }) {
  const embedMaps = `https://www.openstreetmap.org/export/embed.html?bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&amp;layer=mapnik&amp;marker=${lat}%2C${lon}`;

  return (
    <iframe
      src={embedMaps}
      marginHeight={0}
      marginWidth={0}
      height="500"
      width="100%"
      scrolling="no"
      frameBorder="0"
      title="Maps"
    />
  );
}

export default EmbedMap;
