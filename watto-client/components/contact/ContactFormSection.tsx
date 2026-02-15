"use client";

import { useActionState } from "react";
import { ChevronDown, Send, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { submitContactForm, ActionState } from "@/app/actions/contact";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ContactFormSection() {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Form Container with Liquid Glass Effect */}
      <div className="w-full overflow-hidden">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 transition-all duration-300">
          <InfoForm />
        </div>
      </div>
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
  defaultValue,
}: {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  error?: string[];
  defaultValue?: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <input
      key={defaultValue} // Force re-render when defaultValue changes
      id={name}
      name={name}
      type={type}
      defaultValue={defaultValue || ""}
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
  defaultValue,
}: {
  label: string;
  options: string[];
  name: string;
  error?: string[];
  defaultValue?: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <div className="relative">
      <select
        key={defaultValue} // Force re-render when defaultValue changes
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
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
  defaultValue,
}: {
  label: string;
  placeholder: string;
  rows?: number;
  name: string;
  error?: string[];
  defaultValue?: string;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400 ml-1" htmlFor={name}>
      {label}
    </label>
    <textarea
      key={defaultValue} // Force re-render when defaultValue changes
      id={name}
      name={name}
      rows={rows}
      defaultValue={defaultValue || ""}
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

function InfoForm() {
  const [state, action] = useActionState(submitContactForm, initialState);

  // Helper to get previous value
  const getValue = (name: string) =>
    state.payload?.[name] as string | undefined;

  return (
    <form action={action} className="space-y-6">
      <input
        type="text"
        name="honeypot"
        defaultValue=""
        className="hidden"
        style={{ display: "none" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="name"
          label="Name"
          placeholder="Your name"
          error={state.errors?.name}
          defaultValue={getValue("name")}
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={state.errors?.email}
          defaultValue={getValue("email")}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="00000-00000"
          error={state.errors?.phone}
          defaultValue={getValue("phone")}
        />
        <SelectField
          name="topic"
          label="Topic"
          options={["General Inquiry", "Press", "Careers", "Other"]}
          error={state.errors?.topic}
          defaultValue={getValue("topic")}
        />
      </div>

      <TextAreaField
        name="message"
        label="Message"
        placeholder="How can we help you?"
        error={state.errors?.message}
        defaultValue={getValue("message")}
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
