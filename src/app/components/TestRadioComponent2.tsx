"use client";

import SizeVariation from "@/constants/size-variation";
import { testStore } from "@/stores/testStore";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useRouter } from "next/navigation";

export default function TestRadioComponent2() {
  const { setSize, getQuery } = testStore();
  const router = useRouter();

  return (
    <RadioGroup.Root defaultValue={SizeVariation[0]} className="flex gap-2">
      {SizeVariation.map((size) => (
        <RadioGroup.Item
          value={size}
          key={size}
          className="rounded py-1 px-3 border border-blue-400 text-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
          onClick={() => {
            setSize(size);
            router.push(getQuery());
          }}
        >
          <span>{size}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
