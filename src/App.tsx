const MARKET_URL = 'market://details?id=com.sviato.app';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sviato.app&hl=uk&gl=UA';
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function App() {
  const openGooglePlay = () => {
    window.location.href = MARKET_URL;

    window.setTimeout(() => {
      window.location.href = PLAY_URL;
    }, 900);
  };

  return (
    <main className="landing-shell" aria-label="Sviato landing page">
      <section className="landing-card">
        <img className="app-logo" src={assetUrl('logo.png')} alt="Sviato" />
        {/* If logo.png is unavailable, add the final Sviato logo to public/logo.png. */}

        <p className="description">
          Плануй події, додавай подарунки та знаходь цікаві ідеї для подарунків в одному додатку.
        </p>

        <button className="play-button" type="button" onClick={openGooglePlay}>
          <img className="play-icon" src={assetUrl('google-play.svg')} alt="" aria-hidden="true" />
          <span>Відкрити в Google Play</span>
        </button>
      </section>
    </main>
  );
}

export default App;