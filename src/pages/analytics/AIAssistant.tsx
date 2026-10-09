import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  FileSearch,
  Info,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
} from "lucide-react";


interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "What types of defects can the platform support?",
  "How should a visual inspection be reviewed?",
  "What information belongs in a quality report?",
  "Why is model explainability important?",
];

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const question = input.trim();

    if (!question) {
      setNotice("Enter a question first.");
      return;
    }

    setNotice(
      "The AI service is not connected. Your message has not been sent, and no AI response has been generated.",
    );
  }

  function clearConversation() {
    setMessages([]);
    setInput("");
    setNotice("");
  }

  return (
      <div className="mx-auto max-w-[1450px] space-y-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-400">
              <Bot className="h-4 w-4" />
              QUALITY COPILOT
            </div>

            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              AI assistant<span className="text-orange-400">.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              A workspace for asking questions about inspection workflows,
              defect evidence and automotive quality documentation.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm text-neutral-300 transition hover:border-orange-400/30 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_300px]">
          {/* Chat workspace */}
          <article className="flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#10131a]">
            <header className="flex items-center justify-between gap-4 border-b border-white/[0.07] p-5 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08]">
                  <Sparkles className="h-5 w-5 text-orange-400" />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Defect Lens Copilot
                  </h2>

                  <p className="mt-1 text-xs text-neutral-500">
                    Quality workflow assistant
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={clearConversation}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-neutral-400 transition hover:text-white"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear
              </button>
            </header>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              {messages.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-400/15 bg-orange-400/[0.06]">
                    <MessageCircle className="h-7 w-7 text-orange-400" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                    What would you like to explore?
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                    Ask about defect terminology, inspection processes,
                    explainability or quality reporting.
                  </p>

                  <div className="mt-7 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => {
                          setInput(question);
                          setNotice("");
                        }}
                        className="rounded-xl border border-white/[0.08] bg-black/10 p-4 text-left text-sm leading-5 text-neutral-300 transition hover:border-orange-400/25 hover:bg-orange-400/[0.025]"
                      >
                        <Sparkles className="mb-3 h-4 w-4 text-orange-400" />
                        {question}
                        <ArrowRight className="mt-3 h-4 w-4 text-neutral-600" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex-1 space-y-5">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.role === "user" ? "justify-end" : ""
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                          <Bot className="h-4 w-4 text-orange-400" />
                        </div>
                      )}

                      <div className="max-w-[85%] rounded-2xl border border-white/[0.08] bg-black/10 p-4">
                        <p className="whitespace-pre-wrap text-sm leading-6 text-neutral-200">
                          {message.content}
                        </p>
                      </div>

                      {message.role === "user" && (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                          <UserRound className="h-4 w-4 text-neutral-300" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {notice && (
                <div
                  role="status"
                  className="mb-4 flex items-start gap-3 rounded-xl border border-orange-400/20 bg-orange-400/[0.04] p-4"
                >
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />

                  <p className="text-sm leading-6 text-neutral-300">
                    {notice}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-6 border-t border-white/[0.07] pt-5"
              >
                <label htmlFor="assistant-input" className="sr-only">
                  Ask the quality assistant
                </label>

                <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 transition focus-within:border-orange-400/40">
                  <textarea
                    id="assistant-input"
                    value={input}
                    onChange={(event) => {
                      setInput(event.target.value);
                      setNotice("");
                    }}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        !event.shiftKey &&
                        !event.nativeEvent.isComposing
                      ) {
                        event.preventDefault();
                        event.currentTarget.form?.requestSubmit();
                      }
                    }}
                    placeholder="Ask a quality-related question..."
                    rows={2}
                    maxLength={2000}
                    className="max-h-36 min-h-12 flex-1 resize-y bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-neutral-600"
                  />

                  <button
                    type="submit"
                    aria-label="Send message"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition hover:bg-orange-400"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-3 text-xs leading-5 text-neutral-600">
                  AI responses are disabled until the backend service is
                  connected. Avoid entering confidential manufacturing data.
                </p>
              </form>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5">
            <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-400/[0.06]">
                <ShieldCheck className="h-5 w-5 text-orange-400" />
              </div>

              <h2 className="mt-4 font-heading font-semibold text-white">
                Responsible assistance
              </h2>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                AI-generated suggestions should be checked against inspection
                evidence and approved quality procedures.
              </p>
            </section>

            <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
              <h2 className="font-heading font-semibold text-white">
                Useful workspaces
              </h2>

              <div className="mt-4 space-y-2">
                {[
                  {
                    label: "Inspection history",
                    path: "/inspection/history",
                  },
                  {
                    label: "Quality analytics",
                    path: "/analytics/quality",
                  },
                  {
                    label: "Defect analysis",
                    path: "/analytics/defects",
                  },
                  {
                    label: "Explainability",
                    path: "/analytics/explainability",
                  },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-sm text-neutral-400 transition hover:bg-white/[0.035] hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/[0.08] bg-[#10131a] p-5">
              <div className="flex items-center gap-2">
                <FileSearch className="h-4 w-4 text-orange-400" />
                <h2 className="text-sm font-semibold text-white">
                  Evidence matters
                </h2>
              </div>

              <p className="mt-3 text-xs leading-5 text-neutral-500">
                Inspection-specific answers will require authenticated
                access to real records and properly scoped retrieval.
              </p>
            </section>
          </aside>
        </section>
      </div>
  );
}