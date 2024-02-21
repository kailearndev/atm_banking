import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import "./App.css";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import FloatButton from "./components/ui/floatbutton";
import DrawerSendMoney from "./pages/DrawerSendMoney";
import { useState } from "react";

function App() {
  const outlet = useOutlet();
  const AppPage = () => {
    const vnd = 999999999
    const [modalSendMoney, setModalSendMoney] = useState<boolean>(false);
    const navigate = useNavigate();
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
    const handleOpenSendMoney = (open: boolean) => {
      setModalSendMoney(open);
    };
    return (
      <div className="flex flex-col h-full gap-[20px]">
        <div className="w-full mt-4 gap-3">
          <div className="flex items-center justify-between ">
            <div className="text-xl font-semibold text-white">Chọn Theme</div>
            <div>
              <Select>
                <SelectTrigger className="w-[120px] bg-gradient-to-r from-purple-500 to-purple-900 text-white focus-visible:ring-offset-0 focus-visible:ring-0">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="bg-gradient-to-r from-purple-500 to-purple-900 text-white">
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
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
        <div className="text-yellow-50 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl hover:drop-shadow-2xl h-[120px] gap-3 flex items-center drop-shadow-xl p-6">
          <div className="flex flex-col gap-2">
            <div className="text-xl w:text-sm">Số dư</div>
            <div className="text-2xl">VND {vnd.toLocaleString()}</div>
          </div>
        </div>
        <div>
          <FloatButton onClick={() => setModalSendMoney((pre) => !pre)} />
        </div>

        <DrawerSendMoney isOpen={handleOpenSendMoney} isShow={modalSendMoney} />
      </div>
    );
  };
  return (
    <div className="h-[100svh] bg-gradient-to-b from-purple-500 to-purple-900 shadow-md p-8 flex justify-center max-h-svh ">
      {outlet ? <Outlet /> : <AppPage />}
    </div>
  );
}

export default App;
