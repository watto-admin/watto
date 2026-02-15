"use client";

import { useState, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { submitContactForm, ActionState } from "@/app/actions/contact";

type FormType = "advertise" | "info" | "buy" | null;

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ContactFormSection() {
  const [selectedForm, setSelectedForm] = useState<FormType>(null);

  const buttons = [
    { id: "advertise", label: "Advertise with us" },
    { id: "info", label: "Get more info" },
    { id: "buy", label: "Buy our bottles" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Button Group */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() =>
              setSelectedForm(
                selectedForm === btn.id ? null : (btn.id as FormType),
              )
            }
            className={`
              relative px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 w-full sm:w-auto
              border border-white/10 overflow-hidden group
              ${
                selectedForm === btn.id
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-neutral-900/50 text-white hover:bg-neutral-800 hover:border-white/30"
              }
            `}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {btn.label}
              <motion.span
                animate={{ rotate: selectedForm === btn.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </span>
          </button>
        ))}
      </div>

      {/* Dynamic Form Container */}
      <AnimatePresence mode="wait">
        {selectedForm && (
          <motion.div
            key={selectedForm}
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full overflow-hidden"
          >
            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              {selectedForm === "advertise" && <AdvertiseForm />}
              {selectedForm === "info" && <InfoForm />}
              {selectedForm === "buy" && <BuyBottlesForm />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Reusable Components
const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  error,
}: {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  error?: string[];
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-all ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-blue-500 focus:ring-blue-500/50"}`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-400 text-sm ml-1">{error[0]}</p>}
  </div>
);

const SelectField = ({
  label,
  options,
  name,
  error,
}: {
  label: string;
  options: string[];
  name: string;
  error?: string[];
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <div className="relative">
      <select
        id={name}
        name={name}
        defaultValue=""
        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-1 transition-all cursor-pointer ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-blue-500 focus:ring-blue-500/50"}`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-neutral-900">
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
    {error && <p className="text-red-400 text-sm ml-1">{error[0]}</p>}
  </div>
);

const TextAreaField = ({
  label,
  placeholder,
  rows = 4,
  name,
  error,
}: {
  label: string;
  placeholder: string;
  rows?: number;
  name: string;
  error?: string[];
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={rows}
      className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 transition-all resize-none ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/50" : "border-white/10 focus:border-blue-500 focus:ring-blue-500/50"}`}
      placeholder={placeholder}
    />
    {error && <p className="text-red-400 text-sm ml-1">{error[0]}</p>}
  </div>
);

const SubmitButton = ({ text }: { text: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          {text}
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
};

// Specific Forms
function AdvertiseForm() {
  const [state, action] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="type" value="advertise" />
      <input
        type="text"
        name="honeypot"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="name"
          label="Name"
          placeholder="Your name"
          error={state.errors?.name}
        />
        <InputField
          name="company"
          label="Company"
          placeholder="Company name"
          error={state.errors?.company}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="work@company.com"
          error={state.errors?.email}
        />
        <SelectField
          name="budget"
          label="Campaign Budget"
          options={["$5k - $10k", "$10k - $50k", "$50k+", "Not sure yet"]}
          error={state.errors?.budget}
        />
      </div>
      <TextAreaField
        name="goals"
        label="Campaign Goals"
        placeholder="Tell us about your target audience and goals..."
        error={state.errors?.goals}
      />

      {state.message && (
        <div
          className={`p-4 rounded-lg ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton text="Request Media Kit" />
    </form>
  );
}

function InfoForm() {
  const [state, action] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="type" value="info" />
      <input
        type="text"
        name="honeypot"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="name"
          label="Name"
          placeholder="Your name"
          error={state.errors?.name}
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={state.errors?.email}
        />
      </div>
      <SelectField
        name="topic"
        label="Topic"
        options={["General Inquiry", "Press", "Careers", "Other"]}
        error={state.errors?.topic}
      />
      <TextAreaField
        name="message"
        label="Message"
        placeholder="How can we help you?"
        error={state.errors?.message}
      />

      {state.message && (
        <div
          className={`p-4 rounded-lg ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton text="Send Message" />
    </form>
  );
}

function BuyBottlesForm() {
  const [state, action] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="type" value="buy" />
      <input
        type="text"
        name="honeypot"
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="name"
          label="Name"
          placeholder="Your name"
          error={state.errors?.name}
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={state.errors?.email}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          name="quantity"
          label="Quantity"
          options={["1-10 Bottles", "10-50 Bottles", "50+ Bottles (Bulk)"]}
          error={state.errors?.quantity}
        />
        <InputField
          name="shipping_country"
          label="Shipping Country"
          placeholder="United States"
          error={state.errors?.shipping_country}
        />
      </div>
      <TextAreaField
        name="notes"
        label="Additional Notes"
        placeholder="Any special requests or delivery instructions?"
        rows={3}
        error={state.errors?.notes}
      />

      {state.message && (
        <div
          className={`p-4 rounded-lg ${state.success ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
        >
          {state.message}
        </div>
      )}

      <SubmitButton text="Place Inquiry" />
    </form>
  );
}
