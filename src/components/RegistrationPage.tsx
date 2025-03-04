import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    contactNumber: "",
    role: "",
    agreeToPrivacyPolicy: false, // Add state for checkbox
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;

    // Ensure type is cast correctly for checkboxes
    if (type === "checkbox") {
      // Handle checkbox inputs
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      // Handle other types of inputs (like text, email, etc.)
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      birthday,
      gender,
      email,
      contactNumber,
      role,
      agreeToPrivacyPolicy,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !birthday ||
      !gender ||
      !email ||
      !contactNumber ||
      !role ||
      !agreeToPrivacyPolicy
    ) {
      setError(
        "All fields are required, and you must agree to the privacy policy."
      );
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission or API request
      setTimeout(() => {
        setIsSubmitting(false);
        alert("Registration Successful!");
        // Redirect to login page or elsewhere
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Registration Form</h2> <hr />
        {error && <div style={styles.errorMessage}>{error}</div>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="firstName" style={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="lastName" style={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="birthday" style={styles.label}>
                Birthday
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="gender" style={styles.label}>
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={styles.input}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="contactNumber" style={styles.label}>
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                style={styles.input}
                required
                pattern="^\+63\d{9}$"
                placeholder="+63"
                maxLength={11}
                title="Contact number should be 10 digits and start with +63."
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={{ ...styles.inputGroup, width: "50%" }}>
            {" "}
            {/* Added width: 50% here */}
            <label htmlFor="role" style={styles.label}>
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              style={styles.input}
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <br />

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="agreeToPrivacyPolicy"
              name="agreeToPrivacyPolicy"
              checked={formData.agreeToPrivacyPolicy}
              onChange={handleInputChange}
              style={styles.checkbox}
              required
            />
            <label htmlFor="agreeToPrivacyPolicy" style={styles.checkboxLabel}>
              I understand and agree with privacy policy
            </label>
          </div>

          <div style={styles.buttonGroup}>
            {/* <button type="button" style={styles.cancelButton}>
              Cancel
            </button> */}
            <button
              type="submit"
              style={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        <div style={styles.footer}>
          <p style={styles.footerText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    position: "relative",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  errorMessage: {
    color: "red",
    marginBottom: "10px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },
  inputGroup: {
    flex: 1,
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "18px",
    width: "100%",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  checkbox: {
    marginRight: "10px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#333",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  submitButton: {
    padding: "5px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  footer: {
    marginTop: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default RegistrationPage;
