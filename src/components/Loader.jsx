/**
 * Full-screen branded loading experience shown before the main site appears.
 */
function Loader() {
  return (
    <div className="loader-screen" role="status" aria-label="Loading ShriSSSSanstha website">
      <div className="loader-orbit">
        <div className="loader-logo">
          <span>ShriSSS</span>Sanstha
        </div>
      </div>
    </div>
  );
}

export default Loader;
