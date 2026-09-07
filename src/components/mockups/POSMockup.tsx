import { useState } from "react";
import { 
  Barcode, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Minus, 
  Plus, 
  Printer, 
  Search, 
  ShoppingBag, 
  TrendingUp, 
  AlertTriangle 
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  code: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  { id: "1", name: "Premium Basmati Rice (5kg)", category: "Grains", price: 1850, stock: 42, code: "8964001" },
  { id: "2", name: "Pure Cooking Oil (1L)", category: "Grocery", price: 540, stock: 18, code: "8964002" },
  { id: "3", name: "Danedar Black Tea (450g)", category: "Beverages", price: 680, stock: 6, code: "8964003" },
  { id: "4", name: "Full Cream Milk Powder (900g)", category: "Dairy", price: 1250, stock: 24, code: "8964004" },
  { id: "5", name: "Mineral Water Carton (12x500ml)", category: "Drinks", price: 720, stock: 35, code: "8964005" },
];

export const POSMockup = ({ interactive = true }: { interactive?: boolean }) => {
  const [activeTab, setActiveTab] = useState<"billing" | "inventory" | "reports">("billing");
  const [cart, setCart] = useState<{ [id: string]: number }>({
    "1": 1,
    "2": 2,
    "3": 1,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [cashGiven, setCashGiven] = useState(4000);
  const [printed, setPrinted] = useState(false);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const calculateSubtotal = () => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
      return total + (product ? product.price * qty : 0);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.02); // 2% service charge or local cess
  const grandTotal = subtotal + tax;
  const change = Math.max(0, cashGiven - grandTotal);

  const handlePrint = () => {
    setPrinted(true);
    setTimeout(() => setPrinted(false), 2000);
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
      {/* Top Bar simulating software header */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-900 px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="font-semibold text-sm tracking-wide text-slate-200">
            AliPOS <span className="text-xs font-normal text-slate-400">| Smart Mart Edition</span>
          </span>
        </div>

        {/* View switcher tabs */}
        <div className="flex items-center rounded-lg bg-slate-800 p-1 text-xs font-medium">
          <button
            onClick={() => setActiveTab("billing")}
            className={`rounded px-3 py-1 transition-colors ${
              activeTab === "billing" ? "bg-blue-600 text-white shadow-sm" : "text-slate-300 hover:text-white"
            }`}
          >
            Cashier Counter
          </button>
          <button
            onClick={() => setActiveTab("inventory")}
            className={`rounded px-3 py-1 transition-colors ${
              activeTab === "inventory" ? "bg-blue-600 text-white shadow-sm" : "text-slate-300 hover:text-white"
            }`}
          >
            Stock Alerts (1 Low)
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`rounded px-3 py-1 transition-colors ${
              activeTab === "reports" ? "bg-blue-600 text-white shadow-sm" : "text-slate-300 hover:text-white"
            }`}
          >
            Daily Profit
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-mono">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          SYSTEM ONLINE · COUNTER 01
        </div>
      </div>

      {/* Main Interface Content */}
      {activeTab === "billing" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          {/* Left Side: Product Selector */}
          <div className="lg:col-span-7 border-r border-slate-200 bg-slate-50/50 p-4 sm:p-5 flex flex-col">
            <div className="relative mb-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Scan barcode or search item by name..."
                className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-10 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
              <Barcode className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1 content-start overflow-y-auto max-h-[380px] pr-1">
              {SAMPLE_PRODUCTS.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((product) => (
                <button
                  key={product.id}
                  onClick={() => interactive && addToCart(product.id)}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm hover:border-blue-400 hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="text-xs font-semibold text-slate-800 line-clamp-1">{product.name}</span>
                    {product.stock <= 10 && (
                      <span className="rounded bg-rose-50 px-1.5 py-0.5 text-[10px] font-bold text-rose-600 flex items-center gap-0.5">
                        <AlertTriangle className="h-2.5 w-2.5" /> {product.stock} left
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-600">PKR {product.price.toLocaleString()}</span>
                    <span className="text-[11px] text-slate-400">{product.category}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80 pt-3">
              <span>💡 Tip: Click any item to add to the invoice.</span>
              <span className="font-mono">Quick keys: F1 New Sale · F9 Print</span>
            </div>
          </div>

          {/* Right Side: Invoice / Cart */}
          <div className="lg:col-span-5 bg-white p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Invoice #PK-2026-849</h4>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Walk-in Customer · Standard
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  {Object.values(cart).reduce((a, b) => a + b, 0)} Items
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-2 overflow-y-auto max-h-[220px] pr-1">
                {Object.keys(cart).length === 0 ? (
                  <div className="py-12 text-center text-slate-400 text-xs">
                    Cart is empty. Click items on the left to add.
                  </div>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
                    if (!product) return null;
                    return (
                      <div key={id} className="flex items-center justify-between rounded-lg bg-slate-50 p-2.5 text-xs">
                        <div className="flex-1 pr-2">
                          <p className="font-semibold text-slate-800 line-clamp-1">{product.name}</p>
                          <p className="text-[10px] text-slate-400">PKR {product.price.toLocaleString()} each</p>
                        </div>
                        <div className="flex items-center gap-1.5 mr-3">
                          <button
                            onClick={() => interactive && removeFromCart(id)}
                            className="h-5 w-5 rounded bg-white border border-slate-200 grid place-items-center hover:bg-slate-100 text-slate-600"
                          >
                            <Minus className="h-2.5 w-2.5" />
                          </button>
                          <span className="w-5 text-center font-bold text-slate-700">{qty}</span>
                          <button
                            onClick={() => interactive && addToCart(id)}
                            className="h-5 w-5 rounded bg-white border border-slate-200 grid place-items-center hover:bg-slate-100 text-slate-600"
                          >
                            <Plus className="h-2.5 w-2.5" />
                          </button>
                        </div>
                        <span className="font-mono font-bold text-slate-800">
                          PKR {(product.price * qty).toLocaleString()}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Calculations & Total */}
            <div className="border-t border-slate-200 pt-3 mt-4 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="font-mono">PKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Tax / Cess (2%)</span>
                <span className="font-mono">PKR {tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-900 text-base pt-1 border-t border-slate-100">
                <span>Total Payable</span>
                <span className="font-mono text-blue-600 text-lg">PKR {grandTotal.toLocaleString()}</span>
              </div>

              {/* Cash & Change calculation */}
              <div className="mt-2 grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Cash Received</span>
                  <input
                    type="number"
                    value={cashGiven}
                    onChange={(e) => setCashGiven(Number(e.target.value) || 0)}
                    className="w-full bg-transparent font-mono font-bold text-slate-800 focus:outline-none text-sm"
                  />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Change Return</span>
                  <span className="font-mono font-bold text-emerald-600 text-sm">
                    PKR {change.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                onClick={handlePrint}
                className="mt-3 w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 py-3 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-500/20"
              >
                {printed ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-white" /> Receipt Printed & Saved!
                  </>
                ) : (
                  <>
                    <Printer className="h-4 w-4" /> Complete Sale & Print Slip (PKR {grandTotal.toLocaleString()})
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stock / Inventory View */}
      {activeTab === "inventory" && (
        <div className="p-5 min-h-[460px] bg-slate-50/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Live Stock & Reorder Monitor</h4>
              <p className="text-xs text-slate-500">Inventory automatically deducts upon each cashier transaction.</p>
            </div>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5" /> 1 Item Below Reorder Level
            </span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/75 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Item Name</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Cost Price</th>
                  <th className="py-3 px-4">Retail Price</th>
                  <th className="py-3 px-4">Current Stock</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {SAMPLE_PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900">{p.name}</td>
                    <td className="py-3 px-4 text-slate-500">{p.category}</td>
                    <td className="py-3 px-4 font-mono">PKR {Math.round(p.price * 0.82)}</td>
                    <td className="py-3 px-4 font-mono font-semibold">PKR {p.price}</td>
                    <td className="py-3 px-4 font-mono font-bold">{p.stock} units</td>
                    <td className="py-3 px-4">
                      {p.stock <= 10 ? (
                        <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-600">
                          Reorder Alert
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                          Healthy Stock
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reports View */}
      {activeTab === "reports" && (
        <div className="p-5 min-h-[460px] bg-slate-50/50 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Today's Performance Ledger</h4>
              <p className="text-xs text-slate-500">Real-time revenue, estimated margin, and cash register audit.</p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">Updated 2 mins ago</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Gross Revenue (Today)</span>
              <p className="font-mono text-2xl font-bold text-slate-900 mt-1">PKR 84,250</p>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" /> +14.2% vs yesterday
              </span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Estimated Net Margin</span>
              <p className="font-mono text-2xl font-bold text-blue-600 mt-1">PKR 17,690</p>
              <span className="text-[11px] text-slate-400 mt-1 block">~21% average margin</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs text-slate-500 font-medium">Total Receipts Issued</span>
              <p className="font-mono text-2xl font-bold text-slate-900 mt-1">68 Bills</p>
              <span className="text-[11px] text-slate-400 mt-1 block">Average ticket: PKR 1,238</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">Top Selling Categories Today</h5>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Grains & Flour</span>
                  <span className="font-mono font-semibold">PKR 34,500 (41%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "41%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Cooking Oil & Ghee</span>
                  <span className="font-mono font-semibold">PKR 25,800 (31%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "31%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-700 font-medium">Beverages & Dairy</span>
                  <span className="font-mono font-semibold">PKR 14,200 (17%)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "17%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
