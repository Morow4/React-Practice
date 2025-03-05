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
    password: "",
    confirmPassword: "",
    agreeToPrivacyPolicy: false, // Add state for checkbox
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    // Ensure type is cast correctly for checkboxes
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error message as user modifies input
    if (error) {
      setError(null);
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
      password,
      confirmPassword,
      agreeToPrivacyPolicy,
    } = formData;

    // Check if all fields are filled
    if (
      !firstName ||
      !lastName ||
      !birthday ||
      !gender ||
      !email ||
      !contactNumber ||
      !password ||
      !confirmPassword ||
      !agreeToPrivacyPolicy
    ) {
      setError(
        "All fields are required, and you must agree to the privacy policy."
      );
      return false;
    }

    // Contact number validation (must start with 09 and have 11 digits)
    const contactNumberPattern = /^09\d{9}$/;
    if (!contactNumberPattern.test(contactNumber)) {
      setError("Contact number must be 11 digits and start with 09.");
      return false;
    }

    // Password validation: minimum 8 characters, 1 uppercase, and 1 number
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters long, include 1 uppercase letter, and 1 number."
      );
      return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return false;
    }

    setError(null); // Clear error if validation passes
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
                {/* <option value="other">Other</option> */}
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
                pattern="^09\d{9}$"
                placeholder="09XXXXXXXXX"
                maxLength={11}
                title="Contact number must be 11 digits and start with 09."
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

          <div style={styles.row}>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={styles.input}
                required
              />
            </div>
          </div>

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
