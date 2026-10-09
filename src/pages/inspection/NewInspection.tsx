import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileImage,
  ImagePlus,
  Info,
  LoaderCircle,
  ScanSearch,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";


const MAX_FILE_SIZE = 10 * 1024 * 1024;

const acceptedTypes = ["image/jpeg", "image/png", "image/webp"];

export default function NewInspection() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [componentName, setComponentName] = useState("");
  const [componentId, setComponentId] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [inspectionType, setInspectionType] = useState("surface");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isPreparing, setIsPreparing] = useState(false);

  function processFile(selectedFile?: File) {
    setError("");
    setMessage("");

    if (!selectedFile) return;

    if (!acceptedTypes.includes(selectedFile.type)) {
      setError("Choose a JPG, PNG, or WebP image.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("The image must be 10 MB or smaller.");
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    processFile(event.target.files?.[0]);
    event.target.value = "";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    processFile(event.dataTransfer.files?.[0]);
  }

  function removeFile() {
    if (preview) URL.revokeObjectURL(preview);

    setFile(null);
    setPreview("");
    setError("");
    setMessage("");
  }

  async function handleSubmit() {
    setError("");
    setMessage("");

    if (!file) {
      setError("Upload an image before starting an inspection.");
      return;
    }

    if (!componentName.trim()) {
      setError("Enter the component name.");
      return;
    }

    setIsPreparing(true);

    try {
      // Frontend preparation only. No upload or AI inference occurs here.
      await new Promise((resolve) => setTimeout(resolve, 300));

      setMessage(
        "Your form is valid. Inspection has not started because the backend and AI inference service are not connected.",
      );
    } finally {
      setIsPreparing(false);
    }
  }

  return (
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Heading */}
        <section>
          <Link
            to="/dashboard"
            className="mb-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-orange-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
                <ScanSearch className="h-4 w-4" />
                VISUAL QUALITY CONTROL
              </div>

              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                New inspection<span className="text-orange-400">.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
                Upload a component image and provide inspection details to
                prepare a quality assessment.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-neutral-400 sm:self-auto">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              Image validation enabled
            </div>
          </div>
        </section>

        {/* Form */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Image upload */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
            <div className="mb-5">
              <h2 className="font-heading text-lg font-semibold text-white">
                Component image
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Upload a clear image of the component to inspect.
              </p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />

            {!preview ? (
              <div
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                className="flex min-h-[310px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.015] px-5 py-10 text-center transition hover:border-orange-400/40 hover:bg-orange-400/[0.025]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/[0.07]">
                  <ImagePlus className="h-7 w-7 text-orange-400" />
                </div>

                <h3 className="mt-5 font-semibold text-neutral-200">
                  Drop your image here
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  or browse files from your computer
                </p>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  <Upload className="h-4 w-4" />
                  Choose image
                </button>

                <p className="mt-5 text-xs text-neutral-600">
                  JPG, PNG or WebP · Maximum 10 MB
                </p>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <FileImage className="h-5 w-5 shrink-0 text-orange-400" />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-neutral-200">
                        {file?.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {file ? (file.size / (1024 * 1024)).toFixed(2) : "0"} MB
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeFile}
                    aria-label="Remove image"
                    className="rounded-lg p-2 text-neutral-400 transition hover:bg-red-400/10 hover:text-red-400"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex min-h-[280px] items-center justify-center p-3">
                  <img
                    src={preview}
                    alt="Selected component preview"
                    className="max-h-[380px] w-full rounded-xl object-contain"
                  />
                </div>

                <div className="flex items-center gap-2 border-t border-white/[0.08] px-4 py-3 text-xs text-emerald-400">
                  <Check className="h-4 w-4" />
                  Image selected and locally previewed
                </div>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />

              <p className="text-xs leading-5 text-neutral-500">
                Your selected image is previewed in this browser. It is not
                uploaded to a server or analyzed by an AI model yet.
              </p>
            </div>
          </section>

          {/* Inspection details */}
          <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5 sm:p-7">
            <div className="mb-6">
              <h2 className="font-heading text-lg font-semibold text-white">
                Inspection details
              </h2>

              <p className="mt-1 text-sm text-neutral-500">
                Add information to identify the component.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="componentName"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Component name <span className="text-orange-400">*</span>
                </label>

                <input
                  id="componentName"
                  value={componentName}
                  onChange={(event) => setComponentName(event.target.value)}
                  placeholder="e.g. Front door panel"
                  maxLength={120}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="componentId"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Component ID
                </label>

                <input
                  id="componentId"
                  value={componentId}
                  onChange={(event) => setComponentId(event.target.value)}
                  placeholder="Optional identification number"
                  maxLength={100}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="vehicleModel"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Vehicle model
                </label>

                <input
                  id="vehicleModel"
                  value={vehicleModel}
                  onChange={(event) => setVehicleModel(event.target.value)}
                  placeholder="Optional vehicle model"
                  maxLength={120}
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/50"
                />
              </div>

              <div>
                <label
                  htmlFor="inspectionType"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Inspection category
                </label>

                <select
                  id="inspectionType"
                  value={inspectionType}
                  onChange={(event) => setInspectionType(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#141720] px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/50"
                >
                  <option value="surface">Surface defects</option>
                  <option value="paint">Paint inspection</option>
                  <option value="weld">Weld inspection</option>
                  <option value="rust">Rust and corrosion</option>
                  <option value="assembly">Assembly and alignment</option>
                  <option value="general">General inspection</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-medium text-neutral-300"
                >
                  Additional notes
                </label>

                <textarea
                  id="notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Describe any areas that require attention..."
                  rows={3}
                  maxLength={1000}
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-orange-400/50"
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-red-400/20 bg-red-400/5 p-3 text-sm text-red-300"
              >
                {error}
              </p>
            )}

            {message && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-orange-400/20 bg-orange-400/[0.05] p-4"
              >
                <p className="text-sm font-semibold text-orange-300">
                  Form validated
                </p>

                <p className="mt-2 text-xs leading-5 text-neutral-400">
                  {message}
                </p>

                <p className="mt-3 break-words text-xs text-neutral-500">
                  Component: {componentName}
                  {componentId.trim() ? ` · ID: ${componentId.trim()}` : ""}
                  {vehicleModel.trim() ? ` · Vehicle: ${vehicleModel.trim()}` : ""}
                  {` · Category: ${inspectionType}`}
                  {notes.trim() ? ` · Notes: ${notes.trim()}` : ""}
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isPreparing}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPreparing ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Validating...
                </>
              ) : (
                <>
                  <ScanSearch className="h-4 w-4" />
                  Prepare inspection
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-neutral-600">
              Required field: component name. Actual inspection processing
              will be enabled after backend integration.
            </p>
          </section>
        </div>
      </div>
  );
}