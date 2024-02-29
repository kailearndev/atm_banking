
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ComboboxDemo } from "./BankList";
import { cardService } from "@/services/card.service";
import { CardResponse } from "@/type/card.interface";
import { useState } from "react";

type DrawerSendMoneyProps = {
  isShow?: boolean;
  isOpen: ((open: boolean) => void) | undefined;
  data: CardResponse
};

const DrawerSendMoney = ({ isShow, isOpen, data }: DrawerSendMoneyProps) => {
  const [amount, setAmount] = useState<number>(0)
  const [content, setContent] = useState<string>('');
  const handleTransfer = async () => {
    const res = await cardService.transfers({
      cardNumber: data.cardNumber,
      nameHolder: data.cardHolder,
      content: content,
      type: "send",
      amount: amount,
      cardId: data.id,
      bankId: 22,
    });
   if(res) {
    if (isOpen) {
      setContent('')
      setAmount(0)
      isOpen(false);
    }
   }
  };
  return (
    <div className="pointer-events-none">
      <Drawer onOpenChange={isOpen} open={isShow}>
        <DrawerContent
          className=" ring-offset-0 ring-0"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="mx-auto w-full max-w-sm ">
            <DrawerHeader>
              <DrawerTitle>Chuyển tiền</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0 w-full flex flex-col gap-4">
              <ComboboxDemo />
              <div className="flex  border-gray-500 justify-between h-[50px]  rounded-xl items-center">
                <Input
                readOnly
                  className="border-0  bg-purple-200 border-gray-500 focus-visible:ring-offset-0 focus-visible:ring-0  w-full"
                  value={data.cardHolder}
                  placeholder=""
                />
              </div>
              <Input
              readOnly
                prefix="VND"
                className="border-0  bg-purple-200 border-gray-500 focus-visible:ring-offset-0 focus-visible:ring-0  w-full"
                value={data.cardNumber}
                placeholder=""
              />
              <div className="flex  border-gray-500 justify-between rounded-xl items-center">
                <Input
                  prefix="VND"
                  className="bg-transparent border-0 bg-purple-200  border-gray-500  focus-visible:ring-offset-0 focus-visible:ring-0 "
                  value={amount}
                  onChange={(e) => {
                    const newAmount = Number(e.target.value);
                    setAmount(newAmount)
                  }}
                  placeholder="Nhập số tiền"
                />
              </div>
              <div className="flex border-gray-500 justify-between rounded-xl items-center">
                <Input
                  prefix="VND"
                  className="bg-transparent border-0 bg-purple-200  border-gray-500  focus-visible:ring-offset-0 focus-visible:ring-0 "
                  value={content}
                  placeholder="Nội dung"
                  onChange={(e) => {
                   const newContent = e.target.value
                   setContent(newContent)
                  }}
                />
              </div>
            </div>
            <DrawerFooter>
              <Button onClick={handleTransfer}>Chuyển</Button>
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
