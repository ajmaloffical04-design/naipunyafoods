export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <span className="section-tag">OUR PRODUCTS</span>
        <h2 className="section-title">Pure. Natural. Trusted.</h2>

        <div className="products-grid">
          {/* Coconut Oil */}
          <div className="product-card">
            <div className="product-image">
              <img src="/coconut-oil.png" alt="Coconut Oil" />
            </div>

            <div className="product-content">
              <h3>Coconut Oil</h3>

              <p>
                Cold-pressed using the first crush method to retain maximum
                purity, flavor, and natural goodness.
              </p>

              <ul className="features-list">
                <li>100% Natural</li>
                <li>First Crush Purity</li>
                <li>Healthy &amp; Edible</li>
              </ul>

              <a href="#" className="product-shop-btn">
                Shop Now <span>→</span>
              </a>
            </div>
          </div>

          {/* Deepam Oil */}
          <div className="product-card">
            <div className="product-image">
              <img src="/deepam-oil.png" alt="Deepam Oil" />
            </div>

            <div className="product-content">
              <h3>Deepam Oil</h3>

              <p>
                Made for traditional use, perfect for puja, lamps, and other
                sacred rituals.
              </p>

              <ul className="features-list">
                <li>Pure &amp; Natural</li>
                <li>Traditionally Prepared</li>
                <li>Ideal for Puja &amp; Lamps</li>
              </ul>

              <a href="#" className="product-shop-btn">
                Shop Now <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
