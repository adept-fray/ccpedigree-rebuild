function App() {
  return (
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <header>
          <h1>🐶 CCPedigree</h1>
        </header>

        <section style={{ margin: "3rem 0" }}>
          <h2>Welcome to CCPedigree</h2>
          <p>Track and celebrate your dog’s story.</p>
          <img
            src="/dog-icon.svg"
            alt="Dog Icon"
            style={{ width: "100px", marginTop: "1rem" }}
          />
        </section>

        <section>
          <p>
            CCPedigree is being rebuilt from the ground up. You’ll soon be able
            to sign up, add your dogs, and preserve their legacy.
          </p>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <button disabled>Coming Soon</button>
        </section>

        <footer
          style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#777" }}
        >
          © 2025 CCPedigree. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
