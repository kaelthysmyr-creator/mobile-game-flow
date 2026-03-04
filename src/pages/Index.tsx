const Index = () => {
  return (
    <iframe
      src="/game.html"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        margin: 0,
        padding: 0,
      }}
      title="Lurebound"
      allow="autoplay; fullscreen; gyroscope; accelerometer"
    />
  );
};

export default Index;
