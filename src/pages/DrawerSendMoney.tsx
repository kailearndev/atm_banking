import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "./BankList";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

type DrawerSendMoneyProps = {
  isShow?: boolean;
  isScrollClose?: boolean;
  isOpen: ((open: boolean) => void) | undefined;
};

const DrawerSendMoney = ({
  isShow,
  isScrollClose,
  isOpen,
}: DrawerSendMoneyProps) => {
 

  return (
    <div className="pointer-events-none">
      <Drawer onOpenChange={isOpen} open={isShow} >
        <DrawerContent className=" ring-offset-0 ring-0" onOpenAutoFocus={(e) => e.preventDefault()}>
          <div className="mx-auto w-full max-w-sm ">
            <DrawerHeader>
              <DrawerTitle>Chuyển tiền</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0 w-full flex flex-col gap-4">
              <ComboboxDemo />
              <div className="flex  border-gray-500 justify-between h-[50px]  rounded-xl items-center">
                <Input
                  className="border-0  bg-purple-200 border-gray-500 focus-visible:ring-offset-0 focus-visible:ring-0  w-full"
                  value={"NGUYEN VAN A"}
                  placeholder="Nhập Số Tài Khoản"
                />
              </div>
              <Input
                prefix="VND"
                className="border-0  bg-purple-200 border-gray-500 focus-visible:ring-offset-0 focus-visible:ring-0  w-full"
                value={"9999999999999"}
                placeholder="Nhập Số Tài Khoản"
              />
              <div className="flex  border-gray-500 justify-between rounded-xl items-center">
                <Input
                  prefix="VND"
                  className="bg-transparent border-0 bg-purple-200  border-gray-500  focus-visible:ring-offset-0 focus-visible:ring-0 "
                  value={"99.999.999"}
                  placeholder="Nhập số tiền"
                />
              </div>
              <div className="flex border-gray-500 justify-between rounded-xl items-center">
                <Input
                  prefix="VND"
                  className="bg-transparent border-0 bg-purple-200  border-gray-500  focus-visible:ring-offset-0 focus-visible:ring-0 "
                  value={"Chuyen tien cf"}
                  placeholder="Nội dung"
                />
              </div>
            </div>
            <DrawerFooter>
              <Button>Chuyển</Button>
              <DrawerClose asChild>
                <Button variant="outline">Huỷ</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default DrawerSendMoney;
