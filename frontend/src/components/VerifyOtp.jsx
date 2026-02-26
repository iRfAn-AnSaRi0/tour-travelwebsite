import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BaseApi from "../apis/BaseApi";

export default function VerifyOtp({ setUser }) {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Get email automatically
  useEffect(() => {
    const storedEmail = localStorage.getItem("pendingEmail");
    if (!storedEmail) {
      toast.error("Email not found. Please signup again ❌");
    } else {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      toast.error("Enter valid 6-digit OTP ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await BaseApi.post("/verify-otp", {
        email,
        otp,
      });

      // 🔥 AUTO LOGIN AFTER OTP VERIFY
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.message.user));
      localStorage.removeItem("pendingEmail");

      setUser(res.data.message.user);

      toast.success("Email verified & logged in 🎉");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Invalid or expired OTP ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-11/12 max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Verify OTP
        </h2>

        <p className="text-sm text-center text-gray-600 mb-6">
          OTP sent to <b>{email}</b>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="w-full border rounded-lg px-4 py-2 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary text-light hover:bg-secondary"
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
}
