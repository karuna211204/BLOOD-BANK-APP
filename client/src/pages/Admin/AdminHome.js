import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Main content section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "50px",
            marginBottom: "20px", // reduced to bring quote up
          }}
        >
          {/* Text Section */}
          <div style={{ flex: 1.2 }}>
            <h1 className="fw-bold text-dark mb-3" style={{ fontSize: "2rem" }}>
              Welcome Admin{" "}
              <span className="text-success">{user?.name?.toUpperCase()}</span>
            </h1>

            <h5 className="text-muted mb-4" style={{ fontSize: "1.5rem" }}>
              Manage Blood Bank App
            </h5>

            <p className="text-secondary mb-3" style={{ fontSize: "1.2rem" }}>
              This dashboard helps you manage donors, hospitals, and
              organizations easily. You can add, edit, and view all records
              anytime.
            </p>

            <p className="text-secondary mb-3" style={{ fontSize: "1.2rem" }}>
              Use the menu on the left to switch between sections. All your
              changes are saved instantly and safely.
            </p>

            <p className="text-secondary mb-3" style={{ fontSize: "1.2rem" }}>
              Your work helps people who need blood. Keeping records up to date
              makes sure blood is available when it is needed the most.
            </p>
          </div>

          {/* Image Section */}
          <div style={{ flex: 0.8 }}>
            <img
              src="/assets/images/banner6.webp"
              alt="Blood Bank Admin"
              className="img-fluid"
              style={{
                maxHeight: "100vh",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Quote Section */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f8fbff", // original soft blue background
            borderLeft: "6px solid #007bff", // soft blue accent
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "bold", // bold text
            color: "#004085", // deep blue for contrast
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto 30px auto",
          }}
        >
          “The life you save could be your own one day.”
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
