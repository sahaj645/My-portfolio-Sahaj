import React from 'react';

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting, submitStatus }) => {
  const getButtonContent = () => {
    switch (submitStatus) {
      case 'loading':
        return (
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <span className="animate-pulse">Sending Message</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-scale-in">
                <svg className="w-4 h-4 text-green-500 animate-draw-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="animate-slide-up">Message Sent Successfully!</span>
            <div className="animate-confetti">🎉</div>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-wobble">
              <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="animate-shake-text">Please fill all fields</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center gap-2 group">
            <span className="group-hover:animate-wave">Send Message</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        );
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "w-full px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transform transition-all duration-500 relative overflow-hidden";
    
    switch (submitStatus) {
      case 'loading':
        return `${baseStyles} bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-200 animate-gradient text-white shadow-lg animate-pulse-glow`;
      case 'success':
        return `${baseStyles} bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-white shadow-lg shadow-green-200 animate-success-bounce`;
      case 'error':
        return `${baseStyles} bg-gradient-to-r from-red-400 via-pink-500 to-red-600 text-white shadow-lg shadow-red-200 animate-error-shake`;
      default:
        return `${baseStyles} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:animate-button-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`;
    }
  };

  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50 transition-all duration-700 ${
        submitStatus === 'success' ? 'animate-success-glow ring-2 ring-green-400 ring-opacity-50' : 
        submitStatus === 'error' ? 'animate-error-glow ring-2 ring-red-400 ring-opacity-50' : 
        submitStatus === 'loading' ? 'animate-loading-glow ring-2 ring-blue-400 ring-opacity-50' : ''
      }`}
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
        Send a Message
      </h3>
      
      {/* Animated Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-4 sm:mb-6 p-4 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-xl animate-slide-down-bounce relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-spin-slow">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-green-700 font-semibold text-sm sm:text-base animate-type-writer">
                🚀 Message Sent Successfully!
              </p>
              <p className="text-green-600 text-xs sm:text-sm animate-fade-in-delay">
                I'll get back to you soon!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4 sm:space-y-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
              submitStatus === 'error' && !formData.name ? 
              'border-red-300 focus:ring-red-500 animate-field-error' : 
              'border-gray-200 focus:ring-blue-500 focus:animate-field-focus'
            }`}
            placeholder="Your Name"
          />
          {submitStatus === 'error' && !formData.name && (
            <div className="absolute -bottom-5 left-0 text-xs text-red-500 animate-slide-up">
              ⚠️ Name is required
            </div>
          )}
        </div>
        
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed ${
              submitStatus === 'error' && !formData.email ? 
              'border-red-300 focus:ring-red-500 animate-field-error' : 
              'border-gray-200 focus:ring-blue-500 focus:animate-field-focus'
            }`}
            placeholder="your.email@example.com"
          />
          {submitStatus === 'error' && !formData.email && (
            <div className="absolute -bottom-5 left-0 text-xs text-red-500 animate-slide-up">
              ⚠️ Email is required
            </div>
          )}
        </div>
        
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            disabled={isSubmitting}
            className={`w-full px-3 py-2.5 sm:px-4 sm:py-3 border rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
              submitStatus === 'error' && !formData.message ? 
              'border-red-300 focus:ring-red-500 animate-field-error' : 
              'border-gray-200 focus:ring-blue-500 focus:animate-field-focus'
            }`}
            placeholder="Your Message"
          ></textarea>
          {submitStatus === 'error' && !formData.message && (
            <div className="absolute -bottom-5 left-0 text-xs text-red-500 animate-slide-up">
              ⚠️ Message is required
            </div>
          )}
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || submitStatus === 'success'}
          className={getButtonStyles()}
        >
          {getButtonContent()}
        </button>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes scale-in {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes draw-check {
          0% { stroke-dasharray: 0 24; }
          100% { stroke-dasharray: 24 0; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-down-bounce {
          0% { transform: translateY(-20px) scale(0.95); opacity: 0; }
          50% { transform: translateY(5px) scale(1.02); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(1.1); }
        }
        
        @keyframes shake-text {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        
        @keyframes confetti {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(147, 51, 234, 0.7), 0 0 40px rgba(59, 130, 246, 0.3); }
        }
        
        @keyframes success-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes error-shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-3px) rotate(-1deg); }
          75% { transform: translateX(3px) rotate(1deg); }
        }
        
        @keyframes field-error {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        
        @keyframes field-focus {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 8px 25px rgba(147, 51, 234, 0.6); }
        }
        
        @keyframes success-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        
        @keyframes error-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.6); }
        }
        
        @keyframes loading-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.7); }
        }
        
        @keyframes type-writer {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .bg-size-200 { background-size: 200% 200%; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-scale-in { animation: scale-in 0.6s ease-out; }
        .animate-draw-check { animation: draw-check 0.5s ease-out 0.2s both; }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        .animate-slide-down-bounce { animation: slide-down-bounce 0.6s ease-out; }
        .animate-wobble { animation: wobble 0.6s ease-in-out; }
        .animate-shake-text { animation: shake-text 0.5s ease-in-out; }
        .animate-confetti { animation: confetti 1s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-success-bounce { animation: success-bounce 0.6s ease-in-out; }
        .animate-error-shake { animation: error-shake 0.5s ease-in-out; }
        .animate-field-error { animation: field-error 0.3s ease-in-out; }
        .animate-field-focus { animation: field-focus 0.3s ease-in-out; }
        .animate-button-glow { animation: button-glow 1.5s ease-in-out infinite; }
        .animate-success-glow { animation: success-glow 2s ease-in-out infinite; }
        .animate-error-glow { animation: error-glow 1s ease-in-out infinite; }
        .animate-loading-glow { animation: loading-glow 1.5s ease-in-out infinite; }
        .animate-type-writer { animation: type-writer 1s steps(30) both; }
        .animate-fade-in-delay { animation: fade-in-delay 0.8s ease-out 0.5s both; }
        .animate-wave { animation: wave 0.3s ease-in-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
      `}</style>
    </div>
  );
};

export default ContactForm;









// import React, { useState } from 'react';

// const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting, submitStatus }) => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   // Trigger confetti animation on success
//   React.useEffect(() => {
//     if (submitStatus === 'success') {
//       setShowConfetti(true);
//       setTimeout(() => setShowConfetti(false), 3000);
//     }
//   }, [submitStatus]);

//   const getButtonContent = () => {
//     switch (submitStatus) {
//       case 'loading':
//         return (
//           <div className="flex items-center justify-center gap-3">
//             <div className="relative">
//               <div className="w-5 h-5 border-2 border-white/30 rounded-full animate-spin"></div>
//               <div className="absolute top-0 left-0 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//             </div>
//             <span className="animate-pulse">Sending Message</span>
//             <div className="flex gap-1">
//               <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
//               <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
//               <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
//             </div>
//           </div>
//         );
//       case 'success':
//         return (
//           <div className="flex items-center justify-center gap-3">
//             <div className="relative">
//               <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center animate-scale-in">
//                 <svg className="w-4 h-4 text-green-500 animate-draw-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//             </div>
//             <span className="animate-slide-up">Message Sent Successfully!</span>
//             <div className="animate-confetti">🎉</div>
//           </div>
//         );
//       case 'error':
//         return (
//           <div className="flex items-center justify-center gap-2">
//             <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center animate-wobble">
//               <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <span className="animate-shake-text">Please fill all fields</span>
//           </div>
//         );
//       default:
//         return (
//           <div className="flex items-center justify-center gap-2 group">
//             <span className="group-hover:animate-wave">Send Message</span>
//             <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//             </svg>
//           </div>
//         );
//     }
//   };

//   const getButtonStyles = () => {
//     const baseStyles = "w-full px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transform transition-all duration-500 relative overflow-hidden";
    
//     switch (submitStatus) {
//       case 'loading':
//         return `${baseStyles} bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-200 animate-gradient text-white shadow-lg animate-pulse-glow`;
//       case 'success':
//         return `${baseStyles} bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-white shadow-lg shadow-green-200 animate-success-bounce cursor-pointer hover:from-green-500 hover:via-emerald-600 hover:to-green-700`;
//       case 'error':
//         return `${baseStyles} bg-gradient-to-r from-red-400 via-pink-500 to-red-600 text-white shadow-lg shadow-red-200 animate-error-shake`;
//       default:
//         return `${baseStyles} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:animate-button-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`;
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     handleSubmit();
//   };

//   const handleSendAnother = () => {
//     // Reset only the form data, keep the card visible
//     handleChange({ target: { name: 'name', value: '' } });
//     handleChange({ target: { name: 'email', value: '' } });
//     handleChange({ target: { name: 'message', value: '' } });
//   };

//   return (
//     <div className="relative">
//       {/* Confetti Background Effect */}
//       {showConfetti && (
//         <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//           {[...Array(50)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-confetti-fall"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${3 + Math.random() * 2}s`
//               }}
//             >
//               {['🎉', '✨', '🎊', '⭐', '💫'][Math.floor(Math.random() * 5)]}
//             </div>
//           ))}
//         </div>
//       )}

//       <div
//         className={`bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/60 transition-all duration-700 relative overflow-hidden ${
//           submitStatus === 'success' ? 'animate-success-glow ring-4 ring-green-400 ring-opacity-40 bg-gradient-to-br from-green-50/50 to-emerald-50/50' : 
//           submitStatus === 'error' ? 'animate-error-glow ring-4 ring-red-400 ring-opacity-40 bg-gradient-to-br from-red-50/50 to-pink-50/50' : 
//           submitStatus === 'loading' ? 'animate-loading-glow ring-4 ring-blue-400 ring-opacity-40 bg-gradient-to-br from-blue-50/50 to-purple-50/50' : 
//           'hover:shadow-3xl hover:scale-[1.02] hover:bg-white/95'
//         }`}
//         style={{
//           minHeight: 'fit-content',
//           position: 'relative',
//           zIndex: 10
//         }}
//       >
//         {/* Animated Background Patterns */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient-slow"></div>
//           {submitStatus === 'success' && (
//             <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-emerald-200 to-green-200 animate-success-wave"></div>
//           )}
//         </div>

//         <div className="relative z-10">
//           <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 sm:mb-6">
//             {submitStatus === 'success' ? '🚀 Message Sent!' : 'Send a Message'}
//           </h3>
          
//           {/* Enhanced Success Message */}
//           {submitStatus === 'success' && (
//             <div className="mb-6 p-6 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border-2 border-green-200 rounded-2xl animate-slide-down-bounce relative overflow-hidden shadow-lg">
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
//               <div className="relative z-10">
//                 <div className="flex items-center gap-4 mb-3">
//                   <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
//                     <svg className="w-6 h-6 text-white animate-draw-check" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-green-800 font-bold text-lg animate-type-writer">
//                       Message Delivered Successfully! 🎉
//                     </p>
//                     <p className="text-green-600 text-sm animate-fade-in-delay">
//                       Thank you for reaching out! I'll get back to you soon.
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-3 mt-4">
//                   <button
//                     onClick={handleSendAnother}
//                     className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md"
//                   >
//                     ✉️ Send Another Message
//                   </button>
//                   <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium animate-pulse">
//                     📱 Check your email for confirmation
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
//             <div className="relative group">
//               <label
//                 htmlFor="name"
//                 className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600"
//               >
//                 👤 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${
//                   submitStatus === 'error' && !formData.name ? 
//                   'border-red-300 focus:ring-red-200 animate-field-error shadow-lg shadow-red-100' : 
//                   'border-gray-200 focus:ring-blue-200 focus:border-blue-500 focus:animate-field-focus hover:border-gray-300 shadow-md hover:shadow-lg'
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {submitStatus === 'error' && !formData.name && (
//                 <div className="absolute -bottom-6 left-0 text-xs text-red-500 animate-slide-up font-medium flex items-center gap-1">
//                   <span className="animate-bounce">⚠️</span> Name is required
//                 </div>
//               )}
//             </div>
            
//             <div className="relative group">
//               <label
//                 htmlFor="email"
//                 className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600"
//               >
//                 📧 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${
//                   submitStatus === 'error' && !formData.email ? 
//                   'border-red-300 focus:ring-red-200 animate-field-error shadow-lg shadow-red-100' : 
//                   'border-gray-200 focus:ring-blue-200 focus:border-blue-500 focus:animate-field-focus hover:border-gray-300 shadow-md hover:shadow-lg'
//                 }`}
//                 placeholder="your.email@example.com"
//               />
//               {submitStatus === 'error' && !formData.email && (
//                 <div className="absolute -bottom-6 left-0 text-xs text-red-500 animate-slide-up font-medium flex items-center gap-1">
//                   <span className="animate-bounce">⚠️</span> Email is required
//                 </div>
//               )}
//             </div>
            
//             <div className="relative group">
//               <label
//                 htmlFor="message"
//                 className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-blue-600"
//               >
//                 💬 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 disabled={isSubmitting}
//                 className={`w-full px-4 py-3 sm:px-5 sm:py-4 border-2 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-4 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${
//                   submitStatus === 'error' && !formData.message ? 
//                   'border-red-300 focus:ring-red-200 animate-field-error shadow-lg shadow-red-100' : 
//                   'border-gray-200 focus:ring-blue-200 focus:border-blue-500 focus:animate-field-focus hover:border-gray-300 shadow-md hover:shadow-lg'
//                 }`}
//                 placeholder="Tell me about your project, idea, or just say hello! ✨"
//               ></textarea>
//               {submitStatus === 'error' && !formData.message && (
//                 <div className="absolute -bottom-6 left-0 text-xs text-red-500 animate-slide-up font-medium flex items-center gap-1">
//                   <span className="animate-bounce">⚠️</span> Message is required
//                 </div>
//               )}
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={getButtonStyles()}
//             >
//               {getButtonContent()}
//             </button>
//           </form>

//           {/* Additional Success Actions */}
//           {submitStatus === 'success' && (
//             <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 animate-fade-in-up">
//               <p className="text-center text-sm text-gray-600 mb-3">
//                 🌟 What's next? Connect with me on social media!
//               </p>
//               <div className="flex justify-center gap-3">
//                 <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-105 transform">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//                 </button>
//                 <button className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 hover:scale-105 transform">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <style jsx>{`
//           @keyframes gradient {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
          
//           @keyframes gradient-slow {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
          
//           @keyframes scale-in {
//             0% { transform: scale(0) rotate(0deg); }
//             50% { transform: scale(1.2) rotate(180deg); }
//             100% { transform: scale(1) rotate(360deg); }
//           }
          
//           @keyframes draw-check {
//             0% { stroke-dasharray: 0 24; }
//             100% { stroke-dasharray: 24 0; }
//           }
          
//           @keyframes slide-up {
//             0% { transform: translateY(10px); opacity: 0; }
//             100% { transform: translateY(0); opacity: 1; }
//           }
          
//           @keyframes slide-down-bounce {
//             0% { transform: translateY(-30px) scale(0.95); opacity: 0; }
//             50% { transform: translateY(8px) scale(1.02); }
//             100% { transform: translateY(0) scale(1); opacity: 1; }
//           }
          
//           @keyframes wobble {
//             0%, 100% { transform: rotate(0deg); }
//             25% { transform: rotate(-8deg) scale(1.1); }
//             75% { transform: rotate(8deg) scale(1.1); }
//           }
          
//           @keyframes shake-text {
//             0%, 100% { transform: translateX(0); }
//             10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
//             20%, 40%, 60%, 80% { transform: translateX(3px); }
//           }
          
//           @keyframes confetti {
//             0% { transform: scale(1) rotate(0deg); }
//             50% { transform: scale(1.5) rotate(180deg); }
//             100% { transform: scale(1) rotate(360deg); }
//           }
          
//           @keyframes confetti-fall {
//             0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
//             100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
//           }
          
//           @keyframes shimmer {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100%); }
//           }
          
//           @keyframes pulse-glow {
//             0%, 100% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.6); }
//             50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 50px rgba(59, 130, 246, 0.4); }
//           }
          
//           @keyframes success-bounce {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.05); }
//           }
          
//           @keyframes bounce-slow {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-8px); }
//           }
          
//           @keyframes error-shake {
//             0%, 100% { transform: translateX(0) rotate(0deg); }
//             25% { transform: translateX(-5px) rotate(-2deg); }
//             75% { transform: translateX(5px) rotate(2deg); }
//           }
          
//           @keyframes field-error {
//             0%, 100% { transform: translateX(0); }
//             25% { transform: translateX(-4px); }
//             75% { transform: translateX(4px); }
//           }
          
//           @keyframes field-focus {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.02); }
//             100% { transform: scale(1); }
//           }
          
//           @keyframes button-glow {
//             0%, 100% { box-shadow: 0 4px 20px rgba(59, 130, 246, 0.5); }
//             50% { box-shadow: 0 8px 30px rgba(147, 51, 234, 0.7); }
//           }
          
//           @keyframes success-glow {
//             0%, 100% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }
//             50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.7); }
//           }
          
//           @keyframes error-glow {
//             0%, 100% { box-shadow: 0 0 25px rgba(239, 68, 68, 0.4); }
//             50% { box-shadow: 0 0 45px rgba(239, 68, 68, 0.7); }
//           }
          
//           @keyframes loading-glow {
//             0%, 100% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.5); }
//             50% { box-shadow: 0 0 45px rgba(147, 51, 234, 0.8); }
//           }
          
//           @keyframes type-writer {
//             0% { width: 0; overflow: hidden; }
//             100% { width: 100%; overflow: visible; }
//           }
          
//           @keyframes fade-in-delay {
//             0% { opacity: 0; transform: translateY(15px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
          
//           @keyframes fade-in-up {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
          
//           @keyframes wave {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-3px); }
//           }
          
//           @keyframes text-shimmer {
//             0% { background-position: -200% center; }
//             100% { background-position: 200% center; }
//           }
          
//           @keyframes success-wave {
//             0% { transform: translateX(-100%) skewX(-15deg); }
//             100% { transform: translateX(100%) skewX(-15deg); }
//           }
          
//           .bg-size-200 { background-size: 200% 200%; }
//           .animate-gradient { animation: gradient 3s ease infinite; }
//           .animate-gradient-slow { animation: gradient-slow 8s ease infinite; }
//           .animate-scale-in { animation: scale-in 0.8s ease-out; }
//           .animate-draw-check { animation: draw-check 0.6s ease-out 0.3s both; }
//           .animate-slide-up { animation: slide-up 0.4s ease-out; }
//           .animate-slide-down-bounce { animation: slide-down-bounce 0.8s ease-out; }
//           .animate-wobble { animation: wobble 0.8s ease-in-out; }
//           .animate-shake-text { animation: shake-text 0.6s ease-in-out; }
//           .animate-confetti { animation: confetti 1.5s ease-in-out infinite; }
//           .animate-confetti-fall { animation: confetti-fall linear forwards; }
//           .animate-shimmer { animation: shimmer 2.5s ease-in-out infinite; }
//           .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
//           .animate-success-bounce { animation: success-bounce 0.8s ease-in-out; }
//           .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
//           .animate-error-shake { animation: error-shake 0.6s ease-in-out; }
//           .animate-field-error { animation: field-error 0.4s ease-in-out; }
//           .animate-field-focus { animation: field-focus 0.4s ease-in-out; }
//           .animate-button-glow { animation: button-glow 2s ease-in-out infinite; }
//           .animate-success-glow { animation: success-glow 2.5s ease-in-out infinite; }
//           .animate-error-glow { animation: error-glow 1.5s ease-in-out infinite; }
//           .animate-loading-glow { animation: loading-glow 2s ease-in-out infinite; }
//           .animate-type-writer { animation: type-writer 1.5s steps(40) both; }
//           .animate-fade-in-delay { animation: fade-in-delay 1s ease-out 0.6s both; }
//           .animate-fade-in-up { animation: fade-in-up 0.6s ease-out 0.3s both; }
//           .animate-wave { animation: wave 0.4s ease-in-out; }
//           .animate-text-shimmer { 
//             background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
//             background-size: 200% auto;
//             animation: text-shimmer 3s linear infinite;
//           }
//           .animate-success-wave { animation: success-wave 1.5s ease-out; }
          
//           .shadow-3xl {
//             box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5);
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;