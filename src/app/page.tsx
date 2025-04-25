import ColorVariation from "@/constants/color-variation";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const selectedColor = ((await searchParams).color as string) ?? ColorVariation[0];

  return (
    <div>
      <section className="flex items-center justify-center p-5">
        <p className="text-4xl">Hello World!</p>
      </section>
      <section className="flex items-center justify-center">
        <RadioGroup.Root defaultValue={selectedColor} className="flex gap-2">
          {ColorVariation.map((color) => (
            <Link href={`?color=${color}`} key={color}>
              <RadioGroup.Item
                value={color}
                className="rounded py-1 px-3 border border-blue-400 text-blue-400 data-[state=checked]:bg-blue-400 data-[state=checked]:text-white"
              >
                <span>{color}</span>
              </RadioGroup.Item>
            </Link>
          ))}
        </RadioGroup.Root>
      </section>
      <section className="flex items-center justify-center p-5">
        <p className="text-4xl">{selectedColor}</p>
      </section>
    </div>
  );
}
