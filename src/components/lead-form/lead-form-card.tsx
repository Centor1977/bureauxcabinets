"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@/components/icons";

const TYPE_BIEN_OPTIONS = [
  "Logement meublé / location de courte durée",
  "Appartement en immeuble",
  "Immeuble avec plusieurs logements",
  "Maison",
  "Bureau / cabinet",
  "Autre",
];

const PROBLEME_EXCLUSIF = "Je ne sais pas, je veux être conseillé";
const PROBLEME_OPTIONS = [
  "Éviter les remises de clés",
  "Permettre des arrivées autonomes",
  "Donner accès au ménage ou à des prestataires",
  "Ouvrir à distance",
  "Changer les codes entre deux voyageurs",
  "Gérer plusieurs utilisateurs",
  PROBLEME_EXCLUSIF,
];

const ACCES_EXCLUSIF = "Je ne sais pas";
const ACCES_OPTIONS = [
  "Porte du logement",
  "Entrée de l’immeuble",
  "Interphone",
  "Boîte à clés actuelle à remplacer",
  "Plusieurs accès",
  ACCES_EXCLUSIF,
];

const DELAI_OPTIONS = [
  "Dès que possible",
  "Sous 7 jours",
  "Sous 15 jours",
  "Sous 1 mois",
  "Projet à anticiper",
  "Je ne sais pas",
];

const NOMBRE_LOGEMENTS_OPTIONS = [
  "1 logement",
  "2 à 3 logements",
  "4 à 10 logements",
  "Plus de 10 logements",
  "Je gère des biens pour des clients",
  "Je ne sais pas encore",
];

const NIVEAU_SOLUTION_OPTIONS = [
  "Une solution simple avec code",
  "Une ouverture à distance",
  "Des accès temporaires pour voyageurs ou prestataires",
  "Une gestion de plusieurs utilisateurs",
  "Une solution complète logement + immeuble",
  "Je veux être conseillé",
];

const MODE_CONTACT_OPTIONS = ["Téléphone", "WhatsApp", "Email"];

const PLAGES = ["9h–11h", "11h–13h", "14h–16h", "16h–18h", "18h–20h"];

const MAX_PHOTOS = 3;
const MAX_DATES = 3;

type CreneauDate = {
  date: string;
  plages: string[];
};

type PhotoItem = {
  id: string;
  file: File;
};

function toggleExclusive(
  current: string[],
  value: string,
  exclusiveValue: string,
): string[] {
  if (value === exclusiveValue) {
    return current.includes(value) ? [] : [exclusiveValue];
  }
  const withoutExclusive = current.filter((item) => item !== exclusiveValue);
  return withoutExclusive.includes(value)
    ? withoutExclusive.filter((item) => item !== value)
    : [...withoutExclusive, value];
}

function ClosedStepRow({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  const content = (
    <>
      <span>{label}</span>
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-aal-navy/30" />
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm text-aal-navy transition-colors hover:bg-aal-warmgray/40"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-aal-navy/60">
      {content}
    </div>
  );
}

function ProgressIndicator({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wide text-aal-navy/50">
        Étape {step} sur 3
      </span>
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((n, index) => (
          <span key={n} className="flex items-center gap-2">
            {index > 0 ? <span className="h-px w-4 bg-aal-navy/15" /> : null}
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                n <= step
                  ? "bg-aal-teal text-white"
                  : "border border-aal-navy/15 text-aal-navy/40"
              }`}
            >
              {n}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function LeadFormCard() {
  const router = useRouter();
  const filesInputId = useId();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [typeBien, setTypeBien] = useState("");
  const [problemes, setProblemes] = useState<string[]>([]);
  const [acces, setAcces] = useState<string[]>([]);
  const [ville, setVille] = useState("");
  const [delai, setDelai] = useState("");

  const [nombreLogements, setNombreLogements] = useState("");
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [niveauSolution, setNiveauSolution] = useState("");
  const [precisions, setPrecisions] = useState("");

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [modeContact, setModeContact] = useState("");
  const [dates, setDates] = useState<CreneauDate[]>([{ date: "", plages: [] }]);
  const [flexible, setFlexible] = useState(false);
  const [consentement, setConsentement] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function handlePhotosChange(fileList: FileList | null) {
    if (!fileList) return;
    const remaining = MAX_PHOTOS - photos.length;
    const nextFiles = Array.from(fileList)
      .slice(0, Math.max(remaining, 0))
      .map((file) => ({ id: `${file.name}-${file.lastModified}-${Math.random()}`, file }));
    setPhotos((prev) => [...prev, ...nextFiles]);
  }

  function removePhoto(id: string) {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id));
  }

  function toggleDatePlage(index: number, plage: string) {
    setDates((prev) =>
      prev.map((entry, i) =>
        i === index
          ? {
              ...entry,
              plages: entry.plages.includes(plage)
                ? entry.plages.filter((p) => p !== plage)
                : [...entry.plages, plage],
            }
          : entry,
      ),
    );
  }

  function updateDateValue(index: number, value: string) {
    setDates((prev) =>
      prev.map((entry, i) => (i === index ? { ...entry, date: value } : entry)),
    );
  }

  function addDate() {
    setDates((prev) =>
      prev.length < MAX_DATES ? [...prev, { date: "", plages: [] }] : prev,
    );
  }

  const hasCreneau = dates.some((entry) => entry.date && entry.plages.length > 0);
  const step3Ready =
    nom.trim() !== "" &&
    telephone.trim() !== "" &&
    email.trim() !== "" &&
    (hasCreneau || flexible) &&
    consentement;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!step3Ready) {
      setSubmitError(
        "Merci de compléter vos coordonnées, d’indiquer au moins un créneau (ou de cocher « Je suis flexible ») et d’accepter l’utilisation de vos informations.",
      );
      return;
    }
    setSubmitError(null);
    router.push("/merci");
  }

  return (
    <div
      id="formulaire"
      className="w-full max-w-md rounded-3xl bg-white p-6 text-aal-navy shadow-xl shadow-aal-navy/10 sm:p-8"
    >
      <ProgressIndicator step={step} />

      {step === 1 ? (
        <>
          <h2 className="mt-4 text-xl font-semibold text-aal-navy">
            Décrivez votre besoin
          </h2>
          <p className="mt-1 text-sm text-aal-navy/60">
            Répondez à quelques questions pour être orienté vers la
            solution adaptée à votre logement.
          </p>

          <form
            className="mt-6 flex flex-col gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              setStep(2);
            }}
          >
            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Type de bien
              <select
                value={typeBien}
                onChange={(event) => setTypeBien(event.target.value)}
                className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
              >
                <option value="" disabled>
                  Sélectionnez le type de bien
                </option>
                {TYPE_BIEN_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-sm font-medium text-aal-navy">
                Quel problème voulez-vous résoudre ?
              </legend>
              <div className="flex flex-col gap-1.5 rounded-xl border border-aal-navy/15 p-3">
                {PROBLEME_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="flex items-start gap-2 text-sm text-aal-navy/80"
                  >
                    <input
                      type="checkbox"
                      checked={problemes.includes(option)}
                      onChange={() =>
                        setProblemes((prev) =>
                          toggleExclusive(prev, option, PROBLEME_EXCLUSIF),
                        )
                      }
                      className="mt-0.5 h-4 w-4 rounded border-aal-navy/30 text-aal-teal focus:ring-aal-teal"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-sm font-medium text-aal-navy">
                Accès concerné
              </legend>
              <div className="flex flex-col gap-1.5 rounded-xl border border-aal-navy/15 p-3">
                {ACCES_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="flex items-start gap-2 text-sm text-aal-navy/80"
                  >
                    <input
                      type="checkbox"
                      checked={acces.includes(option)}
                      onChange={() =>
                        setAcces((prev) =>
                          toggleExclusive(prev, option, ACCES_EXCLUSIF),
                        )
                      }
                      className="mt-0.5 h-4 w-4 rounded border-aal-navy/30 text-aal-teal focus:ring-aal-teal"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Ville / code postal
              <input
                type="text"
                value={ville}
                onChange={(event) => setVille(event.target.value)}
                placeholder="Lille, 59000"
                className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy placeholder:text-aal-navy/35 focus:border-aal-teal focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Délai souhaité
              <select
                value={delai}
                onChange={(event) => setDelai(event.target.value)}
                className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
              >
                <option value="" disabled>
                  Sélectionnez un délai
                </option>
                {DELAI_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
            >
              Continuer pour recevoir une estimation
            </button>
          </form>
        </>
      ) : (
        <div className="mt-4 overflow-hidden rounded-xl border border-aal-navy/10">
          <ClosedStepRow label="Décrivez votre besoin" onClick={() => setStep(1)} />
        </div>
      )}

      {step === 2 ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-aal-navy">
            Aidez le professionnel à comprendre votre situation
          </h2>
          <p className="mt-1 text-sm text-aal-navy/60">
            Une photo de votre porte, serrure ou interphone aide à
            vérifier la compatibilité et à éviter les échanges inutiles.
          </p>

          <form
            className="mt-6 flex flex-col gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              setStep(3);
            }}
          >
            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Combien de logements souhaitez-vous équiper ?
              <select
                value={nombreLogements}
                onChange={(event) => setNombreLogements(event.target.value)}
                className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
              >
                <option value="" disabled>
                  Sélectionnez une réponse
                </option>
                {NOMBRE_LOGEMENTS_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-aal-navy">
                Photo de votre porte, serrure ou interphone
              </span>
              <span className="text-xs text-aal-navy/50">
                Facultatif — recommandé pour une estimation plus rapide
              </span>

              <label
                htmlFor={filesInputId}
                className="mt-1 flex h-11 cursor-pointer items-center justify-center rounded-xl border border-dashed border-aal-navy/25 text-sm font-medium text-aal-teal hover:border-aal-teal"
              >
                Ajouter une photo
              </label>
              <input
                id={filesInputId}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(event) => handlePhotosChange(event.target.files)}
              />

              {photos.length > 0 ? (
                <ul className="mt-1 flex flex-col gap-1.5">
                  {photos.map((photo) => (
                    <li
                      key={photo.id}
                      className="flex items-center justify-between gap-2 rounded-lg bg-aal-warmgray px-3 py-2 text-xs text-aal-navy"
                    >
                      <span className="truncate">{photo.file.name}</span>
                      <button
                        type="button"
                        onClick={() => removePhoto(photo.id)}
                        aria-label={`Retirer ${photo.file.name}`}
                        className="shrink-0 text-aal-navy/50 hover:text-aal-navy"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}

              <ul className="mt-1 list-disc pl-4 text-xs leading-5 text-aal-navy/45">
                <li>1 à 3 photos maximum</li>
                <li>Champ non obligatoire</li>
                <li>Suppression possible avant envoi</li>
              </ul>
            </div>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Quel niveau de solution imaginez-vous ?
              <select
                value={niveauSolution}
                onChange={(event) => setNiveauSolution(event.target.value)}
                className="h-11 rounded-xl border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
              >
                <option value="" disabled>
                  Sélectionnez une réponse
                </option>
                {NIVEAU_SOLUTION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-aal-navy">
              Précisions utiles
              <textarea
                value={precisions}
                onChange={(event) => setPrecisions(event.target.value)}
                placeholder="Exemple : interphone d’immeuble, boîte à clés actuelle, arrivée voyageurs tardive, ménage à faire entrer, plusieurs logements à équiper…"
                rows={3}
                className="rounded-xl border border-aal-navy/15 bg-white px-3 py-2 text-sm font-normal text-aal-navy placeholder:text-aal-navy/35 focus:border-aal-teal focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
            >
              Continuer vers mes coordonnées
            </button>
          </form>
        </div>
      ) : (
        <div className="mt-3 overflow-hidden rounded-xl border border-aal-navy/10">
          <ClosedStepRow
            label="Étape 2 : photo facultative pour faciliter l’estimation"
            onClick={step > 2 ? () => setStep(2) : undefined}
          />
        </div>
      )}

      {step === 3 ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-aal-navy">
            Quand peut-on vous rappeler ?
          </h2>
          <p className="mt-1 text-sm text-aal-navy/60">
            Indiquez vos coordonnées et vos disponibilités. Ces créneaux
            facilitent le rappel mais ne constituent pas un rendez-vous
            confirmé.
          </p>

          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
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
              Téléphone
              <input
                type="tel"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
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

            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-sm font-medium text-aal-navy">
                Mode de contact préféré
              </legend>
              <div className="flex flex-wrap gap-3">
                {MODE_CONTACT_OPTIONS.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 rounded-xl border border-aal-navy/15 px-3 py-2 text-sm text-aal-navy/80"
                  >
                    <input
                      type="radio"
                      name="mode_contact"
                      value={option}
                      checked={modeContact === option}
                      onChange={() => setModeContact(option)}
                      className="h-4 w-4 border-aal-navy/30 text-aal-teal focus:ring-aal-teal"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="text-sm font-medium text-aal-navy">
                Disponibilités de rappel
              </legend>

              {dates.map((entry, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 rounded-xl border border-aal-navy/15 p-3"
                >
                  <label className="flex flex-col gap-1.5 text-xs font-medium text-aal-navy/70">
                    {index === 0 ? "Date 1" : `Date ${index + 1} (facultative)`}
                    <input
                      type="date"
                      value={entry.date}
                      onChange={(event) => updateDateValue(index, event.target.value)}
                      className="h-10 rounded-lg border border-aal-navy/15 bg-white px-3 text-sm font-normal text-aal-navy focus:border-aal-teal focus:outline-none"
                    />
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PLAGES.map((plage) => {
                      const active = entry.plages.includes(plage);
                      return (
                        <button
                          type="button"
                          key={plage}
                          onClick={() => toggleDatePlage(index, plage)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                            active
                              ? "border-aal-teal bg-aal-teal text-white"
                              : "border-aal-navy/15 text-aal-navy/70 hover:border-aal-teal"
                          }`}
                        >
                          {plage}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {dates.length < MAX_DATES ? (
                <button
                  type="button"
                  onClick={addDate}
                  className="self-start text-sm font-medium text-aal-teal hover:text-aal-teal-dark"
                >
                  Ajouter une autre date
                </button>
              ) : null}

              <label className="flex items-center gap-2 text-sm text-aal-navy/80">
                <input
                  type="checkbox"
                  checked={flexible}
                  onChange={(event) => setFlexible(event.target.checked)}
                  className="h-4 w-4 rounded border-aal-navy/30 text-aal-teal focus:ring-aal-teal"
                />
                Je suis flexible
              </label>
            </fieldset>

            <p className="text-xs leading-5 text-aal-navy/50">
              Les créneaux indiqués sont transmis au professionnel pour
              faciliter le rappel. Ils ne constituent pas un rendez-vous
              confirmé.
            </p>

            <label className="flex items-start gap-2 text-xs leading-5 text-aal-navy/70">
              <input
                type="checkbox"
                checked={consentement}
                onChange={(event) => setConsentement(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-aal-navy/30 text-aal-teal focus:ring-aal-teal"
              />
              J’accepte que mes informations soient utilisées pour
              qualifier ma demande et puissent être transmises à un ou
              plusieurs professionnels vérifiés dans le cadre de mon
              projet.
            </label>

            {submitError ? (
              <p className="text-xs font-medium text-red-600">{submitError}</p>
            ) : null}

            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Recevoir une estimation
            </button>

            <p className="text-xs leading-5 text-aal-navy/50">
              Votre demande est qualifiée puis transmise à un professionnel
              vérifié selon votre projet, votre zone et sa disponibilité.
            </p>
          </form>
        </div>
      ) : (
        <div className="mt-3 overflow-hidden rounded-xl border border-aal-navy/10">
          <ClosedStepRow label="Étape 3 : coordonnées et créneaux de rappel" />
        </div>
      )}

      {step === 1 ? (
        <p className="mt-4 text-xs leading-5 text-aal-navy/50">
          Vos informations sont utilisées uniquement pour qualifier votre
          demande et vous orienter vers un professionnel adapté.
        </p>
      ) : null}
    </div>
  );
}
