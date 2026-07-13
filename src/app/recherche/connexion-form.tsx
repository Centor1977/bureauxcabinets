"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function ConnexionForm() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const supabase = createClient();
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=/recherche`,
      },
    });

    setPending(false);

    if (otpError) {
      setError(
        "Impossible d'envoyer le lien de connexion. Vérifiez votre email ou créez une recherche."
      );
      return;
    }

    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Un lien de connexion a été envoyé à <strong>{email}</strong>.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="votre@email.fr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-950"
      >
        {pending ? "Envoi…" : "Recevoir un lien de connexion"}
      </button>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
