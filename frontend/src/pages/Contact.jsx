import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneVolume,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import BaseApi from "../apis/BaseApi";
import { toast } from "react-toastify";


export default function ContactPage({setIsLogin, setModalOpen}) {
  // const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.preferredDate) {
      newErrors.preferredDate = "Please select a date";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login to send message 🔐");

    setIsLogin(true); 
    setModalOpen(true);

    return; // stop form submission
  }

   if (!validate()) return;

    try {
      setLoading(true);

      const response = await BaseApi.post("/message", form);

      if (response.status == 201) {
        console.log(response.data);
        
        toast.success("Enquiry sent successfully ✅");

        setForm({
          fullName: "",
          phone: "",
          email: "",
          preferredDate: "",
          message: "",
        });

        setErrors({});
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="relative bg-primary text-light py-20 px-5 sm:px-10 md:px-20 text-center rounded-b-3xl">
        <h1 className="text-4xl md:text-5xl font-merriweather font-bold mb-3 text-white">
          Contact Us
        </h1>
        <p className="text-sm md:text-base max-w-2xl mx-auto">
          Planning a trip to Sikkim? Get in touch with us for personalized
          travel packages.
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-5 sm:px-10 md:px-0">
        <InfoCard icon={<FaPhoneVolume />} title="Phone" text="+91 8392092399" />
        <InfoCard icon={<FaEnvelope />} title="Email" text="gosikkim@help.com" />
        <InfoCard
          icon={<FaMapMarkerAlt />}
          title="Location"
          text="Gangtok, Sikkim, India"
        />
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-16 mb-16">
        <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-dark mb-6 text-center">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="10-digit phone number"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
          />

          <Input
            label="Select Date"
            name="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={handleChange}
            error={errors.preferredDate}
          />

          <Textarea
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            error={errors.message}
            className=""
          />

          <div className="text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-light hover:bg-secondary"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Map */}
      <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="GoSikkim Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d88.6106!3d27.338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6c64dcf28b8d3%3A0xe36f1ed2e4e603a8!2sGangtok%2C%20Sikkim%2C%20India!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0"
        />
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
    <div className="mx-auto text-primary text-3xl flex justify-center mb-3">{icon}</div>
    <h3 className="font-semibold text-lg text-dark mb-1">{title}</h3>
    <p className="text-sm text-muted">{text}</p>
  </div>
);

const Input = ({
  label,
  error,
  type = "text",
  ...props
}) => (
  <div>
    <label className="block text-sm font-medium text-dark mb-1">
      {label}
    </label>
    <input
      type={type}
      {...props}
      className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-dark mb-1">
      {label}
    </label>
    <textarea
      rows={4}
      {...props}
      className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
