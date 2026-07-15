"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  if (sent) {
    return (
      <div className="rounded-2xl border border-aal-warmgray bg-white p-6 text-sm text-aal-navy">
        Merci, votre message a bien été enregistré. Nous revenons vers
        vous rapidement.
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 rounded-2xl border border-aal-warmgray bg-white p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
        Nom
        <input
          type="text"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          required
          className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
        Téléphone
        <input
          type="tel"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
          className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
        Message
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={4}
          className="rounded-xl border border-aal-navy/15 bg-white px-3 py-2 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
      >
        Envoyer le message
      </button>
    </form>
  );
}
