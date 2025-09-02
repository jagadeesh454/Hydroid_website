import React from "react";
import Section from "../components/Section";

function Resources() {
  return (
    <Section title="Resources" subtitle="Guides and Help">
      <p className="text-center">Check our FAQs, user guides, and latest news about LPG technology.</p>
    </Section>
  );
}

export default Resources;












// import React, { useState } from "react";
// import Section from "../components/Section";
// import { MapPin, Mail, Phone } from "lucide-react";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" }); // STATE
//   const [sent, setSent] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();                     // stop page reload
//     if (!form.name || !form.email || !form.message) {
//       return alert("Please fill all fields");
//     }
//     setSent(true);

//     // example: POST to your backend later
//     // fetch("/api/contact", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify(form),
//     // });
//   };

//   return (
//     <Section title="Contact Us" subtitle="We'd love to hear from you">
//       <div className="grid gap-10 lg:grid-cols-2">
//         <form onSubmit={onSubmit} className="rounded-2xl border p-6 shadow-sm">
//           {/* Controlled inputs: value comes from state, onChange updates state */}
//           <input
//             value={form.name}
//             onChange={(e)=>setForm({...form, name:e.target.value})}
//             placeholder="Your name"
//             className="mt-1 w-full rounded-xl border px-3 py-2 outline-none"
//           />
//           {/* email + textarea similar */}
//           <button type="submit" className="mt-4 rounded-2xl bg-primary px-5 py-2.5 text-primary-foreground">
//             Send Inquiry
//           </button>
//           {sent && <p className="text-sm text-green-600 mt-2">Thanks! We'll get back to you shortly.</p>}
//         </form>

//         {/* Contact info + map placeholder */}
//       </div>
//     </Section>
//   );
// }
