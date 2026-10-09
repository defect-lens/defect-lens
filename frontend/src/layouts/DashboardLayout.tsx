import { useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Bot,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Factory,
  FileBarChart,
  Gauge,
  Home,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
  Zap,
} from "lucide-react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const navigationGroups = [
  {
    title: "OVERVIEW",
    items: [
      { label: "Dashboard", path: "/dashboard", icon: Home },
      { label: "New Inspection", path: "/inspection/new", icon: Search },
      {
        label: "Inspection History",
        path: "/inspection/history",
        icon: ClipboardList,
      },
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      {
        label: "Defect Analysis",
        path: "/analytics/defects",
        icon: AlertTriangle,
      },
      {
        label: "Quality Analytics",
        path: "/analytics/quality",
        icon: BarChart3,
      },
      {
        label: "Predictive Intelligence",
        path: "/analytics/predictive",
        icon: Activity,
      },
      {
        label: "AI Explainability",
        path: "/analytics/explainability",
        icon: ShieldCheck,
      },
      {
        label: "AI Assistant",
        path: "/analytics/assistant",
        icon: Bot,
      },
    ],
  },
  {
    title: "WORKSPACE",
    items: [
      { label: "Reports", path: "/reports", icon: FileBarChart },
      { label: "Profile", path: "/profile", icon: UserRound },
      { label: "Settings", path: "/settings", icon: Settings },
    ],
  },
];

function SidebarContent({
  collapsed,
  mobile = false,
  onNavigate,
}: {
  collapsed: boolean;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div
        className={`flex h-[76px] shrink-0 items-center border-b border-white/[0.07] ${
          collapsed && !mobile ? "justify-center px-3" : "px-5"
        }`}
      >
        <Link
          to="/dashboard"
          onClick={onNavigate}
          className="flex min-w-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10">
            <Factory size={21} className="text-orange-400" />
          </div>

          {(!collapsed || mobile) && (
            <div>
              <p className="font-heading text-[17px] font-bold text-white">
                Defect<span className="text-orange-400">Lens</span>
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Quality Intelligence
              </p>
            </div>
          )}
        </Link>
      </div>

      {/* Workspace */}
      {(!collapsed || mobile) && (
        <div className="px-4 pb-3 pt-5">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
              <Gauge size={18} className="text-orange-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-200">
                Manufacturing
              </p>
              <p className="mt-1 text-[10px] text-gray-500">
                Inspection workspace
              </p>
            </div>

            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-5 pt-4">
        {navigationGroups.map((group) => (
          <div key={group.title} className="mb-7">
            {(!collapsed || mobile) && (
              <p className="mb-3 px-3 text-[9px] font-bold tracking-[0.2em] text-gray-600">
                {group.title}
              </p>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onNavigate}
                    title={collapsed && !mobile ? item.label : undefined}
                    className={({ isActive }) => {
                      const active =
                        isActive ||
                        (item.path === "/inspection/new" &&
                          window.location.pathname ===
                            "/inspection/results");

                      return `relative flex items-center gap-3 rounded-xl border px-3 py-3 text-[12px] font-medium transition-all ${
                        collapsed && !mobile ? "justify-center" : ""
                      } ${
                        active
                          ? "border-orange-400/15 bg-orange-500/10 text-orange-300"
                          : "border-transparent text-gray-500 hover:bg-white/[0.04] hover:text-gray-200"
                      }`;
                    }}
                  >
                    {({ isActive }) => {
                      const active =
                        isActive ||
                        (item.path === "/inspection/new" &&
                          window.location.pathname ===
                            "/inspection/results");

                      return (
                        <>
                          {active && (
                            <span className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-orange-400" />
                          )}

                          <Icon
                            size={17}
                            className={`shrink-0 ${
                              active
                                ? "text-orange-400"
                                : "text-gray-500"
                            }`}
                          />

                          {(!collapsed || mobile) && (
                            <>
                              <span className="min-w-0 flex-1">
                                {item.label}
                              </span>

                              {active && (
                                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                              )}
                            </>
                          )}
                        </>
                      );
                    }}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Sidebar bottom */}
      {(!collapsed || mobile) && (
        <div className="shrink-0 border-t border-white/[0.07] p-4">
          <div className="rounded-2xl border border-orange-400/15 bg-gradient-to-br from-orange-500/10 to-transparent p-4">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/10">
              <Sparkles size={16} className="text-orange-300" />
            </div>

            <p className="text-xs font-semibold text-gray-200">
              AI Quality Intelligence
            </p>

            <p className="mt-2 text-[10px] leading-5 text-gray-500">
              Visual inspection and predictive maintenance in one workspace.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[10px] text-orange-300">
              <Zap size={12} />
              Quality workflow
            </div>
          </div>

          <Link
            to="/settings"
            onClick={onNavigate}
            className="mt-3 flex items-center gap-3 rounded-xl px-3 py-3 text-xs text-gray-500 transition hover:bg-white/[0.04] hover:text-white"
          >
            <Settings size={16} />
            Preferences
          </Link>
        </div>
      )}
    </div>
  );
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const allItems = navigationGroups.flatMap((group) => group.items);

  const currentPage =
    allItems.find((item) => item.path === location.pathname)?.label ??
    (location.pathname === "/inspection/results"
      ? "Inspection Results"
      : "Dashboard");

  return (
    <div className="min-h-screen bg-[#090b10] text-gray-100">
      {/* Desktop sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 hidden border-r border-white/[0.07] bg-[#0b0d13] transition-[width] duration-300 lg:block ${
          collapsed ? "w-[84px]" : "w-[264px]"
        }`}
      >
        <SidebarContent collapsed={collapsed} />

        <button
          type="button"
          onClick={() => setCollapsed((value) => !value)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-[87px] flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#151820] text-gray-400 shadow-lg transition hover:text-orange-400"
        >
          {collapsed ? (
            <ChevronRight size={15} />
          ) : (
            <ChevronLeft size={15} />
          )}
        </button>
      </aside>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 w-[285px] max-w-[85vw] border-r border-white/10 bg-[#0b0d13] shadow-2xl">
            <SidebarContent
              collapsed={false}
              mobile
              onNavigate={() => setMobileOpen(false)}
            />

            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMobileOpen(false)}
              className="absolute right-3 top-5 rounded-lg p-2 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </aside>
        </div>
      )}

      {/* Main area */}
      <div
        className={`min-h-screen transition-[margin] duration-300 ${
          collapsed ? "lg:ml-[84px]" : "lg:ml-[264px]"
        }`}
      >
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#090b10]/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] text-gray-400 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <Menu size={19} />
            </button>

            <div className="min-w-0">
              <p className="flex items-center gap-2 text-[10px] text-gray-600">
                Workspace <span>/</span>
                <span className="truncate text-gray-400">
                  {currentPage}
                </span>
              </p>

              <h1 className="mt-1 truncate font-heading text-base font-semibold text-white sm:text-lg">
                {currentPage}
              </h1>
            </div>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span className="text-[10px] text-gray-400">
                Visual Quality Platform
              </span>
            </div>

            <button
              type="button"
              aria-label="Notifications"
              title="Notifications"
              onClick={() =>
                window.alert(
                  "Notifications are not connected yet.",
                )
              }
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
            >
              <Bell size={17} />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
            </button>

            <Link
              to="/profile"
              aria-label="Open profile"
              title="Profile"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-300 hover:bg-orange-500/20"
            >
              <UserRound size={17} />
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="min-h-[calc(100vh-76px)] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto w-full max-w-[1600px]">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-2 text-[10px] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Defect Lens. Visual Quality
              Intelligence.
            </p>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={12} />
                Quality-first workflow
              </span>

              <Link
                to="/settings"
                className="transition hover:text-orange-300"
              >
                Settings
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}