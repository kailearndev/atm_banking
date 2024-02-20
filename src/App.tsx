import {
  Bar,
  BarChart
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import "./App.css";

function App() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="max-w-lg mx-auto dark:bg-red-200 bg-slate-200 shadow-md p-8 flex flex-col justify-center ">
      <div className="flex flex-col w-full gap-[10px]">
        <div className="flex justify-center">
          <div className="rounded-2xl flex flex-col justify-between  text-white bg-[url('https://static.vecteezy.com/system/resources/previews/024/402/893/non_2x/stars-capes-galaxy-screenshot-and-wallpaper-in-the-style-of-whimsical-cartoon-style-light-blue-and-magenta-luminous-spheres-toycore-mysterious-forms-generat-ai-free-photo.jpg')] to-pink-200 h-[400px] w-[260px] bg-cover bg-no-repeat  drop-shadow-xl p-5">
            <div className="flex justify-end items-end">
              <div className="font-semibold text-2xl">ARB BANK</div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-xl text-gray-50">9999 9999 9999 9999</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-2xl uppercase">nguyen vu luan</div>
              <div className="mt-5 w-[90px]">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-visa-credit-debit-bank-transaction-card-32265.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-yellow-50 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl hover:drop-shadow-2xl h-[120px] gap-3 flex flex-col drop-shadow-xl p-6">
          <div className="text-xl">Account Balance</div>
          <div className="text-2xl">VND 9.000.000</div>
        </div>
        <div className="w-full mt-4 gap-3">
          <div className="flex items-center justify-between ">
            <div className="text-xl font-semibold">Monthly Spend</div>
            <div>
              <Select >
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-5  flex justify-center">
            <BarChart width={360} height={240} data={data}>
              <Bar dataKey="uv" fill="#2F408E" radius={[10, 10, 10, 10]} />
            </BarChart>
          </div>
        </div>
       
        {/* <div className="flex bg-violet-100 justify-between h-[50px] p-4 rounded-full items-center">
        <Input
          prefix="VND"
          className="bg-transparent border-0  border-gray-500 px-2 py-8 focus-visible:ring-offset-0 focus-visible:ring-0 w-[200px]"
          value={''} placeholder="input..."
        />
      </div> */}
     
      </div>
     
    </div>
  );
}

export default App;
