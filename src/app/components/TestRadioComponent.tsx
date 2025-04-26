"use client";

import ColorVariation from "@/constants/color-variation";
import { testStore } from "@/stores/testStore";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useRouter } from "next/navigation";

export default function TestRadioComponent() {
  const { setColor, getQuery } = testStore();
  const router = useRouter();

  return (
    <RadioGroup.Root defaultValue={ColorVariation[0]} className="flex gap-2">
      {ColorVariation.map((color) => (
        <RadioGroup.Item
          value={color}
          key={color}
          className="rounded py-1 px-3 border border-blue-400 text-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
          onClick={() => {
            setColor(color);
            router.push(getQuery());
          }}
        >
          <span>{color}</span>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
