import { useState, useEffect } from "react";
import "./Hospitals.css";

const API_BASE = "https://blood-donation-u02c.onrender.com";

const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
    <path d="M9 21v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
    <path d="M12 7v4M10 9h4" />
  </svg>
);

const PinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

const parseList = (data) => {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.hospitals)) return data.hospitals;
  if (Array.isArray(data.data)) return data.data;
  return [];
};

export default function Hospitals() {
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nearbyLoading, setNearbyLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("search");

  const searchHospitals = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/hospitals?search=${query}&limit=50`);
      const data = await res.json();
      console.log("Search response:", data);
      setHospitals(parseList(data));
    } catch {
      setError("Failed to load hospitals. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const findNearby = () => {
    setNearbyLoading(true);
    setError(null);
    setMode("nearby");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude: lat, longitude: lng } = pos.coords;
          const res = await fetch(`${API_BASE}/hospitals/nearby?lat=${lat}&lng=${lng}&radius_km=40&limit=50`);
          const data = await res.json();
          console.log("Nearby response:", data);
          setHospitals(parseList(data));
        } catch {
          setError("Failed to load nearby hospitals.");
        } finally {
          setNearbyLoading(false);
        }
      },
      () => {
        setError("Location access denied. Please enable location and try again.");
        setNearbyLoading(false);
      }
    );
  };

  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/hospitals?limit=50`);
        const data = await res.json();
        console.log("API response:", data);
        setHospitals(parseList(data));
      } catch {
        setError("Failed to load hospitals.");
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setMode("search");
    searchHospitals(search);
  };

  return (
    <div className="hospitals-page">

      {/* HEADER */}
      <div className="hospitals-header">
        <span className="hospitals-eyebrow">Hospital Directory</span>
        <h1 className="hospitals-title">Find Hospitals &<br />Blood Banks</h1>
        <p className="hospitals-sub">
          Search hospitals across Kerala or find the ones nearest to you.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="hospitals-controls">
        <form className="hospitals-search-form" onSubmit={handleSearch}>
          <input
            className="hospitals-input"
            type="text"
            placeholder="Search by hospital name, city or district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="hospitals-search-btn" type="submit">
            Search
          </button>
        </form>
        <button
          className="hospitals-nearby-btn"
          onClick={findNearby}
          disabled={nearbyLoading}
        >
          {nearbyLoading ? "Locating..." : (<><PinIcon className="hospitals-btn-icon" /> Find Nearby</>)}
        </button>
      </div>

      {/* RESULTS COUNT */}
      <div className="hospitals-meta">
        {loading || nearbyLoading ? (
          <span>Loading...</span>
        ) : (
          <span>{hospitals.length} hospitals found {mode === "nearby" ? "near you" : ""}</span>
        )}
      </div>

      {/* ERROR */}
      {error && <div className="hospitals-error">{error}</div>}

      {/* HOSPITALS GRID */}
      {loading || nearbyLoading ? (
        <div className="hospitals-loading">
          <div className="hospitals-spinner" />
          <p>Finding hospitals...</p>
        </div>
      ) : (
        <div className="hospitals-grid">
          {hospitals.length === 0 ? (
            <div className="hospitals-empty">
              <p>No hospitals found. Try a different search.</p>
            </div>
          ) : (
            hospitals.map((h, i) => (
              <div className="hospital-card" key={h.id || i}>
                <div className="hospital-card-icon"><HospitalIcon /></div>
                <div className="hospital-card-body">
                  <h3 className="hospital-name">{h.name}</h3>
                  {h.city && (
                    <p className="hospital-location">
                      <PinIcon className="hospital-location-icon" /> {h.city}{h.district ? `, ${h.district}` : ""}
                    </p>
                  )}
                  {h.distance_km && (
                    <p className="hospital-distance">
                      <CarIcon className="hospital-distance-icon" /> {Number(h.distance_km).toFixed(1)} km away
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

    </div>
  );
}