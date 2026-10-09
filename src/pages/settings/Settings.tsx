import { useEffect, useState } from "react";
import {
  Bell,
  Check,
  Monitor,
  Moon,
  Palette,
  RotateCcw,
  Save,
  Settings as SettingsIcon,
  ShieldCheck,
} from "lucide-react";

type Preferences = {
  compactLayout: boolean;
  emailNotifications: boolean;
  inspectionNotifications: boolean;
  reducedMotion: boolean;
};

const defaultPreferences: Preferences = {
  compactLayout: false,
  emailNotifications: false,
  inspectionNotifications: true,
  reducedMotion: false,
};

const STORAGE_KEY = "defect-lens-preferences";

export default function Settings() {
  const [preferences, setPreferences] =
    useState<Preferences>(defaultPreferences);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences({
          ...defaultPreferences,
          ...JSON.parse(stored),
        });
      }
    } catch {
      // Continue with defaults if stored preferences cannot be read.
    }
  }, []);

  function updatePreference<K extends keyof Preferences>(
    key: K,
    value: Preferences[K],
  ) {
    setPreferences((current) => ({ ...current, [key]: value }));
    setSaved(false);
  }

  function savePreferences() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }

  function resetPreferences() {
    setPreferences(defaultPreferences);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(defaultPreferences),
      );
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }

  const sections = [
    {
      title: "Compact layout",
      description: "Reduce spacing in supported interface components.",
      key: "compactLayout" as const,
    },
    {
      title: "Email notifications",
      description:
        "Preference for future email notifications. Email delivery is not connected.",
      key: "emailNotifications" as const,
    },
    {
      title: "Inspection notifications",
      description:
        "Preference for future inspection-related notifications.",
      key: "inspectionNotifications" as const,
    },
    {
      title: "Reduced motion",
      description: "Preference for fewer animations where supported.",
      key: "reducedMotion" as const,
    },
  ];

  return (
      <div className="mx-auto max-w-5xl space-y-8">
        <header>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
            <SettingsIcon className="h-4 w-4" />
            WORKSPACE CONFIGURATION
          </div>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Settings<span className="text-orange-400">.</span>
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Customize local workspace preferences and notification options.
          </p>
        </header>

        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
              <Palette className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-white">
                Appearance
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Visual preferences for your workspace.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-orange-400/25 bg-orange-400/[0.04] p-4">
              <Moon className="h-5 w-5 text-orange-400" />
              <h3 className="mt-3 font-semibold text-white">Dark mode</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Current Defect Lens appearance.
              </p>
              <span className="mt-4 inline-block rounded-full border border-orange-400/20 px-3 py-1 text-xs text-orange-300">
                Current theme
              </span>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-black/10 p-4">
              <Monitor className="h-5 w-5 text-neutral-400" />
              <h3 className="mt-3 font-semibold text-white">Responsive layout</h3>
              <p className="mt-1 text-sm text-neutral-500">
                Interface adapts to desktop, tablet and mobile widths.
              </p>
              <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
                Automatic
              </span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
              <Bell className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-white">
                Preferences
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Saved locally in this browser on this device.
              </p>
            </div>
          </div>

          <div className="mt-6 divide-y divide-white/[0.07]">
            {sections.map((section) => (
              <div
                key={section.key}
                className="flex items-center justify-between gap-5 py-5 first:pt-0 last:pb-0"
              >
                <div>
                  <h3 className="text-sm font-medium text-neutral-200">
                    {section.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-5 text-neutral-500">
                    {section.description}
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={preferences[section.key]}
                  aria-label={section.title}
                  onClick={() =>
                    updatePreference(
                      section.key,
                      !preferences[section.key],
                    )
                  }
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    preferences[section.key]
                      ? "bg-orange-500"
                      : "bg-neutral-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                      preferences[section.key]
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-6">
            <button
              type="button"
              onClick={savePreferences}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              {saved ? (
                <Check className="h-4 w-4" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save preferences
            </button>

            <button
              type="button"
              onClick={resetPreferences}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-neutral-300 transition hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
          </div>

          {saved && (
            <p role="status" className="mt-4 text-sm text-emerald-400">
              Preferences saved in this browser.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-orange-400" />
            <div>
              <h2 className="font-semibold text-white">Security and account</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Account security, password changes and session management
                require the authentication backend.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}