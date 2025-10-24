import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyProfile() {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalled(data);
  }, []);

  const notify = (msg) => toast.success(msg);

  const handleUninstall = (id) => {
    const filtered = installed.filter((app) => app.id !== id);
    setInstalled(filtered);
    localStorage.setItem("installedApps", JSON.stringify(filtered));
    notify("Deleted successfully! 🎉");
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installed];

    const parseDownloads = (downloads) => {
      const num = parseFloat(downloads);
      if (downloads.includes("B")) return num * 1_000_000_000;
      if (downloads.includes("M")) return num * 1_000_000;
      if (downloads.includes("K")) return num * 1_000;
      return num;
    };

    if (order === "high-low") {
      sorted.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
    } else if (order === "low-high") {
      sorted.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
    }

    setInstalled(sorted);
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">

          <header className="text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Your Installed Apps
            </h1>
            <p className="mt-2 text-slate-500">
              Explore All Trending Apps on the Market developed by us
            </p>
          </header>
          <div className="mt-10 flex items-center justify-between">
            <p className="text-xl font-semibold text-slate-800">
              <span className="font-bold">{installed.length}</span> Apps Found
            </p>

            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                className="appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 pr-8 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <option value="none">Sort By Downloads</option>
                <option value="high-low">High–Low</option>
                <option value="low-high">Low–High</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-2 top-3 h-4 w-4 text-slate-400 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>

          <div className="mt-4 space-y-5">
            {installed.length === 0 ? (
              <p className="text-slate-500">No apps installed yet.</p>
            ) : (
              installed.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 sm:px-6 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="h-16 w-16 rounded-lg bg-slate-200 overflow-hidden flex items-center justify-center">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="h-12 w-12 object-contain"
                      />
                    </div>

                    <div>
                      <Link
                        to={`/apps/${app.id}`}
                        className="block text-base sm:text-lg font-semibold text-slate-900 hover:underline"
                      >
                        {app.title}
                      </Link>

                      <div className="mt-2 flex items-center gap-5 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-emerald-600">
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="M12 3a1 1 0 0 1 1 1v8.6l2.3-2.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L11 12.6V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                          </svg>
                          {app.downloads}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-amber-600 font-medium">
                          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                            <path d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          {app.ratingAvg}
                        </span>

                        <span className="text-slate-500">{app.size} MB</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="rounded-md bg-emerald-500 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-emerald-600"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
