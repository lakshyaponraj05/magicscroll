import CircularGallery from './components/CircularGallery';
import image1 from './assets/image1.jpg';
function App() {
  const items = [
    { image: 'https://picsum.photos/id/1016/800/600', text: 'Mountains' },
    { image: 'https://picsum.photos/id/1018/800/600', text: 'River' },
    { image: 'https://picsum.photos/id/1020/800/600', text: 'Forest' }
  ];

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery
        items={items}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}

export default App;