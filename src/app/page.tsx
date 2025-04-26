import ColorVariation from "@/constants/color-variation";
import TestRadioComponent from "./components/TestRadioComponent";
import SizeVariation from "@/constants/size-variation";
import TestRadioComponent2 from "./components/TestRadioComponent2";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const selectedColor = ((await searchParams).color as string) ?? ColorVariation[0];
  const selectedSize = ((await searchParams).size as string) ?? SizeVariation[0];

  return (
    <div>
      <section className="flex items-center justify-center p-5">
        <p className="text-4xl">Hello World!</p>
      </section>
      <section className="flex flex-col items-center justify-center p-5 gap-5">
        <TestRadioComponent />
        <TestRadioComponent2 />
      </section>
      <section className="flex flex-col items-center justify-center p-5 gap-5">
        <p className="text-4xl">{selectedColor}</p>
        <p className="text-4xl">{selectedSize}</p>
      </section>
    </div>
  );
}
