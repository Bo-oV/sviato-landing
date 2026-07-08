const MARKET_URL = 'market://details?id=com.sviato.app';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sviato.app&hl=uk&gl=UA';
const IOS_WEB_URL = 'https://sviato.vercel.app/';
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function App() {
  const openGooglePlay = () => {
    window.location.href = MARKET_URL;

    window.setTimeout(() => {
      window.location.href = PLAY_URL;
    }, 900);
  };

  const openIosWebApp = () => {
    window.location.href = IOS_WEB_URL;
  };

  return (
    <main className="landing-shell" aria-label="Sviato landing page">
      <section className="landing-card">
        <img className="app-logo" src={assetUrl('logo.png')} alt="Sviato" />
        {/* If logo.png is unavailable, add the final Sviato logo to public/logo.png. */}

        <p className="description">
          Плануй події, додавай подарунки та знаходь цікаві ідеї для подарунків в одному додатку.
        </p>

        <div className="store-buttons" aria-label="App links">
          <button className="play-button" type="button" onClick={openGooglePlay}>
            <img className="play-icon" src={assetUrl('google-play.svg')} alt="" aria-hidden="true" />
            <span>Відкрити в Google Play</span>
          </button>

          <button className="play-button" type="button" onClick={openIosWebApp}>
            <img className="play-icon" src={assetUrl('apple-ios.svg')} alt="" aria-hidden="true" />
            <span>Відкрити для iOS</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
