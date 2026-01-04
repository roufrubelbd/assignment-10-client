import React, { useEffect, useState, use } from "react";

import axios from "axios";
import { FaBoxes, FaShoppingCart } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../main";
import Spinner from "./Spinner/Spinner";

const UserDashboard = () => {
  const { user, theme } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [imports, setImports] = useState([]);
  const [exportsData, setExportsData] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [importsRes, exportsRes] = await Promise.all([
          axios.get(
            `https://assignment-10-server-rosy-seven.vercel.app/imports?email=${user.email}`
          ),
          axios.get(
            `https://assignment-10-server-rosy-seven.vercel.app/exports?email=${user.email}`
          ),
        ]);

        setImports(importsRes.data);
        setExportsData(exportsRes.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]);

  if (loading) return <Spinner />;

  // Prepare chart data by date
  const chartData = [];
  const allDates = new Set([
    ...imports.map((i) => new Date(i.importedAt).toLocaleDateString()),
    ...exportsData.map((e) => new Date(e.createdAt).toLocaleDateString()),
  ]);

  Array.from(allDates)
    .sort((a, b) => new Date(a) - new Date(b))
    .forEach((date) => {
      const totalImports = imports
        .filter((i) => new Date(i.importedAt).toLocaleDateString() === date)
        .reduce((sum, i) => sum + i.importedQuantity, 0);
      const totalExports = exportsData.filter(
        (e) => new Date(e.createdAt).toLocaleDateString() === date
      ).length;
      chartData.push({ date, Imports: totalImports, Exports: totalExports });
    });

  return (
    <div
      className={`container mx-auto p-4 ${
        theme === "light" ? "bg-gray-50" : "bg-gray-900 text-white"
      } min-h-screen`}
    >
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user.displayName || "User"}!
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg flex items-center gap-4">
          <FaBoxes className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Total Exports
            </p>
            <p className="text-xl font-bold">{exportsData.length}</p>
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg flex items-center gap-4">
          <FaShoppingCart className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Total Imports
            </p>
            <p className="text-xl font-bold">
              {imports.reduce((sum, i) => sum + i.importedQuantity, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Imports & Exports Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "light" ? "#e5e7eb" : "#374151"}
            />
            <XAxis
              dataKey="date"
              stroke={theme === "light" ? "#374151" : "#d1d5db"}
            />
            <YAxis stroke={theme === "light" ? "#374151" : "#d1d5db"} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Imports"
              stroke="#10b981"
              activeDot={{ r: 6 }}
            />
            <Line type="monotone" dataKey="Exports" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Latest Products Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Latest Imported Products</h2>
        {imports.length === 0 ? (
          <p>No imports yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {imports
                  .slice(-5)
                  .reverse()
                  .map((item) => (
                    <tr
                      key={item._id}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.importedQuantity}</td>
                      <td className="py-2 px-4">${item.price}</td>
                      <td className="py-2 px-4">
                        {new Date(item.importedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
