// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function Events() {
//   // -----------------------------
//   // VALIDATION STATE
//   // -----------------------------
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [countryCode, setCountryCode] = useState("UAE (+971)");
//   const [mobile, setMobile] = useState("");
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   // -----------------------------
//   // VALIDATION HANDLER
//   // -----------------------------
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     let validationErrors: { [key: string]: string } = {};

//     if (!fullName.trim()) validationErrors.fullName = "Full Name is required";
//     if (!email.trim()) {
//       validationErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       validationErrors.email = "Enter a valid email";
//     }

//     if (!mobile.trim()) {
//       validationErrors.mobile = "Mobile number is required";
//     } else if (!/^[0-9]{6,15}$/.test(mobile)) {
//       validationErrors.mobile = "Enter a valid mobile number";
//     }

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <>
//       <div className="relative w-screen h-[76vh] ml-0 mt-23.5  flex items-center justify-center">
//         {/* Background Image (Fixed + Always Visible) */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1920&q=80')",
//           }}
//         ></div>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Main Container */}
//         <div className="relative w-full max-w-[1400px] px-10 flex items-center justify-between gap-2">
//           {/* LEFT HEADING SECTION */}
//           <motion.div
//             className="text-white max-w-[750px]"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h1 className="text-[40px] font-bold leading-[1.1] tracking-wide mb-3">
//               Embrace the Extraordinary at Our <br />
//               Signature Events
//             </h1>
//           </motion.div>

//           {/* RIGHT FORM CARD */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             className="
//               w-[420px]
//               p-10
//               rounded-xl
//               shadow-2xl
//               bg-[#00102C]
//               backdrop-blur-md
//               flex flex-col items-center
//               mt-10
//               backdrop-filter: blur(10px); border: none;
//             "
//           >
//             {/* TITLE CENTERED */}
//             <h2 className="text-white text-2xl mb-3 font-railway font-sans w-70 tracking-wide text-center">
//               Register your interest
//             </h2>

//             {/* FORM */}
//             <form className="w-full space-y-5" onSubmit={handleSubmit}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="w-full p-3 bg-white text-black placeholder-black border border-white/30 focus:border-white outline-none"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 bg-white text-black placeholder-black border border-white/30 focus:border-white outline-none"
//                 />
//                 {errors.email && (
//                   <p className="text-red-400 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <div className="flex gap-3">
//                   <select
//                     value={countryCode}
//                     onChange={(e) => setCountryCode(e.target.value)}
//                     className="w-1/2 p-3 bg-white text-black border border-white/30 outline-none"
//                   >
//                     <option>UAE (+971)</option>
//                     <option>India (+91)</option>
//                     <option>Qatar (+974)</option>
//                     <option>Saudi (+966)</option>
//                   </select>

//                   <input
//                     type="text"
//                     placeholder="Mobile"
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                     className="w-1/2 p-3 bg-white text-black placeholder-black border border-white/30 focus:border-black/35 outline-none"
//                   />
//                 </div>
//                 {errors.mobile && (
//                   <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full p-3 bg-[#001637] text-white mb-5 font-semibold hover:bg-gray-100 hover:text-black transition border border-white hover:border-black"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>

//       {/* BOTTOM INFO SECTION */}
//       <div className="w-screen bg-[#e6dccf] mt-0 pt-5 pb-4 pl-60 pr-75">
//         <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between px-10">
//           <div className="w-full sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
//             <h3 className="text-xl font-semibold text-[#444444]">
//               Azizi Developments
//             </h3>
//             <p className="text-sm text-[#444444] mt-1">
//               Leading Developer in Dubai
//             </p>
//           </div>

//           <div className="w-full sm:w-1/2 text-center sm:text-right">
//             <h3 className="text-xl font-semibold mr-20 text-[#444444]">Type</h3>
//             <p className="text-sm text-[#444444] mt-1 mr-5">
//               Residential & Commercial
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ValidationErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
}

export default function Events() {
  // -----------------------------
  // VALIDATION STATE
  // -----------------------------
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("UAE (+971)");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  // -----------------------------
  // VALIDATION HANDLER
  // -----------------------------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: ValidationErrors = {};

    if (!fullName.trim()) validationErrors.fullName = "Full Name is required";
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Enter a valid email";
    }

    if (!mobile.trim()) {
      validationErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{6,15}$/.test(mobile)) {
      validationErrors.mobile = "Enter a valid mobile number";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <div className="relative w-screen h-[76vh] ml-0 mt-23.5  flex items-center justify-center">
        {/* Background Image (Fixed + Always Visible) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1920&q=80')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Container */}
        <div className="relative w-full max-w-[1400px] px-10 flex items-center justify-between gap-2">
          {/* LEFT HEADING SECTION */}
          <motion.div
            className="text-white max-w-[750px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[40px] font-bold leading-[1.1] tracking-wide mb-3">
              Embrace the Extraordinary at Our <br />
              Signature Events
            </h1>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              w-[420px]
              p-10
              rounded-xl
              shadow-2xl
              bg-[#00102C]
              backdrop-blur-md
              flex flex-col items-center
              mt-10
              backdrop-filter: blur(10px); border: none;
            "
          >
            {/* TITLE CENTERED */}
            <h2 className="text-white text-2xl mb-3 font-railway font-sans w-70 tracking-wide text-center">
              Register your interest
            </h2>

            {/* FORM */}
            <form className="w-full space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 bg-white text-black placeholder-black border border-white/30 focus:border-white outline-none"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-white text-black placeholder-black border border-white/30 focus:border-white outline-none"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex gap-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-1/2 p-3 bg-white text-black border border-white/30 outline-none"
                  >
                    <option>UAE (+971)</option>
                    <option>India (+91)</option>
                    <option>Qatar (+974)</option>
                    <option>Saudi (+966)</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-1/2 p-3 bg-white text-black placeholder-black border border-white/30 focus:border-black/35 outline-none"
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-[#001637] text-white mb-5 font-semibold hover:bg-gray-100 hover:text-black transition border border-white hover:border-black"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM INFO SECTION */}
      <div className="w-screen bg-[#e6dccf] mt-0 pt-5 pb-4 pl-60 pr-75">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between px-10">
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold text-[#444444]">
              Azizi Developments
            </h3>
            <p className="text-sm text-[#444444] mt-1">
              Leading Developer in Dubai
            </p>
          </div>

          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <h3 className="text-xl font-semibold mr-20 text-[#444444]">Type</h3>
            <p className="text-sm text-[#444444] mt-1 mr-5">
              Residential & Commercial
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
