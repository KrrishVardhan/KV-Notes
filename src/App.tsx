import React from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Button } from "@/components/ui/8bit/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/8bit/card"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const pdfList = [
  {
    id: 1,
    name: "Data Science",
    pages: "[6CS4-01]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 2,
    name: "Deep Learning",
    pages: "[6CS4-02]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 3,
    name: "CIA",
    pages: "[6CS4-03]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 4,
    name: "Computer Graphics",
    pages: "[6CS4-04]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 5,
    name: "Distributed Algo",
    pages: "[6CS4-05]",
    url: "/pdfs/document1.docx"
  },
  {
    id: 6,
    name: "Cloud Computing",
    pages: "[6CS4-11]",
    url: "/pdfs/document1.docx"
  },
]
function App() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <main className="flex"
      >
        <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% md:block hidden mask-radial-at-center h-screen"
        opacity={0.8}
        gap={12}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
        <article className="flex md:p-10 p-7 flex-wrap md:gap-15 gap-3 min-h-screen"
        >
          {pdfList.map((pdf) => (
            <Card className="w-full max-w-sm h-fit">
              <CardHeader>
                <CardTitle>{pdf.name}</CardTitle>
                <CardDescription>
                  {pdf.pages}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex-col">
                <Button variant="outline" className="w-full cursor-pointer">
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </article>
        <aside className="retro">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </aside>
      </main>

      <div className="w-full md:block hidden">
        <Footer />
      </div>
    </>

  )
}

export default App