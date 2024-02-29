import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Fragment, useEffect, useState } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import "./App.css";
import { BackgroundGradientAnimation } from "./components/ui/card-hover";
import FloatButton from "./components/ui/floatbutton";
import DrawerSendMoney from "./pages/DrawerSendMoney";
import { cardService } from "./services/card.service";
import { CardInitialValue, CardResponse } from "./type/card.interface";
import { motion } from "framer-motion";

function App() {
  const outlet = useOutlet();
  const AppPage = () => {
    const [dataResponse, setDataResponse] =
      useState<CardResponse>(CardInitialValue);
    const [clicked, setClicked] = useState(false);

    const [modalSendMoney, setModalSendMoney] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>('');

    const handleOpenSendMoney = (open: boolean) => {
      setModalSendMoney(open);
    };

    useEffect(() => {
      handleFecthCardInfo();
    }, [modalSendMoney]);

    const handleFecthCardInfo = async () => {
      const res: any = await cardService.getInfoCard();
      setTheme(res?.theme)
      setDataResponse(res);
    };


    const handleChangeTheme = (e: string) => {
      const newTheme = e;
      setTheme(newTheme);
     
    }
    return (
      <div className="flex flex-col h-full gap-[20px]">
        
        <div className="w-full mt-4 gap-3">
          <div className="flex items-center justify-between ">
            <div className="text-xl font-semibold text-white">Chọn Theme</div>
            <div>
              <Select
                onValueChange={(e) => {
                  handleChangeTheme(e);
                }}
              >
                <SelectTrigger className="w-[120px] bg-gradient-to-r from-purple-500 to-purple-900 text-white focus-visible:ring-offset-0 focus-visible:ring-0">
                  <SelectValue placeholder={"Mặc định"} />
                </SelectTrigger>
                <SelectContent className="bg-gradient-to-r from-purple-500 to-purple-900 text-white">
                  {dataResponse?.themeActiveLists?.map((item) => (
                    <Fragment key={item.id}>
                      <SelectItem value={item.url}>{item.name}</SelectItem>
                    </Fragment>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
           
               {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 11,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }
          }
        >
          
          <div className="flex justify-center">
            <div
              style={{ backgroundImage: `url(${theme})` }}
              className={`rounded-2xl flex flex-col justify-between text-white  to-pink-200 h-[400px] w-[260px] bg-cover bg-no-repeat drop-shadow-xl p-5`}
            >
              <div className="flex justify-end items-end">
                <div className="font-semibold text-2xl">ARB BANK</div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-xl text-gray-50">
                  {dataResponse?.cardNumber
                    ?.toString()
                    .match(/.{1,4}/g)
                    ?.join(" ")}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-2xl uppercase">
                  {dataResponse.cardHolder}
                </div>
                <div className="mt-5 w-[90px]">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-256/free-visa-credit-debit-bank-transaction-card-32265.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="text-yellow-50 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl hover:drop-shadow-2xl h-[120px] gap-3 flex items-center drop-shadow-xl p-6">
          <div className="flex flex-col gap-2">
            <div className="text-xl w:text-sm">Số dư</div>
            <div className="text-2xl">
              VND {dataResponse?.balance?.toLocaleString()}
            </div>
          </div>
        </div>
        <div>
          <FloatButton onClick={() => setModalSendMoney((pre) => !pre)} />
        </div>

        <DrawerSendMoney
          data={dataResponse}
          isOpen={handleOpenSendMoney}
          isShow={modalSendMoney}
        />
      </div>
    );
  };
  return (
    <BackgroundGradientAnimation>
      <div className="h-[100svh] bg-gradient-to-b from-purple-500 to-purple-900 shadow-md p-8 flex justify-center max-h-svh ">
        {outlet ? <Outlet /> : <AppPage />}
      </div>
    </BackgroundGradientAnimation>
  );
}

export default App;
