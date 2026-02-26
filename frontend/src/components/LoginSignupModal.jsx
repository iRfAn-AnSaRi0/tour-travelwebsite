import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import BaseApi from "../apis/BaseApi";

export default function LoginSignupModal({
  isLogin,
  setIsLogin,
  setModalOpen,
  setUser,
}) {
  const [step, setStep] = useState("AUTH"); // AUTH | OTP

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // OTP Timer (5 minutes)
  const [timeLeft, setTimeLeft] = useState(300); // 5 * 60
  const [resendAvailable, setResendAvailable] = useState(false);

  useEffect(() => {
    if (step !== "OTP") return; // only run in OTP step
    if (timeLeft <= 0) {
      setResendAvailable(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let temp = {};

    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      temp.email = "Enter a valid email";

    if (!form.password) temp.password = "Password is required";

    if (!isLogin && !form.fullName.trim())
      temp.fullName = "Full Name is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  /* ================= AUTH SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      if (isLogin) {
        // 🔐 LOGIN
        const res = await BaseApi.post("/login", {
          email: form.email,
          password: form.password,
        });

        // console.log(res.data.message.user.isVerified);
        
        if (res.data.message.user.isVerified === false) {
          localStorage.setItem("pendingEmail", form.email);
          toast.info("Please verify your email first 📩");
          setStep("OTP");
          setTimeLeft(300); // reset timer for OTP
          setResendAvailable(false);
        } else {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.message.user));
          setUser(res.data.message.user);
          toast.success("Logged in successfully ✅");
          setModalOpen(false);
        }
      } else {
        // 📝 SIGNUP
        await BaseApi.post("/register", form);

        localStorage.setItem("pendingEmail", form.email);
        toast.success("OTP sent to your email 📩");
        setStep("OTP");
        setTimeLeft(300);
        setResendAvailable(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong ❌"
      );
      
      
    } finally {
      setLoading(false);
    }
  };

  /* ================= OTP VERIFY ================= */
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Enter valid 6-digit OTP ❌");
      return;
    }

    if (timeLeft <= 0) {
      toast.error("OTP expired ❌ Please resend OTP");
      return;
    }

    try {
      setLoading(true);

      const email = localStorage.getItem("pendingEmail");

      const res = await BaseApi.post("/verify-otp", { email, otp });

      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      localStorage.removeItem("pendingEmail");

      setUser(res.data.data.user);
      toast.success("Account verified & logged in 🎉");
      setModalOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  /* ================= RESEND OTP ================= */
  const handleResendOtp = async () => {
    try {
      setLoading(true);
      const email = localStorage.getItem("pendingEmail");
      await BaseApi.post("/resend-otp", { email });

      toast.success("OTP resent successfully 📩");
      setTimeLeft(300); // reset timer
      setResendAvailable(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to resend OTP ❌");
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-11/12 max-w-md relative">
        {/* Close */}
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* ================= OTP UI ================= */}
        {step === "OTP" ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              Verify OTP
            </h2>

            <p className="text-sm text-center text-gray-600 mb-2">
              OTP sent to <b>{localStorage.getItem("pendingEmail")}</b>
            </p>

            <p className="text-xs text-center text-gray-500 mb-4">
              Expires in: <b>{formatTime(timeLeft)}</b>
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                className="w-full border rounded-lg px-4 py-2 text-center text-black text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                disabled={loading || timeLeft <= 0}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  loading || timeLeft <= 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary text-light hover:bg-secondary"
                }`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            {resendAvailable && (
              <button
                onClick={handleResendOtp}
                disabled={loading}
                className="w-full mt-2 py-2 rounded-lg font-semibold bg-secondary text-light hover:bg-primary transition"
              >
                {loading ? "Resending..." : "Resend OTP"}
              </button>
            )}
          </>
        ) : (
          /* ================= LOGIN / SIGNUP UI ================= */
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              {isLogin ? "Login" : "Create Account"}
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <Input
                  label="Full Name"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                />
              )}

              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
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
                {loading
                  ? "Please wait..."
                  : isLogin
                  ? "Login"
                  : "Signup"}
              </button>
            </form>

            <p className="text-sm text-blue-800 text-center mt-4">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary cursor-pointer font-semibold"
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Reusable Input ---------- */
const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-dark mb-1">{label}</label>
    <input
      {...props}
      className={`w-full border rounded-lg px-4 py-2 text-dark focus:outline-none focus:ring-2 focus:ring-primary ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

